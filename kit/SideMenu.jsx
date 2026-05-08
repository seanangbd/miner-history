// Lyra side menu — matches Figma app shell
(function(){
  const { useState, useEffect } = React;
  const Icon = window.LyraIcon;

  // Menu order + items — mirrors /Page-1/Lyra-app-shell
  const MENU = [
    { icon: "home", label: "Overview" },
    { icon: "cog", label: "Configuration", children: [
      "SealMiner Initial Configuration",
      "Scan Miner SN",
      "Batch Initial Configuration",
      "Single Miner Reconfiguration",
      "Move Miners",
      "Download Firmware"
    ]},
    { icon: "miner", label: "Miner Management", children: ["Miner List", "Rack View"] },
    { icon: "warning", label: "Faults & Statuses", children: ["Ready to Repair", "Hashboard Faults", "Fan Faults", "Chip Faults", "Zero Hashrate", "Offline"] },
    { icon: "tools", label: "Maintenance", children: ["Maintenance Record", "Maintenance Summary"] },
    { icon: "bolt", label: "Load Management", children: ["Smart Load Adjustment", "Load Maintenance", "Curtailment"] },
    { icon: "bulb", label: "Insights", children: ["Hashrate Chart", "Sub-Account Hashrate"] },
  ];

  function DigitalClock(){
    const [t, setT] = useState(() => new Date());
    useEffect(() => {
      const id = setInterval(() => setT(new Date()), 1000);
      return () => clearInterval(id);
    }, []);
    // Force date shown in Figma (2025.12.23) when user hasn't clicked anywhere; keep live H:M:S
    const pad = n => String(n).padStart(2, "0");
    const date = "2025.12.23";
    const h = pad(t.getHours()), m = pad(t.getMinutes()), s = pad(t.getSeconds());
    return React.createElement("div", { className: "lyra-clock" },
      React.createElement("div", { className: "lyra-clock-date" }, date),
      React.createElement("div", { className: "lyra-clock-time" },
        React.createElement("span", { className: "lyra-clock-seg" }, h),
        React.createElement("span", { className: "lyra-clock-sep" }, ":"),
        React.createElement("span", { className: "lyra-clock-seg" }, m),
        React.createElement("span", { className: "lyra-clock-sep" }, ":"),
        React.createElement("span", { className: "lyra-clock-seg" }, s)
      )
    );
  }

  window.LyraSideMenu = function({ active = "Miner List", onNavigate = () => {} }){
    const [expanded, setExpanded] = useState({
      "Configuration": true,
      "Miner Management": true,
      "Faults & Statuses": true,
      "Maintenance": true,
      "Load Management": true,
      "Insights": true,
    });
    const toggle = (k) => setExpanded(e => ({ ...e, [k]: !e[k] }));

    return React.createElement("aside", { className: "lyra-side" },
      React.createElement("div", { className: "lyra-side-head" },
        React.createElement("div", { className: "lyra-brand" }, "Lyra"),
        React.createElement(DigitalClock, null)
      ),
      React.createElement("nav", { className: "lyra-nav" },
        MENU.map(item => {
          const open = expanded[item.label];
          const hasChildren = !!(item.children && item.children.length);
          const isActiveParent = item.children && item.children.includes(active);
          return React.createElement("div", { key: item.label, className: "lyra-group" },
            React.createElement("button", {
              className: "lyra-item" + (isActiveParent || active === item.label ? " is-parent-active" : ""),
              onClick: () => hasChildren ? toggle(item.label) : onNavigate(item.label)
            },
              React.createElement("span", { className: "lyra-ico" }, React.createElement(Icon, { name: item.icon })),
              React.createElement("span", { className: "lyra-lbl" }, item.label),
              hasChildren && React.createElement("span", { className: "lyra-chev" + (open ? " is-open" : "") },
                React.createElement(Icon, { name: "chevronDown", size: 12 })
              )
            ),
            hasChildren && open && React.createElement("div", { className: "lyra-sub" },
              item.children.map(c => React.createElement("button", {
                key: c, onClick: () => onNavigate(c),
                className: "lyra-sub-item" + (active === c ? " is-active" : "")
              }, c))
            )
          );
        })
      ),
      React.createElement("div", { className: "lyra-profile" },
        React.createElement("div", { className: "lyra-avatar" }, "SG"),
        React.createElement("div", { style: { flex: 1, minWidth: 0 } },
          React.createElement("div", { className: "lyra-pname" }, "Son Goku"),
          React.createElement("div", { className: "lyra-prole" }, "Arock · General operator")
        ),
        React.createElement("span", { className: "lyra-profile-more" }, "···")
      )
    );
  };
})();
