var b=Object.create;var i=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty;var s=(r,a)=>()=>(a||r((a={exports:{}}).exports,a),a.exports);var h=(r,a,o,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of _(a))!f.call(r,t)&&t!==o&&i(r,t,{get:()=>a[t],enumerable:!(n=g(a,t))||n.enumerable});return r};var l=(r,a,o)=>(o=r!=null?b(v(r)):{},h(a||!r||!r.__esModule?i(o,"default",{value:r,enumerable:!0}):o,r));var p=s((B,e)=>{e.exports=luna?.core?.modules?.["@luna/core"];if(e.exports===void 0)throw new Error("Cannot find module @luna/core in luna.core.modules");luna.core.LunaPlugin.plugins["@luna/core"]?.addDependant(luna.core.LunaPlugin.plugins["@luna/theme-catppuccin"])});var d=s((L,c)=>{c.exports=luna?.core?.modules?.["@luna/lib"];if(c.exports===void 0)throw new Error("Cannot find module @luna/lib in luna.core.modules");luna.core.LunaPlugin.plugins["@luna/lib"]?.addDependant(luna.core.LunaPlugin.plugins["@luna/theme-catppuccin"])});var u=l(p(),1),m=l(d(),1),{trace:x}=(0,u.Tracer)("[ThemeCatppuccin]"),w=new Set,k=`
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
/* Spezifischer Fix f\xFCr den Bereich oben links beim Logo */
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
`;new m.StyleTag("catppuccin-mocha-theme-v4",w,k);x.msg.log("Catppuccin Mocha v1.6.7: UI Refinements Applied!");export{x as trace,w as unloads};
//# sourceMappingURL=luna.theme-catppuccin.mjs.map
