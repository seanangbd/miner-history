// Minimal Lyra icon set — inline SVG React components at 16x16
// Paths lifted from the Figma JSX definitions (simplified where needed).
// Use as: <Icon name="home" size={16} />
(function(){
  const P = {
    home: "M8 1L14 6V14H2V6L8 1ZM4 13H7V9H9V13H12V7L8 3L4 7V13Z",
    search: "M11 10.5L14 13.5M12.5 7.5A5 5 0 1 1 2.5 7.5A5 5 0 0 1 12.5 7.5Z",
    cog: "M8 10.5A2.5 2.5 0 1 0 8 5.5A2.5 2.5 0 0 0 8 10.5ZM13 8.6V7.4L14.4 6.3L13.3 4.3L11.7 5L10.6 4.3L10.4 2.5H8.1L7.9 4.3L6.8 4.8L5.1 4.1L4 6.1L5.4 7.2V8.4L4 9.4L5.1 11.4L6.7 10.7L7.8 11.3L8 13.1H10.3L10.5 11.3L11.6 10.7L13.3 11.4L14.4 9.4L13 8.6Z",
    plus: "M8 2V14M2 8H14",
    x: "M3 3L13 13M13 3L3 13",
    check: "M3 8.5L6.5 12L13 4",
    chevronDown: "M3 5L8 10L13 5",
    chevronUp: "M3 11L8 6L13 11",
    chevronRight: "M5 3L10 8L5 13",
    chevronLeft: "M11 3L6 8L11 13",
    warning: "M8 1L15 14H1L8 1ZM8 6V10M8 11.5V13",
    info: "M8 1.5A6.5 6.5 0 1 1 8 14.5A6.5 6.5 0 0 1 8 1.5ZM8 7V12M8 4.5V5.5",
    upload: "M8 11V2M3.5 6.5L8 2L12.5 6.5M2 14H14",
    download: "M8 2V11M3.5 7.5L8 12L12.5 7.5M2 14H14",
    miner: "M3 4H13V12H3V4ZM5 6H7V8H5ZM9 6H11V8H9ZM5 10H7V11H5ZM9 10H11V11H9Z",
    bolt: "M9 1L3 9H7L6 15L13 7H9L10 1Z",
    warehouse: "M2 6L8 2L14 6V14H2V6ZM5 9H11V14H5V9Z",
    tools: "M3 13L6 10M10 6L13 3M3 3L6 6M10 10L13 13",
    fourdots: "M4 4H6V6H4ZM10 4H12V6H10ZM4 10H6V12H4ZM10 10H12V12H10",
    clock: "M8 1.5A6.5 6.5 0 1 1 8 14.5A6.5 6.5 0 0 1 8 1.5ZM8 4.5V8L11 10",
    bulb: "M5 10A3 3 0 1 1 11 10V12H5V10ZM6 13H10M7 14.5H9",
    question: "M8 1.5A6.5 6.5 0 1 1 8 14.5A6.5 6.5 0 0 1 8 1.5ZM6 6.5C6 5 7 4 8 4C9 4 10 5 10 6C10 7 9 7.5 8.5 8L8 9M8 11V11.5"
  };
  window.LyraIcon = function({ name, size = 16, color = "currentColor" }){
    const d = P[name] || P.warning;
    const isOutline = !["home","bolt","miner","warehouse","fourdots"].includes(name);
    return React.createElement("svg", {
      width: size, height: size, viewBox: "0 0 16 16",
      fill: isOutline ? "none" : color,
      stroke: isOutline ? color : "none",
      strokeWidth: isOutline ? 1.5 : 0,
      strokeLinecap: "round", strokeLinejoin: "round",
      style: { display: "inline-block", verticalAlign: "middle", flex: "0 0 auto" }
    }, React.createElement("path", { d }));
  };
})();
