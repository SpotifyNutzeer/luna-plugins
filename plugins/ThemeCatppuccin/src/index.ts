import { LunaUnload, Tracer } from "@luna/core";
import { StyleTag } from "@luna/lib";

export const { trace } = Tracer("[ThemeCatppuccin]");
export const unloads = new Set<LunaUnload>();

const catppuccinMochaCss = `
:root {
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --ctp-text: #cdd6f4;
    --ctp-subtext0: #a6adc8;
    --ctp-blue: #89b4fa;
    --ctp-surface0: #313244;
    --ctp-surface1: #45475a;
    --ctp-surface2: #585b70;

    /* Global Tidal variable overrides */
    --wave-color-solid-background-primary: var(--ctp-base) !important;
    --wave-color-solid-background-secondary: var(--ctp-mantle) !important;
    --wave-color-solid-background-tertiary: var(--ctp-crust) !important;
    --wave-color-opacity-background-primary: var(--ctp-base) !important;
}

/* 1. Global Backgrounds */
html, body, #wimp, #main, [class*="_mainContainer_"], [class*="_background_"] {
    background-color: var(--ctp-base) !important;
    background-image: none !important;
}

/* 2. Sidebar & Sidebar Header (Tidal Icon Area) */
aside#sidebar, [class*="_sidebar_"], [class*="_fixedNavigation_"] {
    background-color: var(--ctp-mantle) !important;
}
/* Spezifischer Fix für den Bereich oben links beim Logo */
[class*="_header_82e98d0"], [class*="_logoButton_"] {
    background-color: var(--ctp-mantle) !important;
    border-bottom: none !important; /* Entfernt die Linie unter dem Logo */
}

/* 3. Top Navigation Bar (Back/Forward Buttons) */
#mainHeader, [class*="_header_3fe665f"], [class*="_container_cb5cbe4"] {
    background-color: var(--ctp-base) !important;
    border-bottom: 1px solid var(--ctp-surface0) !important; /* Mocha Border statt Schwarz */
}

/* 4. Music Page - Shortcuts (Rewind 2025, etc.) */
[class*="_shortcutItem_"] {
    background-color: var(--ctp-surface0) !important;
    border-radius: 12px !important;
}
[class*="_shortcutItem_"] div {
    color: var(--ctp-text) !important;
}

/* 5. Playlists & List Headers */
[class*="_sectionHeader_"], [class*="_container_bfc088f"] {
    background-color: var(--ctp-mantle) !important;
    border-bottom: 1px solid var(--ctp-surface0) !important;
}

/* 6. Footer Player Bar */
footer, #footerPlayer, [class*="_player_"], [class*="_playerBar_"] {
    background-color: var(--ctp-crust) !important;
    border-top: 1px solid var(--ctp-surface0) !important;
}

/* 7. Text & Borders Fix */
h1, h2, h3, h4, h5, span, div, a, p {
    color: var(--ctp-text);
}
[class*="_secondary_"], [class*="_subTitle_"], [class*="_description_"] {
    color: var(--ctp-subtext0) !important;
}

/* Global Shadow & Border Reset */
* {
    box-shadow: none !important;
    border-color: var(--ctp-surface0) !important;
}

/* 8. Now Playing View */
#nowPlaying, [data-test="now-playing"] {
    background-color: var(--ctp-base) !important;
    background-image: none !important;
}

/* 9. Search & Inputs */
[class*="_searchField_"], input {
    background-color: var(--ctp-surface0) !important;
    border: 1px solid var(--ctp-surface1) !important;
    color: var(--ctp-text) !important;
    border-radius: 8px !important;
}
`;

new StyleTag("catppuccin-mocha-theme-v4", unloads, catppuccinMochaCss);
trace.msg.log("Catppuccin Mocha v1.6.7: UI Refinements Applied!");
