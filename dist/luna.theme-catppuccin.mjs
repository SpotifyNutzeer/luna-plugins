var m=Object.create;var l=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var s=(r,a)=>()=>(a||r((a={exports:{}}).exports,a),a.exports);var w=(r,a,c,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of f(a))!h.call(r,t)&&t!==c&&l(r,t,{get:()=>a[t],enumerable:!(n=v(a,t))||n.enumerable});return r};var p=(r,a,c)=>(c=r!=null?m(g(r)):{},w(a||!r||!r.__esModule?l(c,"default",{value:r,enumerable:!0}):c,r));var i=s((L,o)=>{o.exports=luna?.core?.modules?.["@luna/core"];if(o.exports===void 0)throw new Error("Cannot find module @luna/core in luna.core.modules");luna.core.LunaPlugin.plugins["@luna/core"]?.addDependant(luna.core.LunaPlugin.plugins["@luna/theme-catppuccin"])});var u=s((S,e)=>{e.exports=luna?.core?.modules?.["@luna/lib"];if(e.exports===void 0)throw new Error("Cannot find module @luna/lib in luna.core.modules");luna.core.LunaPlugin.plugins["@luna/lib"]?.addDependant(luna.core.LunaPlugin.plugins["@luna/theme-catppuccin"])});var d=p(i(),1),b=p(u(),1),{trace:y}=(0,d.Tracer)("[ThemeCatppuccin]"),k=new Set,x=`
:root, html, body {
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

    /* Deep Overrides for Tidal Wave Design System */
    --wave-color-solid-background-primary: var(--ctp-base) !important;
    --wave-color-solid-background-secondary: var(--ctp-mantle) !important;
    --wave-color-solid-background-tertiary: var(--ctp-crust) !important;
    
    --wave-color-solid-foreground-primary: var(--ctp-text) !important;
    --wave-color-solid-foreground-secondary: var(--ctp-subtext0) !important;
    
    --wave-color-solid-accent-primary: var(--ctp-blue) !important;
    --wave-color-solid-accent-secondary: var(--ctp-sapphire) !important;
    
    --wave-color-opacity-background-primary: var(--ctp-base) !important;
    --wave-color-solid-neutral-primary: var(--ctp-surface0) !important;
}

/* Fix for Now Playing and Main Background */
#root, #main, body, [class*="mainContainer"], [class*="background"], [data-test="now-playing-view"] {
    background-color: var(--ctp-base) !important;
    background-image: none !important;
}

/* Sidebar Fixes */
[class*="sidebar"], [class*="leftColumn"], nav, [class*="_bar_"] {
    background-color: var(--ctp-mantle) !important;
}

/* Player Bar Fixes */
footer, [class*="playerBar"], [class*="playbackControls"] {
    background-color: var(--ctp-crust) !important;
}

/* Card & List Fixes (The grey/brown areas from screenshot) */
[class*="card"], [class*="item"], [class*="row"], [class*="section"], [class*="container"] {
    background-color: var(--ctp-mantle) !important;
    border-color: var(--ctp-surface0) !important;
}

[class*="row"]:hover, [class*="item"]:hover {
    background-color: var(--ctp-surface0) !important;
}

/* Text Overrides */
h1, h2, h3, h4, h5, span, div, a, p {
    color: var(--ctp-text) !important;
}

[class*="secondary"], [class*="subtitle"], [class*="artistName"], [class*="duration"] {
    color: var(--ctp-subtext0) !important;
}

/* Selection & Focus */
::selection {
    background-color: var(--ctp-surface2);
    color: var(--ctp-text);
}

/* Scrollbars */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--ctp-crust); }
::-webkit-scrollbar-thumb { background: var(--ctp-surface1); border-radius: 5px; }
::-webkit-scrollbar-thumb:hover { background: var(--ctp-surface2); }

/* Buttons */
button[class*="primary"], [class*="playButton"] {
    background-color: var(--ctp-blue) !important;
    color: var(--ctp-base) !important;
}

/* Search Bar Fix */
[class*="search"], input {
    background-color: var(--ctp-surface0) !important;
    border: 1px solid var(--ctp-surface1) !important;
    color: var(--ctp-text) !important;
}
`;new b.StyleTag("catppuccin-mocha-theme",k,x);y.msg.log("Catppuccin Mocha v1.6.4 applied!");export{y as trace,k as unloads};
//# sourceMappingURL=luna.theme-catppuccin.mjs.map
