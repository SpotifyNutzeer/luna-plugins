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
    --wave-color-solid-background-primary: var(--ctp-base);
    --wave-color-solid-background-secondary: var(--ctp-mantle);
    --wave-color-solid-background-tertiary: var(--ctp-crust);
    
    --wave-color-solid-foreground-primary: var(--ctp-text);
    --wave-color-solid-foreground-secondary: var(--ctp-subtext0);
    --wave-color-solid-foreground-tertiary: var(--ctp-overlay2);
    
    --wave-color-opacity-background-primary: rgba(30, 30, 46, 0.8);
    --wave-color-opacity-background-secondary: rgba(24, 24, 37, 0.8);
    
    --wave-color-solid-accent-primary: var(--ctp-blue);
    --wave-color-solid-accent-secondary: var(--ctp-sapphire);
    
    --wave-color-opacity-accent-primary: rgba(137, 180, 250, 0.2);
    
    --wave-color-solid-neutral-primary: var(--ctp-surface0);
    --wave-color-solid-neutral-secondary: var(--ctp-surface1);
}

/* Force dark background everywhere */
body, #main, [id="root"], [class*="mainContainer"], [class*="background"], [class*="contentWrapper"] {
    background-color: var(--ctp-base) !important;
    color: var(--ctp-text) !important;
}

/* Sidebar & Navigation Fixes */
[class*="sidebar"], [class*="leftColumn"], [class*="nav"], nav, [class*="_bar_"] {
    background-color: var(--ctp-mantle) !important;
}

/* Player Bar Fixes */
[class*="playerBar"], footer, [class*="playbackControls"], [class*="_bar_"] {
    background-color: var(--ctp-crust) !important;
    border-color: var(--ctp-surface0) !important;
}

/* Text & Title Overrides */
h1, h2, h3, h4, h5, h6, 
[class*="title"], [class*="header"], 
[class*="itemName"], [class*="artistName"],
span, div, a {
    color: var(--ctp-text);
}

/* Secondary/Dimmed Text */
[class*="secondary"], [class*="subtitle"], [class*="description"], [class*="meta"], [class*="duration"] {
    color: var(--ctp-subtext0) !important;
}

/* List Items & Rows */
[class*="row"], [class*="item"], [role="row"], [role="listitem"] {
    border-bottom-color: var(--ctp-surface0) !important;
}
[class*="row"]:hover, [class*="item"]:hover, [class*="_active_"] {
    background-color: var(--ctp-surface0) !important;
}

/* Buttons */
button, [role="button"] {
    color: var(--ctp-text);
}
button[class*="primary"], [class*="button"]._active_, [class*="playButton"] {
    background-color: var(--ctp-blue) !important;
    color: var(--ctp-base) !important;
}

/* Context Menus & Dropdowns */
[class*="contextMenu"], [class*="dropdown"], [class*="popup"], [class*="menu"], [data-test="contextmenu"] {
    background-color: var(--ctp-surface0) !important;
    border: 1px solid var(--ctp-surface1) !important;
    box-shadow: 0 8px 24px rgba(0,0,0,0.5) !important;
}
[class*="actionItem"], [class*="menuItem"], [data-type="contextmenu-item"] {
    background-color: transparent !important;
}
[class*="actionItem"]:hover, [class*="menuItem"]:hover, [data-type="contextmenu-item"]:hover {
    background-color: var(--ctp-surface1) !important;
}

/* Progress Bars & Sliders */
[class*="progressBar"], [class*="slider"] {
    background-color: var(--ctp-surface0) !important;
}
[class*="progress"], [class*="track"] {
    background-color: var(--ctp-blue) !important;
}

/* Icons */
svg, [class*="icon"] {
    fill: currentColor;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}
::-webkit-scrollbar-track {
    background: var(--ctp-crust);
}
::-webkit-scrollbar-thumb {
    background: var(--ctp-surface1);
    border: 3px solid var(--ctp-crust);
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
    background: var(--ctp-surface2);
}

/* Inputs */
input[type="text"], input[type="search"], textarea {
    background-color: var(--ctp-mantle) !important;
    border: 1px solid var(--ctp-surface0) !important;
    color: var(--ctp-text) !important;
    border-radius: 8px !important;
}
`;

new StyleTag("catppuccin-mocha-theme", unloads, catppuccinMochaCss);

trace.msg.log("Catppuccin Mocha theme applied successfully!");