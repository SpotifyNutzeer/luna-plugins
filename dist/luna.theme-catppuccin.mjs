var b=Object.create;var s=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var l=(r,a)=>()=>(a||r((a={exports:{}}).exports,a),a.exports);var f=(r,a,o,c)=>{if(a&&typeof a=="object"||typeof a=="function")for(let e of g(a))!v.call(r,e)&&e!==o&&s(r,e,{get:()=>a[e],enumerable:!(c=_(a,e))||c.enumerable});return r};var i=(r,a,o)=>(o=r!=null?b(h(r)):{},f(a||!r||!r.__esModule?s(o,"default",{value:r,enumerable:!0}):o,r));var p=l((L,t)=>{t.exports=luna?.core?.modules?.["@luna/core"];if(t.exports===void 0)throw new Error("Cannot find module @luna/core in luna.core.modules");luna.core.LunaPlugin.plugins["@luna/core"]?.addDependant(luna.core.LunaPlugin.plugins["@luna/theme-catppuccin"])});var u=l((P,n)=>{n.exports=luna?.core?.modules?.["@luna/lib"];if(n.exports===void 0)throw new Error("Cannot find module @luna/lib in luna.core.modules");luna.core.LunaPlugin.plugins["@luna/lib"]?.addDependant(luna.core.LunaPlugin.plugins["@luna/theme-catppuccin"])});var d=i(p(),1),m=i(u(),1),{trace:x}=(0,d.Tracer)("[ThemeCatppuccin]"),y=new Set,k=`
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
`;new m.StyleTag("catppuccin-mocha-theme-v5",y,k);x.msg.log("Catppuccin Mocha v1.6.8: Header Line Cleanup Applied!");export{x as trace,y as unloads};
//# sourceMappingURL=luna.theme-catppuccin.mjs.map
