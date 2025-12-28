var m=Object.create;var l=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var _=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var s=(r,a)=>()=>(a||r((a={exports:{}}).exports,a),a.exports);var f=(r,a,t,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let o of v(a))!x.call(r,o)&&o!==t&&l(r,o,{get:()=>a[o],enumerable:!(n=g(a,o))||n.enumerable});return r};var p=(r,a,t)=>(t=r!=null?m(_(r)):{},f(a||!r||!r.__esModule?l(t,"default",{value:r,enumerable:!0}):t,r));var u=s((C,e)=>{e.exports=luna?.core?.modules?.["@luna/core"];if(e.exports===void 0)throw new Error("Cannot find module @luna/core in luna.core.modules");luna.core.LunaPlugin.plugins["@luna/core"]?.addDependant(luna.core.LunaPlugin.plugins["@luna/theme-catppuccin"])});var i=s((S,c)=>{c.exports=luna?.core?.modules?.["@luna/lib"];if(c.exports===void 0)throw new Error("Cannot find module @luna/lib in luna.core.modules");luna.core.LunaPlugin.plugins["@luna/lib"]?.addDependant(luna.core.LunaPlugin.plugins["@luna/theme-catppuccin"])});var d=p(u(),1),b=p(i(),1),{trace:h}=(0,d.Tracer)("[ThemeCatppuccin]"),k=new Set,w=`
:root {
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --ctp-text: #cdd6f4;
    --ctp-subtext0: #a6adc8;
    --ctp-blue: #89b4fa;
    --ctp-surface0: #313244;
    --ctp-surface1: #45475a;
    --ctp-lavender: #b4befe;

    /* Tidal Variable Overrides */
    --wave-color-solid-background-primary: var(--ctp-base);
    --wave-color-solid-background-secondary: var(--ctp-mantle);
    --wave-color-solid-background-tertiary: var(--ctp-crust);
    --wave-color-solid-foreground-primary: var(--ctp-text);
    --wave-color-solid-foreground-secondary: var(--ctp-subtext0);
    --wave-color-solid-accent-primary: var(--ctp-blue);
}

/* 1. Global Reset & Backgrounds */
body, #root, [class*="_mainContainer_"], [class*="_background_"] {
    background-color: var(--ctp-base) !important;
    background-image: none !important; /* Removes the ugly gradients from Screenshot */
}

/* 2. Sidebar & Navigation */
[class*="_sidebar_"], [class*="_leftColumn_"], nav, [class*="_bar_"] {
    background-color: var(--ctp-mantle) !important;
}

/* 3. Player Bar (Bottom) */
[class*="_playerBar_"], footer, [class*="_playbackControls_"] {
    background-color: var(--ctp-crust) !important;
    border-top: 1px solid var(--ctp-surface0) !important;
}

/* 4. Settings Cards & Containers (The grey boxes in screenshot) */
[class*="_container_"], [class*="_card_"], [class*="_section_"], [role="tabpanel"] {
    background-color: var(--ctp-mantle) !important;
    border-radius: 12px !important;
    border: 1px solid var(--ctp-surface0) !important;
    color: var(--ctp-text) !important;
}

/* 5. Text Colors */
h1, h2, h3, span, div, a {
    color: var(--ctp-text) !important;
}
[class*="_secondary_"], [class*="_subtitle_"] {
    color: var(--ctp-subtext0) !important;
}

/* 6. Buttons - Catppuccin Style */
button[class*="_button_"], [role="button"] {
    border-radius: 8px !important;
}
button[class*="_primary_"], [class*="_active_"] {
    background-color: var(--ctp-blue) !important;
    color: var(--ctp-base) !important;
}

/* 7. Context Menus */
[class*="_contextMenu_"], [class*="_dropdown_"], [data-test="contextmenu"] {
    background-color: var(--ctp-surface0) !important;
    border: 1px solid var(--ctp-surface1) !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5) !important;
}

/* 8. Scrollbars */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--ctp-crust); }
::-webkit-scrollbar-thumb { background: var(--ctp-surface1); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--ctp-surface2); }

/* Fix for the Luna Settings Page Background specifically */
div[style*="radial-gradient"] {
    background: var(--ctp-base) !important;
}
`;new b.StyleTag("catppuccin-mocha-theme",k,w);h.msg.log("Catppuccin Mocha Clean Theme applied!");export{h as trace,k as unloads};
//# sourceMappingURL=luna.theme-catppuccin.mjs.map
