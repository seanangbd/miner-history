// Page chrome + primitives
(function(){
  const Icon = window.LyraIcon;

  window.PageHeader = function({ title, description, actions }){
    return React.createElement("header", { className: "page-header" },
      React.createElement("div", null,
        React.createElement("h1", { className: "page-title" }, title),
        description && React.createElement("div", { className: "page-desc" }, description)
      ),
      actions && React.createElement("div", { className: "page-actions" }, actions)
    );
  };

  window.SectionHeader = function({ title, description, trailing }){
    return React.createElement("div", { className: "section-header" },
      React.createElement("div", null,
        React.createElement("div", { className: "sh-title-row" },
          React.createElement("div", { className: "sh-title" }, title),
          React.createElement("div", { className: "sh-bar" })
        ),
        description && React.createElement("div", { className: "sh-desc" }, description)
      ),
      trailing
    );
  };

  window.Button = function({ children, variant = "primary", size = "m", onClick, leftIcon, rightIcon, disabled }){
    return React.createElement("button", {
      className: "btn btn-" + variant + " btn-" + size + (disabled ? " is-disabled" : ""),
      onClick, disabled
    },
      leftIcon && React.createElement("span", { className: "btn-ico" }, React.createElement(Icon, { name: leftIcon, size: size === "s" ? 12 : 14 })),
      children,
      rightIcon && React.createElement("span", { className: "btn-ico" }, React.createElement(Icon, { name: rightIcon, size: size === "s" ? 12 : 14 }))
    );
  };

  window.Tag = function({ tone = "neutral", children, dot }){
    return React.createElement("span", { className: "tag tag-" + tone },
      dot && React.createElement("span", { className: "tag-dot" }),
      children
    );
  };

  window.KPI = function({ label, value, unit, delta, tone }){
    return React.createElement("div", { className: "kpi" },
      React.createElement("div", { className: "kpi-label" }, label),
      React.createElement("div", { className: "kpi-val" },
        value,
        unit && React.createElement("span", { className: "kpi-unit" }, unit)
      ),
      delta && React.createElement("div", { className: "kpi-delta kpi-" + (tone || "up") }, delta)
    );
  };

  window.TextField = function({ label, value, placeholder, onChange, hint, error, iconRight }){
    return React.createElement("label", { className: "field" },
      label && React.createElement("div", { className: "field-lbl" }, label),
      React.createElement("div", { className: "field-wrap" + (error ? " is-error" : "") },
        React.createElement("input", {
          className: "field-input", value: value, placeholder, onChange: e => onChange && onChange(e.target.value)
        }),
        iconRight && React.createElement("span", { className: "field-ico" }, React.createElement(Icon, { name: iconRight }))
      ),
      (hint || error) && React.createElement("div", { className: "field-hint" + (error ? " is-error" : "") }, error || hint)
    );
  };
})();
