import { LunaUnload, Tracer } from "@luna/core";
import { MediaItem, ContextMenu, MediaItems, redux } from "@luna/lib";

export const { trace } = Tracer("[LinkCopy]");
export const unloads = new Set<LunaUnload>();

let lastTrackId: string | null = null;
let currentTrackCache: { id: string, links: any } | null = null;

async function getLinks(url: string, trackId: string) {
    // Return cached links if it's the same track
    if (currentTrackCache && currentTrackCache.id === trackId) {
        console.log("[LinkCopy] Using cached links for track:", trackId);
        return currentTrackCache.links;
    }

    console.log("[LinkCopy] Fetching Odesli links for:", url);
    try {
        const response = await fetch(`https://api.song.link/v1-alpha.1/links?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        return data.linksByPlatform;
    } catch (err) {
        console.error("[LinkCopy] Odesli fetch failed:", err);
        return null;
    }
}

// Prefetch for currently playing track
MediaItem.onMediaTransition(unloads, async (mediaItem) => {
    try {
        const id = mediaItem.id;
        const url = `https://listen.tidal.com/track/${id}`;
        console.log("[LinkCopy] Prefetching links for playing track:", id);
        
        const response = await fetch(`https://api.song.link/v1-alpha.1/links?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        
        currentTrackCache = {
            id: id,
            links: data.linksByPlatform
        };
        console.log("[LinkCopy] Prefetch complete.");
    } catch (err) {
        console.error("[LinkCopy] Prefetch failed:", err);
    }
});

function copyToClipboard(text: string, platform: string) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    redux.store.dispatch({
        type: "message/MESSAGE_INFO",
        payload: { message: `${platform} link copied to clipboard!` }
    });
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

// 1. Capture ID on right-click
ContextMenu.onMediaItem(unloads, async ({ mediaCollection }) => {
    try {
        const items = (mediaCollection as any).items || (mediaCollection as any).tMediaItems;
        if (items && items.length > 0) {
            const firstItem = items[0];
            lastTrackId = firstItem.id || firstItem.item?.id;
            console.log("[LinkCopy] Context track set to:", lastTrackId);
        }
    } catch (err) {}
});

// 2. Share menu injection
const checkInterval = setInterval(() => {
    const shareBtn = document.querySelector('[data-test="copy-share-link"]');
    if (shareBtn && lastTrackId) {
        const originalLi = shareBtn.closest('li');
        const parentUl = originalLi?.parentElement;

        if (originalLi && parentUl && !parentUl.querySelector('[data-link-copy-injected="true"]')) {
            const id = lastTrackId!;
            const url = `https://listen.tidal.com/track/${id}`;

            parentUl.appendChild(createClonedButton(originalLi, "Copy Spotify Link", async () => {
                const links = await getLinks(url, id);
                if (links?.spotify?.url) copyToClipboard(links.spotify.url, "Spotify");
                else alert("Spotify link not found.");
            }));

            parentUl.appendChild(createClonedButton(originalLi, "Copy YouTube Link", async () => {
                const links = await getLinks(url, id);
                if (links?.youtube?.url) copyToClipboard(links.youtube.url, "YouTube");
                else alert("YouTube link not found.");
            }));
        }
    }
}, 300);

unloads.add(() => clearInterval(checkInterval));

export { Settings } from "./Settings";

export async function copyCurrentLink(platform: 'spotify' | 'youtube') {
    const mediaItem = await MediaItem.fromPlaybackContext();
    if (!mediaItem) return;
    const id = mediaItem.id;
    const url = `https://listen.tidal.com/track/${id}`;
    const links = await getLinks(url, id);
    const link = links?.[platform]?.url;
    if (link) copyToClipboard(link, platform);
}