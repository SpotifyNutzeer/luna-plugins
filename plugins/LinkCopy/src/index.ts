import { LunaUnload, Tracer, ReactiveStore } from "@luna/core";
import { MediaItem, ContextMenu, MediaItems, redux } from "@luna/lib";

export const { trace } = Tracer("[LinkCopy]");
export const unloads = new Set<LunaUnload>();

export const storage = await ReactiveStore.getPluginStorage("LinkCopy", {
    backendUrl: "https://linkhop.paul.wtf",
});

const DEFAULT_BACKEND = "https://linkhop.paul.wtf";
const TARGETS = "spotify,deezer";

type TargetResult = { status: string; url: string | null };
type Targets = Record<string, TargetResult | undefined>;

let currentTrackCache: { id: string; backendUrl: string; targets: Targets } | null = null;

function backendBase(): string {
    return (storage.backendUrl || DEFAULT_BACKEND).replace(/\/+$/, "");
}

function notify(message: string, type: "INFO" | "WARN" = "INFO") {
    redux.store.dispatch({
        type: type === "WARN" ? "message/MESSAGE_WARN" : "message/MESSAGE_INFO",
        payload: { message },
    });
}

async function fetchLinks(url: string, base: string): Promise<Targets | null> {
    const endpoint = `${base}/api/v1/convert?url=${encodeURIComponent(url)}&targets=${TARGETS}`;
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            console.error("[LinkCopy] linkhop request failed:", response.status);
            return null;
        }
        const data = await response.json();
        return data.targets ?? null;
    } catch (err) {
        console.error("[LinkCopy] linkhop fetch failed:", err);
        return null;
    }
}

async function getLinks(url: string, trackId: string) {
    const base = backendBase();
    if (currentTrackCache && currentTrackCache.id === trackId && currentTrackCache.backendUrl === base) {
        return currentTrackCache.targets;
    }
    const targets = await fetchLinks(url, base);
    if (targets) currentTrackCache = { id: trackId, backendUrl: base, targets };
    return targets;
}

MediaItem.onMediaTransition(unloads, async (mediaItem) => {
    const id = String(mediaItem.id);
    const url = `https://listen.tidal.com/track/${id}`;
    const base = backendBase();
    const targets = await fetchLinks(url, base);
    if (targets) currentTrackCache = { id, backendUrl: base, targets };
});

function copyToClipboard(text: string, platform: string) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    notify(`${platform} link copied to clipboard!`);
}

function createClonedButton(originalLi: HTMLElement, text: string, onClick: () => void) {
    const newLi = originalLi.cloneNode(true) as HTMLElement;
    const btn = newLi.querySelector('button');
    if (btn) {
        btn.removeAttribute('data-test');
        newLi.querySelectorAll('span').forEach(span => {
            if (span.innerText && span.innerText.length > 1) span.innerText = text;
        });
        btn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            onClick();
        };
    }
    newLi.setAttribute('data-link-copy-injected', 'true');
    return newLi;
}

ContextMenu.onMediaItem(unloads, async ({ mediaCollection, contextMenu }) => {
    const tMediaItems = (mediaCollection as any).tMediaItems;
    if (!Array.isArray(tMediaItems) || tMediaItems.length === 0) return;
    const id = tMediaItems[0]?.item?.id;
    if (id === undefined || id === null) return;

    const trackId = String(id);
    const url = `https://listen.tidal.com/track/${trackId}`;

    const handleClick = async (platform: 'spotify' | 'deezer', label: string) => {
        const links = await getLinks(url, trackId);
        const link = links?.[platform]?.url;
        if (link) copyToClipboard(link, label);
        else notify(`${label} link not found.`, "WARN");
    };

    const shareBtn = contextMenu.querySelector('[data-test="copy-share-link"]');
    const originalLi = shareBtn?.closest('li');
    const parentUl = originalLi?.parentElement;

    if (originalLi && parentUl) {
        parentUl.appendChild(createClonedButton(originalLi as HTMLElement, "Copy Spotify Link", () => handleClick('spotify', 'Spotify')));
        parentUl.appendChild(createClonedButton(originalLi as HTMLElement, "Copy Deezer Link", () => handleClick('deezer', 'Deezer')));
    } else {
        contextMenu.addButton("Copy Spotify Link", () => handleClick('spotify', 'Spotify'));
        contextMenu.addButton("Copy Deezer Link", () => handleClick('deezer', 'Deezer'));
    }
});

export { Settings } from "./Settings";

export async function copyCurrentLink(platform: 'spotify' | 'deezer') {
    const mediaItem = await MediaItem.fromPlaybackContext();
    if (!mediaItem) return;
    const id = String(mediaItem.id);
    const url = `https://listen.tidal.com/track/${id}`;
    const links = await getLinks(url, id);
    const link = links?.[platform]?.url;
    const label = platform === 'spotify' ? 'Spotify' : 'Deezer';
    if (link) copyToClipboard(link, label);
    else notify(`${label} link not found.`, "WARN");
}
