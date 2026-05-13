// Miner History — components for full page + drawer
(function(){
  const { useState, useMemo } = React;
  const Icon = window.LyraIcon;

  // ---------- INLINE SVG ICONS specific to History ----------
  const SvgReboot = () => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M13.5 4.5A6 6 0 1 0 14 8" }),
    React.createElement("path", { d: "M14 2V5H11" })
  );
  const SvgPool = () => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M2 4H14M2 8H14M2 12H14" }),
    React.createElement("circle", { cx: 5, cy: 4, r: 1, fill: "currentColor" }),
    React.createElement("circle", { cx: 10, cy: 8, r: 1, fill: "currentColor" }),
    React.createElement("circle", { cx: 7, cy: 12, r: 1, fill: "currentColor" })
  );
  const SvgMode = () => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M3 5L6 5" }),
    React.createElement("circle", { cx: 9, cy: 5, r: 2 }),
    React.createElement("path", { d: "M11 5L13 5" }),
    React.createElement("path", { d: "M3 11L5 11" }),
    React.createElement("circle", { cx: 8, cy: 11, r: 2 }),
    React.createElement("path", { d: "M10 11L13 11" })
  );
  const SvgMove = () => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M3 8H13M9 4L13 8L9 12" })
  );
  const SvgRepair = () => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M11 3L13 5L9 9L7 7L11 3Z" }),
    React.createElement("path", { d: "M7 7L3 11V13H5L9 9" })
  );
  const SvgExternal = () => React.createElement("svg", { width: 13, height: 13, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M6 3H3V13H13V10" }),
    React.createElement("path", { d: "M9 3H13V7" }),
    React.createElement("path", { d: "M8 8L13 3" })
  );
  const SvgClose = () => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M3.5 3.5L12.5 12.5M12.5 3.5L3.5 12.5" })
  );
  const SvgChevDown = () => React.createElement("svg", { width: 14, height: 14, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M3.5 6L8 10.5L12.5 6" })
  );
  const SvgArrowR = () => React.createElement("svg", { width: 14, height: 14, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M3 8H13M9 4L13 8L9 12" })
  );
  const SvgCalendar = () => React.createElement("svg", { width: 14, height: 14, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("rect", { x: 2.5, y: 3.5, width: 11, height: 10, rx: 1.5 }),
    React.createElement("path", { d: "M5 2V4M11 2V4M2.5 6.5H13.5" })
  );
  const SvgDownload = () => React.createElement("svg", { width: 14, height: 14, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M8 2V11M4 7L8 11L12 7M3 14H13" })
  );
  const SvgSearch = () => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("circle", { cx: 7, cy: 7, r: 4.5 }),
    React.createElement("path", { d: "M10.5 10.5L14 14" })
  );
  const SvgMore = () => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("circle", { cx: 4, cy: 8, r: 1.4 }),
    React.createElement("circle", { cx: 8, cy: 8, r: 1.4 }),
    React.createElement("circle", { cx: 12, cy: 8, r: 1.4 })
  );

  function opIcon(type){
    if (type === "reboot") return React.createElement(SvgReboot);
    if (type === "pool")   return React.createElement(SvgPool);
    if (type === "mode")   return React.createElement(SvgMode);
    if (type === "move")   return React.createElement(SvgMove);
    if (type === "repair") return React.createElement(SvgRepair);
    if (type === "firmware") return React.createElement(SvgRepair);
    if (type === "log") return React.createElement(SvgDownload);
    return null;
  }
  function opIconClass(type){
    return "ic-" + type;
  }

  // ---------- EMPTY STATE (entered from menu, no miner selected) ----------
  window.MinerHistoryEmpty = function(){
    const [q, setQ] = useState("");
    const recents = window.MH_LIST.slice(0, 5);
    return React.createElement("div", { className: "mh-content" },
      React.createElement("div", { className: "mh-breadcrumb" },
        React.createElement("a", null, "Miner Management"),
        React.createElement("span", { className: "mh-breadcrumb-sep" }, "/"),
        React.createElement("a", null, "Activity Log"),
        React.createElement("span", { className: "mh-breadcrumb-sep" }, "/"),
        React.createElement("span", { className: "mh-breadcrumb-current" }, "Miner History"),
      ),

      React.createElement("div", { className: "mh-empty-head" },
        React.createElement("div", { className: "mh-empty-title" }, "Miner History"),
        React.createElement("div", { className: "mh-empty-sub" },
          "View the full history of a single miner — operations, maintenance records and movements. Select a miner to begin."
        ),
      ),

      React.createElement("div", { className: "mh-empty-card" },
        React.createElement("div", { className: "mh-empty-search-label" }, "Find a miner"),
        React.createElement("div", { className: "mh-empty-search" },
          React.createElement("span", { className: "mh-empty-search-icon" }, React.createElement(SvgSearch)),
          React.createElement("input", {
            className: "mh-empty-search-input",
            placeholder: "Enter IP address or serial number…",
            value: q, onChange: (e) => setQ(e.target.value)
          }),
          React.createElement("button", { className: "btn btn-primary btn-m", style: { marginLeft: 8 } }, "Open history"),
        ),
      ),

      React.createElement("div", { className: "mh-empty-section" },
        React.createElement("div", { className: "mh-empty-section-head" },
          React.createElement("div", { className: "mh-empty-section-title" }, "Recently viewed"),
          React.createElement("a", { className: "mh-empty-section-link" }, "View all miners →"),
        ),
        React.createElement("div", { className: "mh-empty-list" },
          recents.map((r, i) => React.createElement("div", { key: i, className: "mh-empty-row" },
            React.createElement("div", { className: "mh-empty-row-icon" }, React.createElement(Icon, { name: "miner", size: 18 })),
            React.createElement("div", { className: "mh-empty-row-main" },
              React.createElement("div", { className: "mh-empty-row-ip" }, r.ip),
              React.createElement("div", { className: "mh-empty-row-meta" }, r.sn + " · " + r.model + " · " + r.loc),
            ),
            React.createElement("a", { className: "mh-empty-row-link" }, "View history →"),
          ))
        ),
      ),
    );
  };

  // ---------- BREADCRUMB ----------
  function Breadcrumb({ ip }){
    return React.createElement("div", { className: "mh-breadcrumb" },
      React.createElement("a", null, "Miner Management"),
      React.createElement("span", { className: "sep" }, "›"),
      React.createElement("a", null, "Miner List"),
      React.createElement("span", { className: "sep" }, "›"),
      React.createElement("a", null, ip),
    );
  }

  // ---------- IDENTITY HEADER ----------
  function IdentityHeader({ miner }){
    return React.createElement("div", { className: "mh-page-head" },
      React.createElement("div", { className: "mh-id-card" },
        React.createElement("div", { className: "mh-id-icon" },
          React.createElement(Icon, { name: "miner", size: 24 })
        ),
        React.createElement("div", { className: "mh-id-main" },
          React.createElement("div", { className: "mh-id-title-row" },
            React.createElement("div", { className: "mh-id-ip" }, miner.ip),
            React.createElement("span", { className: "tag tag-positive", style: { padding: "2px 8px" } },
              React.createElement("span", { className: "tag-dot" }), "Online"),
          ),
          React.createElement("div", { className: "mh-id-meta" },
            React.createElement("div", { className: "mh-id-meta-item" },
              React.createElement("span", { className: "mh-id-meta-label" }, "SN"),
              React.createElement("span", { className: "mh-id-meta-value mono" }, miner.sn)),
            React.createElement("div", { className: "mh-id-meta-item" },
              React.createElement("span", { className: "mh-id-meta-label" }, "Model"),
              React.createElement("span", { className: "mh-id-meta-value" }, miner.model)),
            React.createElement("div", { className: "mh-id-meta-item" },
              React.createElement("span", { className: "mh-id-meta-label" }, "Location"),
              React.createElement("span", { className: "mh-id-meta-value" }, miner.location)),
          )
        ),
      ),
      React.createElement("div", { className: "mh-id-actions" },
        React.createElement("button", { className: "btn btn-outline btn-m" },
          React.createElement(SvgDownload), React.createElement("span", { style: { marginLeft: 6 } }, "Export CSV")),
        null,
      )
    );
  }

  // ---------- DATE PILLS ----------
  function DateFilter({ value, onChange }){
    const opts = [
      { id: "24h",  label: "Last 24 hours" },
      { id: "7d",   label: "Last 7 days" },
      { id: "30d",  label: "Last 30 days" },
    ];
    return React.createElement("div", { className: "mh-date-pills" },
      opts.map(o => React.createElement("button", {
        key: o.id,
        className: "mh-pill" + (value === o.id ? " is-active" : ""),
        onClick: () => onChange(o.id)
      }, o.label)),
      React.createElement("button", {
        className: "mh-pill mh-pill-custom" + (value === "custom" ? " is-active" : ""),
        onClick: () => onChange("custom")
      }, React.createElement(SvgCalendar), "Custom")
    );
  }

  // ---------- OPERATIONS TAB ----------
  function OperationsTable({ rows, openId, setOpenId }){
    return React.createElement("table", { className: "mh-table" },
      React.createElement("thead", null,
        React.createElement("tr", null,
          React.createElement("th", { style: { width: 180 } }, "Start time"),
          React.createElement("th", null, "Operation"),
          React.createElement("th", { style: { width: 110 } }, "Result"),
          React.createElement("th", { style: { width: 100 } }, "Duration"),
          React.createElement("th", { style: { width: 200 } }, "Operator"),
          React.createElement("th", { style: { width: 100, textAlign: "right" } }, "Actions"),
        )
      ),
      React.createElement("tbody", null,
        rows.flatMap(r => {
          const isOpen = openId === r.id;
          const out = [
            React.createElement("tr", { key: r.id, className: "row" + (isOpen ? " is-open" : ""), onClick: () => setOpenId(isOpen ? null : r.id) },
              React.createElement("td", null,
                React.createElement("div", { className: "ts" }, r.ts),
              ),
              React.createElement("td", null,
                React.createElement("div", { className: "mh-op-cell" },
                  React.createElement("div", { className: "mh-op-icon " + opIconClass(r.type) }, opIcon(r.type)),
                  React.createElement("div", null,
                    React.createElement("div", { className: "mh-op-name" }, r.title),
                  ),
                ),
              ),
              React.createElement("td", null,
                r.result === "success"
                  ? React.createElement("span", { className: "mh-result mh-result-success" },
                      React.createElement("span", { className: "mh-result-dot" }), "Success")
                  : React.createElement("span", { className: "mh-result mh-result-failed" },
                      React.createElement("span", { className: "mh-result-dot" }), "Failed")
              ),
              React.createElement("td", { className: "mono" }, r.duration),
              React.createElement("td", null,
                React.createElement("span", { className: "mh-operator" },
                  React.createElement("span", { className: "mh-operator-avatar " + r.operator.kind },
                    r.operator.kind === "system" ? "SY" : r.operator.initials),
                  React.createElement("span", { className: "mh-operator-name" + (r.operator.kind === "system" ? " is-system" : "") }, r.operator.name)
                )
              ),
              React.createElement("td", { style: { textAlign: "right" } },
                React.createElement("button", { className: "mh-row-action" + (isOpen ? " is-open" : ""), onClick: (e) => { e.stopPropagation(); setOpenId(isOpen ? null : r.id); } },
                  isOpen ? "Hide" : "View", React.createElement("span", { className: "chev" }, React.createElement(SvgChevDown))
                )
              ),
            )
          ];
          if (isOpen) {
            out.push(React.createElement("tr", { key: r.id + "-x", className: "mh-expand-row" },
              React.createElement("td", { colSpan: 6 },
                React.createElement(OperationDetail, { row: r })
              )
            ));
          }
          return out;
        })
      )
    );
  }

  function OperationDetail({ row }){
    const d = row.detail;
    let body;
    if (row.type === "move") {
      body = React.createElement("div", { className: "mh-detail-grid", style: { gridTemplateColumns: "repeat(2, 1fr)" } },
        React.createElement("div", { className: "mh-detail-item" },
          React.createElement("div", { className: "mh-detail-label" }, "Old IP"),
          React.createElement("div", { className: "mh-detail-value mono" }, d.from.ip)),
        React.createElement("div", { className: "mh-detail-item" },
          React.createElement("div", { className: "mh-detail-label" }, "New IP"),
          React.createElement("div", { className: "mh-detail-value mono" }, d.to.ip)),
        React.createElement("div", { className: "mh-detail-item" },
          React.createElement("div", { className: "mh-detail-label" }, "Old location"),
          React.createElement("div", { className: "mh-detail-value" }, d.from.loc)),
        React.createElement("div", { className: "mh-detail-item" },
          React.createElement("div", { className: "mh-detail-label" }, "New location"),
          React.createElement("div", { className: "mh-detail-value" }, d.to.loc)),
      );
    } else if (row.type === "pool") {
      const poolItem = (label, val) => React.createElement("div", { className: "mh-detail-item" },
        React.createElement("div", { className: "mh-detail-label" }, label),
        React.createElement("div", { className: "mh-detail-value mono" }, val || "—"));
      body = React.createElement("div", { className: "mh-detail-grid", style: { gridTemplateColumns: "1fr 1fr" } },
        React.createElement("div", { className: "mh-detail-item", style: { gridColumn: "1 / span 2" } },
          React.createElement("div", { className: "mh-detail-label" }, "Configuration name"),
          React.createElement("div", { className: "mh-detail-value" }, d.configName)),
        poolItem("Pool 1 URL", d.pool1Url), poolItem("Pool 1 sub-account", d.pool1Sub),
        poolItem("Pool 2 URL", d.pool2Url), poolItem("Pool 2 sub-account", d.pool2Sub),
        poolItem("Pool 3 URL", d.pool3Url), poolItem("Pool 3 sub-account", d.pool3Sub),
      );
    } else if (row.type === "mode") {
      body = React.createElement("div", { className: "mh-detail-grid", style: { gridTemplateColumns: "1fr 1fr" } },
        React.createElement("div", { className: "mh-detail-item" },
          React.createElement("div", { className: "mh-detail-label" }, "End time"),
          React.createElement("div", { className: "mh-detail-value mono" }, d.endTime)),
        React.createElement("div", { className: "mh-detail-item" },
          React.createElement("div", { className: "mh-detail-label" }, "Work mode"),
          React.createElement("div", { className: "mh-detail-value" }, d.workMode)),
      );
    } else if (row.type === "firmware") {
      body = React.createElement("div", { className: "mh-detail-grid", style: { gridTemplateColumns: "repeat(3, 1fr)" } },
        React.createElement("div", { className: "mh-detail-item" },
          React.createElement("div", { className: "mh-detail-label" }, "End time"),
          React.createElement("div", { className: "mh-detail-value mono" }, d.endTime)),
        React.createElement("div", { className: "mh-detail-item" },
          React.createElement("div", { className: "mh-detail-label" }, "Firmware category"),
          React.createElement("div", { className: "mh-detail-value" }, d.firmwareCategory)),
        React.createElement("div", { className: "mh-detail-item" },
          React.createElement("div", { className: "mh-detail-label" }, "Firmware version"),
          React.createElement("div", { className: "mh-detail-value mono" }, d.firmwareVersion)),
      );
    } else if (row.type === "log") {
      body = React.createElement("div", { className: "mh-detail-grid", style: { gridTemplateColumns: "1fr" } },
        React.createElement("div", { className: "mh-detail-item" },
          React.createElement("div", { className: "mh-detail-label" }, "End time"),
          React.createElement("div", { className: "mh-detail-value mono" }, d.endTime)),
      );
    } else {
      // reboot
      body = React.createElement("div", { className: "mh-detail-grid", style: { gridTemplateColumns: "1fr" } },
        React.createElement("div", { className: "mh-detail-item" },
          React.createElement("div", { className: "mh-detail-label" }, "End time"),
          React.createElement("div", { className: "mh-detail-value mono" }, d.endTime)),
      );
    }
    const failureBlock = row.failure && React.createElement("div", { className: "mh-fail-block" },
      React.createElement("div", { className: "mh-fail-label" }, "Failure reason"),
      React.createElement("div", { className: "mh-fail-msg" }, row.failure));
    return React.createElement("div", { className: "mh-expand-inner" },
      React.createElement("div", { className: "mh-expand-head" },
        React.createElement("div", { className: "mh-expand-title" }, "Operation detail"),
        React.createElement("a", { className: "mh-expand-link" }, "View in Log Center", React.createElement(SvgExternal))
      ),
      body,
      failureBlock
    );
  }

  // ---------- MAINTENANCE TAB ----------
  function MaintenanceTable({ rows, openId, setOpenId }){
    return React.createElement("table", { className: "mh-table" },
      React.createElement("thead", null,
        React.createElement("tr", null,
          React.createElement("th", { style: { width: 170 } }, "Created time"),
          React.createElement("th", { style: { width: 170 } }, "Updated time"),
          React.createElement("th", null, "Fix details"),
          React.createElement("th", { style: { width: 180 } }, "Technician"),
          React.createElement("th", { style: { width: 100, textAlign: "right" } }, "Actions"),
        )
      ),
      React.createElement("tbody", null,
        rows.flatMap(r => {
          const isOpen = openId === r.id;
          const out = [
            React.createElement("tr", { key: r.id, className: "row" + (isOpen ? " is-open" : ""), onClick: () => setOpenId(isOpen ? null : r.id) },
              React.createElement("td", null, React.createElement("div", { className: "ts" }, r.createdTs)),
              React.createElement("td", null, React.createElement("div", { className: "ts" }, r.updatedTs)),
              React.createElement("td", null,
                React.createElement("div", { className: "mh-maint-pills" },
                  r.details.map((d, i) => React.createElement("span", { key: i, className: "mh-maint-pill is-" + d.kind },
                    React.createElement("span", { className: "dot" }), d.text
                  ))
                )
              ),
              React.createElement("td", null,
                React.createElement("span", { className: "mh-operator" },
                  React.createElement("span", { className: "mh-operator-avatar user" }, r.technician.initials),
                  React.createElement("span", { className: "mh-operator-name" }, r.technician.name),
                )
              ),
              React.createElement("td", { style: { textAlign: "right" } },
                React.createElement("button", { className: "mh-row-action" + (isOpen ? " is-open" : ""), onClick: (e) => { e.stopPropagation(); setOpenId(isOpen ? null : r.id); } },
                  isOpen ? "Hide" : "View", React.createElement("span", { className: "chev" }, React.createElement(SvgChevDown))
                )
              )
            ),
          ];
          if (isOpen) {
            out.push(React.createElement("tr", { key: r.id + "-x", className: "mh-expand-row" },
              React.createElement("td", { colSpan: 5 },
                React.createElement(MaintenanceDetail, { row: r })
              )
            ));
          }
          return out;
        })
      )
    );
  }

  function MaintenanceDetail({ row }){
    const e = row.expand;
    return React.createElement("div", { className: "mh-expand-inner" },
      React.createElement("div", { className: "mh-expand-head" },
        React.createElement("div", { className: "mh-expand-title" }, "Maintenance detail · " + row.id),
        React.createElement("a", { className: "mh-expand-link" }, "View maintenance record", React.createElement(SvgExternal))
      ),
      React.createElement("div", { className: "mh-maint-summary" },
        e.sections.map((s, idx) => React.createElement("div", { key: idx, className: "mh-maint-row" },
          React.createElement("div", { className: "mh-maint-row-label" }, s.title),
          React.createElement("div", { className: "mh-maint-list" },
            s.lines.map((ln, j) => React.createElement("div", { key: j, className: "mh-maint-line" },
              React.createElement("span", { className: "mh-maint-action-tag act-" + ln.action }, ln.action),
              React.createElement("span", { className: "mh-maint-component" }, ln.component),
              ln.newSn && React.createElement("span", null,
                React.createElement("span", { className: "mh-maint-sn-label" }, "New SN:"),
                React.createElement("span", { className: "mh-maint-sn" }, ln.newSn)
              )
            ))
          )
        )),
        null
      )
    );
  }

  // ---------- FULL PAGE ----------
  window.MinerHistoryPage = function({ onBack }){
    const miner = window.MH_MINER;
    const [tab, setTab] = useState("operations");
    const [opOpen, setOpOpen] = useState("OP-20260418-0223");   // open the failed reboot for visual interest
    const [maintOpen, setMaintOpen] = useState(null);
    const [date, setDate] = useState("30d");

    const opsCount = window.MH_OPERATIONS.length;
    const maintCount = window.MH_MAINTENANCE.length;

    return React.createElement("div", { className: "mh-content" },
      React.createElement("div", { className: "mh-page-back" },
        onBack && React.createElement("button", { className: "mh-back-btn", onClick: onBack },
          React.createElement("svg", { width: 14, height: 14, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" },
            React.createElement("path", { d: "M10 3L5 8L10 13" })
          ),
          "Back to Miner List"
        ),
      ),
      React.createElement(Breadcrumb, { ip: miner.ip }),
      React.createElement(IdentityHeader, { miner }),

      React.createElement("div", { className: "mh-card" },
        React.createElement("div", { className: "mh-tabs" },
          React.createElement("button", { className: "mh-tab" + (tab === "operations" ? " is-active" : ""), onClick: () => setTab("operations") },
            "Operations", React.createElement("span", { className: "mh-tab-count" }, opsCount)),
          React.createElement("button", { className: "mh-tab" + (tab === "maintenance" ? " is-active" : ""), onClick: () => setTab("maintenance") },
            "Maintenance", React.createElement("span", { className: "mh-tab-count" }, maintCount)),
        ),

        React.createElement("div", { className: "mh-toolbar" },
          React.createElement(DateFilter, { value: date, onChange: setDate }),
          React.createElement("div", { className: "mh-toolbar-r" },
            React.createElement("span", { style: { font: "400 13px/18px var(--font-body)", color: "var(--fg-3rd)" } },
              tab === "operations" ? `${opsCount} operations` : `${maintCount} maintenance records`)
          ),
        ),

        tab === "operations"
          ? React.createElement(OperationsTable, { rows: window.MH_OPERATIONS, openId: opOpen, setOpenId: setOpOpen })
          : React.createElement(MaintenanceTable, { rows: window.MH_MAINTENANCE, openId: maintOpen, setOpenId: setMaintOpen })
      )
    );
  };

  // ============================================================
  // DRAWER (Surface 1)
  // ============================================================
  function DrawerEvent({ ev }){
    return React.createElement("div", { className: "mh-drawer-event" },
      React.createElement("div", { className: "mh-drawer-event-icon " + opIconClass(ev.iconType) }, opIcon(ev.iconType)),
      React.createElement("div", { className: "mh-drawer-event-body" },
        React.createElement("div", { className: "mh-drawer-event-title" },
          React.createElement("span", { className: "name" }, ev.title),
          ev.result === "success" && React.createElement("span", { className: "mh-result mh-result-success" },
            React.createElement("span", { className: "mh-result-dot" }), "Success"),
          ev.result === "failed" && React.createElement("span", { className: "mh-result mh-result-failed" },
            React.createElement("span", { className: "mh-result-dot" }), "Failed"),
        ),
        React.createElement("div", { className: "mh-drawer-event-meta" },
          React.createElement("span", { className: "ts" }, ev.ts),
          React.createElement("span", { className: "sep" }),
          React.createElement("span", null, ev.operator),
          ev.sub && [
            React.createElement("span", { key: "s", className: "sep" }),
            React.createElement("span", { key: "x" }, ev.sub),
          ]
        )
      )
    );
  }

  window.MinerHistoryDrawer = function({ onClose, onOpenFull }){
    const miner = window.MH_MINER;
    const [tab, setTab] = useState("history");
    const [filter, setFilter] = useState("operations");

    // Compose drawer events - last 10
    const events = useMemo(() => {
      const all = [];
      window.MH_OPERATIONS.forEach(o => all.push({
        ts: o.ts, title: o.title, iconType: o.type, sub: o.sub, kind: "operations",
        result: o.result, operator: o.operator.name,
      }));
      window.MH_MAINTENANCE.forEach(m => all.push({
        ts: m.createdTs, title: "Repair · " + m.details.map(d=>d.text).slice(0,2).join(" · "), iconType: "repair",
        kind: "maintenance", operator: m.technician.name,
      }));
      all.sort((a,b) => b.ts.localeCompare(a.ts));
      return all;
    }, []);

    const filtered = events.filter(e => filter === "all" ? true : e.kind === filter).slice(0, 10);

    return React.createElement(React.Fragment, null,
      React.createElement("div", { className: "mh-drawer-scrim", onClick: onClose }),
      React.createElement("aside", { className: "mh-drawer", role: "dialog", "aria-label": "Miner detail" },
        React.createElement("div", { className: "mh-drawer-head" },
          React.createElement("div", { className: "mh-drawer-id" },
            React.createElement("div", { className: "mh-drawer-id-icon" }, React.createElement(Icon, { name: "miner", size: 20 })),
            React.createElement("div", { className: "mh-drawer-id-text" },
              React.createElement("div", { className: "mh-drawer-id-ip" }, miner.ip),
              React.createElement("div", { className: "mh-drawer-id-sub" }, miner.sn + " · " + miner.model)
            )
          ),
          React.createElement("div", { className: "mh-drawer-actions" },
            React.createElement("button", { className: "mh-drawer-open-btn", onClick: onOpenFull, title: "Open full details page" },
              "Open details",
              React.createElement("svg", { width: 13, height: 13, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" },
                React.createElement("path", { d: "M6 3H3v10h10v-3" }),
                React.createElement("path", { d: "M9 3h4v4" }),
                React.createElement("path", { d: "M8 8L13 3" })
              )
            ),
            React.createElement("button", { className: "mh-drawer-iconbtn", onClick: onClose }, React.createElement(SvgClose)),
          )
        ),

        React.createElement("div", { className: "mh-drawer-tabs" },
          React.createElement("button", { className: "mh-drawer-tab" + (tab === "overview" ? " is-active" : ""), onClick: () => setTab("overview") }, "Overview"),
          React.createElement("button", { className: "mh-drawer-tab" + (tab === "history" ? " is-active" : ""), onClick: () => setTab("history") }, "History"),
        ),

        tab === "history" && React.createElement(React.Fragment, null,
          React.createElement("div", { className: "mh-drawer-filter" },
            React.createElement("button", { className: "mh-chip-filter" + (filter === "operations" ? " is-active" : ""), onClick: () => setFilter("operations") }, "Operations"),
            React.createElement("button", { className: "mh-chip-filter" + (filter === "maintenance" ? " is-active" : ""), onClick: () => setFilter("maintenance") }, "Maintenance"),
          ),
          React.createElement("div", { className: "mh-drawer-list" },
            filtered.length === 0
              ? React.createElement("div", { className: "mh-empty", style: { padding: "40px 20px" } },
                  React.createElement("div", { className: "mh-empty-title" }, "No events"),
                  React.createElement("div", { className: "mh-empty-body" }, "Try changing the filter."))
              : filtered.map((ev, i) => React.createElement(DrawerEvent, { key: i, ev }))
          )
        ),

        tab === "overview" && React.createElement("div", { className: "mh-drawer-overview" },
          React.createElement("div", { className: "mh-ov-section-head" }, "Identity"),
          React.createElement("div", { className: "mh-ov-row" },
            React.createElement("span", { className: "mh-ov-label" }, "IP address"),
            React.createElement("span", { className: "mh-ov-value mono" }, miner.ip)),
          React.createElement("div", { className: "mh-ov-row" },
            React.createElement("span", { className: "mh-ov-label" }, "Serial number"),
            React.createElement("span", { className: "mh-ov-value mono" }, miner.sn)),
          React.createElement("div", { className: "mh-ov-row" },
            React.createElement("span", { className: "mh-ov-label" }, "MAC"),
            React.createElement("span", { className: "mh-ov-value mono" }, miner.mac)),
          React.createElement("div", { className: "mh-ov-row" },
            React.createElement("span", { className: "mh-ov-label" }, "Brand & model"),
            React.createElement("span", { className: "mh-ov-value" }, miner.model)),
          React.createElement("div", { className: "mh-ov-section-head" }, "Operational"),
          React.createElement("div", { className: "mh-ov-row" },
            React.createElement("span", { className: "mh-ov-label" }, "Status"),
            React.createElement("span", { className: "mh-ov-value" },
              React.createElement("span", { className: "mh-status-dot online" }), miner.status)),
          React.createElement("div", { className: "mh-ov-row" },
            React.createElement("span", { className: "mh-ov-label" }, "Location"),
            React.createElement("span", { className: "mh-ov-value" }, miner.location)),
          React.createElement("div", { className: "mh-ov-row" },
            React.createElement("span", { className: "mh-ov-label" }, "Work mode"),
            React.createElement("span", { className: "mh-ov-value" }, miner.workMode)),
          React.createElement("div", { className: "mh-ov-row" },
            React.createElement("span", { className: "mh-ov-label" }, "Firmware"),
            React.createElement("span", { className: "mh-ov-value mono" }, miner.firmware)),
          React.createElement("div", { className: "mh-ov-row" },
            React.createElement("span", { className: "mh-ov-label" }, "Owner"),
            React.createElement("span", { className: "mh-ov-value" }, miner.owner)),
          React.createElement("div", { className: "mh-ov-row" },
            React.createElement("span", { className: "mh-ov-label" }, "Commissioned"),
            React.createElement("span", { className: "mh-ov-value mono" }, miner.commissionedAt)),
        )
      )
    );
  };

  // ============================================================
  // MINI MINER LIST (background context for drawer view)
  // ============================================================
  window.MinerListBackground = function({ onView }){
    return React.createElement("div", { className: "mh-content" },
      React.createElement("div", { style: { marginBottom: 14 } },
        React.createElement("h1", { className: "page-title" }, "Miner List"),
        React.createElement("div", { className: "page-desc" }, "Last update on 2026.05.06 13:58:08 · 1,248 miners")
      ),
      React.createElement("div", { className: "mh-mini-list" },
        React.createElement("div", { className: "mh-mini-row is-header" },
          React.createElement("span", null),
          React.createElement("span", null, "IP address"),
          React.createElement("span", null, "Serial number"),
          React.createElement("span", null, "Brand, type & model"),
          React.createElement("span", null, "Location"),
          React.createElement("span", { style: { textAlign: "right" } }, "Action"),
        ),
        window.MH_LIST.map((r, i) => React.createElement("div", { key: r.ip, className: "mh-mini-row" + (r.selected ? " is-selected" : "") },
          React.createElement("input", { type: "checkbox", style: { accentColor: "#3BB78F" }, defaultChecked: r.selected }),
          React.createElement("span", { className: "ip-link", onClick: r.selected ? null : null }, r.ip),
          React.createElement("span", { className: "mono" }, r.sn),
          React.createElement("span", null, r.model),
          React.createElement("span", null, r.loc),
          React.createElement("span", { style: { textAlign: "right" } },
            React.createElement("a", { className: "mh-view-link", onClick: () => r.selected && onView() }, "View")
          ),
        ))
      )
    );
  };

})();
