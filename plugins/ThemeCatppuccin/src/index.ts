import { LunaUnload, Tracer } from "@luna/core";
import { StyleTag } from "@luna/lib";

export const { trace } = Tracer("[ThemeCatppuccin]");
export const unloads = new Set<LunaUnload>();

const catppuccinMochaCss = `
:root {
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;

    /* Global Tidal variable overrides */
    --wave-color-solid-background-primary: var(--ctp-base) !important;
    --wave-color-solid-background-secondary: var(--ctp-mantle) !important;
    --wave-color-solid-background-tertiary: var(--ctp-crust) !important;
    --wave-color-opacity-background-primary: var(--ctp-base) !important;
}

/* Force backgrounds on main structural elements */
html, body, #wimp, #main, [class*="_mainContainer_"], [class*="_background_"] {
    background-color: var(--ctp-base) !important;
}

/* Fix for the Top Header / Nav bar (The black bar you mentioned) */
header, [class*="_header_"], #mainHeader, [class*="_solidHeader_"], [class*="_container_cb5cbe4"] {
    background-color: var(--ctp-base) !important;
    border-bottom: 1px solid var(--ctp-surface0) !important;
}

/* Sidebar fixes including the area above "All Playlists" */
aside#sidebar, [class*="_sidebar_"], [class*="_fixedNavigation_"], [class*="_sectionHeader_"] {
    background-color: var(--ctp-mantle) !important;
    background-image: none !important;
}

/* Fix for the area over "all playlists" button specifically */
[class*="_container_bfc088f"] {
    background-color: var(--ctp-mantle) !important;
}

/* Footer Player Bar */
footer, #footerPlayer, [class*="_player_"], [class*="_playerBar_"] {
    background-color: var(--ctp-crust) !important;
    border-top: 1px solid var(--ctp-surface0) !important;
}

/* Text & Icons */
* {
    border-color: var(--ctp-surface0) !important;
}
h1, h2, h3, h4, span, div, a, p {
    color: var(--ctp-text);
}
[class*="_secondary_"], [class*="_subTitle_"] {
    color: var(--ctp-subtext0) !important;
}

/* Remove any remaining shadows that look like black spots */
* {
    box-shadow: none !important;
}

/* Now Playing View */
#nowPlaying, [data-test="now-playing"] {
    background-color: var(--ctp-base) !important;
    background-image: none !important;
}

/* Search bar area */
[class*="_searchField_"], input {
    background-color: var(--ctp-surface0) !important;
    color: var(--ctp-text) !important;
}
`;

new StyleTag("catppuccin-mocha-theme-v3", unloads, catppuccinMochaCss);
trace.msg.log("Catppuccin Mocha v1.6.6: Header & Sidebar Fixes applied!");