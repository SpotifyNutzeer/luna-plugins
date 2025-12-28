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

    /* Tidal specific variable overrides if they use them */
    --wave-color-solid-background-primary: var(--ctp-base);
    --wave-color-solid-background-secondary: var(--ctp-mantle);
    --wave-color-solid-foreground-primary: var(--ctp-text);
    --wave-color-opacity-background-primary: rgba(30, 30, 46, 0.8);
}

/* Backgrounds */
body, 
[class*="mainContainer"], 
[class*="background"], 
[class*="contentWrapper"],
#main {
    background-color: var(--ctp-base) !important;
    color: var(--ctp-text) !important;
}

/* Sidebar & Navigation */
[class*="leftColumn"], 
[class*="sidebar"], 
[class*="nav"],
nav {
    background-color: var(--ctp-mantle) !important;
}

/* Player Bar */
[class*="playerBar"], 
footer, 
[class*="playbackControls"] {
    background-color: var(--ctp-crust) !important;
    border-top: 1px solid var(--ctp-surface0) !important;
}

/* Text Colors */
h1, h2, h3, h4, h5, span, a, div {
    color: var(--ctp-text);
}

[class*="secondary"], [class*="artistName"], [class*="description"] {
    color: var(--ctp-subtext0) !important;
}

/* Links & Active States */
a:hover, [class*="active"] {
    color: var(--ctp-blue) !important;
}

/* Buttons */
button[class*="primary"], [class*="button"]._active_ {
    background-color: var(--ctp-blue) !important;
    color: var(--ctp-base) !important;
}

/* Inputs & Surfaces */
input, select, textarea {
    background-color: var(--ctp-surface0) !important;
    color: var(--ctp-text) !important;
    border: 1px solid var(--ctp-surface1) !important;
}

/* Playback Progress Bar */
[class*="progressBar"] [class*="progress"] {
    background-color: var(--ctp-blue) !important;
}

/* Context Menus */
[class*="contextMenu"], [class*="dropdown"] {
    background-color: var(--ctp-surface0) !important;
    border: 1px solid var(--ctp-surface1) !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.5) !important;
}

/* Scrollbars */
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: var(--ctp-mantle);
}
::-webkit-scrollbar-thumb {
    background: var(--ctp-surface1);
    border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
    background: var(--ctp-surface2);
}
`;

new StyleTag("catppuccin-mocha-theme", unloads, catppuccinMochaCss);

trace.msg.log("Catppuccin Mocha theme applied!");
