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

    /* Global Tidal variable overrides */
    --wave-color-solid-background-primary: var(--ctp-base) !important;
    --wave-color-solid-background-secondary: var(--ctp-mantle) !important;
    --wave-color-opacity-background-primary: var(--ctp-base) !important;
}

/* 1. Global Backgrounds */
html, body, #wimp, #main, [class*="_mainContainer_"], [class*="_background_"] {
    background-color: var(--ctp-base) !important;
}

/* 2. Sidebar Refinement */
aside#sidebar, [class*="_sidebar_"], [class*="_header_82e98d0"] {
    background-color: var(--ctp-mantle) !important;
    border-right: 1px solid var(--ctp-surface0) !important;
}
[class*="_header_82e98d0"], [class*="_logoButton_"] {
    border-bottom: none !important;
}

/* 3. Header & Navigation Fixes (The "Double Line" issue) */
#mainHeader, [class*="_header_3fe665f"], [class*="_solidHeader_"] {
    background-color: var(--ctp-base) !important;
    border-bottom: 1px solid var(--ctp-surface0) !important; /* This is the bottom line that stays */
}

/* Removes the inner line directly under search/arrows */
[class*="_container_cb5cbe4"] {
    border-bottom: none !important;
    background-color: transparent !important;
}

/* 4. Music Page - Shortcuts */
[class*="_shortcutItem_"] {
    background-color: var(--ctp-surface0) !important;
    border-radius: 12px !important;
}

/* 5. Playlists & List Headers */
[class*="_sectionHeader_"], [class*="_container_bfc088f"] {
    background-color: var(--ctp-mantle) !important;
}

/* 6. Footer Player Bar */
footer, #footerPlayer, [class*="_player_"], [class*="_playerBar_"] {
    background-color: var(--ctp-crust) !important;
    border-top: 1px solid var(--ctp-surface0) !important;
}

/* 7. General Elements */
* {
    box-shadow: none !important;
}
h1, h2, h3, h4, span, div, a, p {
    color: var(--ctp-text);
}
[class*="_secondary_"], [class*="_subTitle_"] {
    color: var(--ctp-subtext0) !important;
}

/* Search Bar Styling */
[class*="_searchField_"] {
    background-color: var(--ctp-mantle) !important;
    border: 1px solid var(--ctp-surface0) !important;
    border-radius: 8px !important;
}
input {
    color: var(--ctp-text) !important;
}
`;

new StyleTag("catppuccin-mocha-theme-v5", unloads, catppuccinMochaCss);
trace.msg.log("Catppuccin Mocha v1.6.8: Header Line Cleanup Applied!");