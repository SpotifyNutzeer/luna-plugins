import { LunaUnload, Tracer } from "@luna/core";
import { StyleTag } from "@luna/lib";

export const { trace } = Tracer("[ThemeCatppuccin]");
export const unloads = new Set<LunaUnload>();

const catppuccinMochaCss = `
:root {
    /* Catppuccin Mocha Palette */
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

    /* Override Tidal Market Core Variables */
    --market-core-surface-5-color: var(--ctp-crust) !important;
    --market-core-surface-10-color: var(--ctp-base) !important;
    --market-core-surface-20-color: var(--ctp-mantle) !important;
    --market-core-surface-30-color: var(--ctp-surface0) !important;
    
    --market-core-text-10-color: var(--ctp-text) !important;
    --market-core-text-20-color: var(--ctp-subtext1) !important;
    --market-core-text-30-color: var(--ctp-subtext0) !important;
    
    --market-core-emphasis-fill-color: var(--ctp-blue) !important;
    --market-core-focus-color: var(--ctp-lavender) !important;
    --market-core-divider-20-color: var(--ctp-surface0) !important;

    /* Wave Design System Overrides */
    --wave-color-solid-background-primary: var(--ctp-base) !important;
    --wave-color-solid-background-secondary: var(--ctp-mantle) !important;
    --wave-color-solid-background-tertiary: var(--ctp-crust) !important;
    --wave-color-solid-foreground-primary: var(--ctp-text) !important;
    --wave-color-solid-foreground-secondary: var(--ctp-subtext1) !important;
    --wave-color-solid-accent-primary: var(--ctp-blue) !important;
    
    /* UI Element Overrides */
    --market-button-normal-variant-primary-rank-normal-state-background-color: var(--ctp-blue) !important;
    --market-button-normal-variant-primary-rank-normal-state-label-color: var(--ctp-base) !important;
    --market-button-normal-variant-secondary-rank-normal-state-background-color: var(--ctp-surface0) !important;
    
    --market-tabbar-background-color: var(--ctp-crust) !important;
    --market-tabbar-item-selected-value-normal-state-content-color: var(--ctp-blue) !important;
}

/* Global Fixes */
html, body, #wimp, #main, [class*="_mainContainer_"], [class*="_background_"] {
    background-color: var(--ctp-base) !important;
    background-image: none !important;
    color: var(--ctp-text) !important;
}

/* Sidebar Specific */
aside#sidebar, [class*="_sidebar_"], [class*="_fixedNavigation_"] {
    background-color: var(--ctp-mantle) !important;
}

/* Footer Player */
#footerPlayer, [class*="_player_"], [class*="_playerBar_"] {
    background-color: var(--ctp-crust) !important;
}

/* Now Playing View & Gradients Fix */
#nowPlaying, [data-test="now-playing"], [class*="_nowPlayingContainer_"] {
    background-color: var(--ctp-base) !important;
    background-image: none !important;
}

/* Scrollbars */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--ctp-crust); }
::-webkit-scrollbar-thumb { background: var(--ctp-surface1); border-radius: 5px; }
::-webkit-scrollbar-thumb:hover { background: var(--ctp-surface2); }

/* Context Menus */
[data-test="contextmenu"], [class*="_contextMenu_"], [class*="_subMenu_"] {
    background-color: var(--ctp-surface0) !important;
    border: 1px solid var(--ctp-surface1) !important;
}

/* Cards & Rows */
[class*="_card_"], [class*="_rowContainer_"], [class*="_actionItem_"] {
    background-color: transparent !important;
}
[class*="_rowContainer_"]:hover, [class*="_actionItem_"]:hover {
    background-color: var(--ctp-surface0) !important;
}

/* Active/Selected states */
[class*="_selected_"], [class*="_activeTab_"] {
    color: var(--ctp-blue) !important;
    border-bottom-color: var(--ctp-blue) !important;
}

/* Search Bar */
[class*="_searchField_"] {
    background-color: var(--ctp-mantle) !important;
    border-radius: 8px !important;
}
input {
    color: var(--ctp-text) !important;
}
`;

new StyleTag("catppuccin-mocha-theme-v2", unloads, catppuccinMochaCss);
trace.msg.log("Catppuccin Mocha Engine Overwrite Applied!");
