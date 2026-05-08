/* Floating wireframe-switcher nav (only used in published dist) */
(function(){
  const PAGES = [
    { href: "index.html",     label: "Index" },
    { href: "full-page.html", label: "Full page" },
    { href: "drawer.html",    label: "Drawer" },
    { href: "empty.html",     label: "Empty state" },
  ];
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const style = document.createElement("style");
  style.textContent = `
    .wf-nav {
      position: fixed; top: 12px; left: 50%; transform: translateX(-50%);
      z-index: 9999;
      display: inline-flex; align-items: center; gap: 4px;
      padding: 4px;
      background: rgba(17,17,24,0.92);
      backdrop-filter: blur(8px);
      border-radius: 999px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.18);
      font: 500 12px/16px system-ui, -apple-system, "Segoe UI", sans-serif;
    }
    .wf-nav a {
      padding: 6px 12px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      text-decoration: none;
      transition: background 120ms ease, color 120ms ease;
    }
    .wf-nav a:hover { color: #fff; background: rgba(255,255,255,0.08); }
    .wf-nav a.is-active { color: #111; background: #fff; }
  `;
  document.head.appendChild(style);

  const nav = document.createElement("nav");
  nav.className = "wf-nav";
  PAGES.forEach(p => {
    const a = document.createElement("a");
    a.href = p.href;
    a.textContent = p.label;
    if (p.href.toLowerCase() === here) a.className = "is-active";
    nav.appendChild(a);
  });
  document.body.appendChild(nav);
})();
