// Miner History — sample data for Phase 1 mock
(function(){

  // The "active" miner whose history we're viewing
  window.MH_MINER = {
    ip: "10.1.1.1",
    sn: "S151749261401293",
    mac: "20:11:87:44:A9:19",
    model: "SealMiner A2 Pro · 248T",
    brand: "Bitdeer SealMiner",
    location: "Zone 1 · Division 1 · Rack 1 · Slot 1",
    locationShort: "Z1-D1-R01-S01",
    status: "Online",
    workMode: "Normal",
    firmware: "v2.4.1-stable",
    owner: "Bitdeer Operations",
    commissionedAt: "2025.07.14",
  };

  // Surrounding miner list (for context behind drawer)
  window.MH_LIST = [
    { ip: "10.1.1.1", sn: "S151749261401293", model: "SealMiner A2 Pro · 248T", loc: "Z1-D1-R01-S01", status: "online", selected: true },
    { ip: "10.1.1.2", sn: "S151755261500502", model: "SealMiner A2 Pro · 254T", loc: "Z1-D1-R01-S02", status: "online" },
    { ip: "10.1.1.3", sn: "S151759261500131", model: "SealMiner A2 Pro · 258T", loc: "Z1-D1-R01-S03", status: "online" },
    { ip: "10.1.1.4", sn: "S151761261501222", model: "SealMiner A2 Pro · 248T", loc: "Z1-D1-R01-S04", status: "fault" },
    { ip: "10.1.1.5", sn: "S151766261501993", model: "SealMiner A2 Pro · 254T", loc: "Z1-D1-R01-S05", status: "online" },
    { ip: "10.1.1.6", sn: "S151772261502884", model: "SealMiner A2 Pro · 248T", loc: "Z1-D1-R01-S06", status: "offline" },
    { ip: "10.1.1.7", sn: "S151777261503775", model: "SealMiner A2 Pro · 258T", loc: "Z1-D1-R01-S07", status: "online" },
  ];

  // ---- OPERATIONS DATA ----
  // Types: reboot · pool · mode · firmware · log · move
  window.MH_OPERATIONS = [
    {
      id: "OP-20260430-0041",
      type: "reboot",
      title: "Reboot",
      sub: "Manual restart",
      ts: "2026.04.30 19:25:14",
      result: "success",
      duration: "1m 42s",
      operator: { kind: "user", name: "ezekiel.martin", initials: "EM" },
      detail: {
        endTime: "2026.04.30 19:26:56",
      },
    },
    {
      id: "OP-20260424-0017",
      type: "pool",
      title: "Configure pool",
      sub: "Bitdeer Primary · SHA-256",
      ts: "2026.04.24 11:04:09",
      result: "success",
      duration: "8s",
      operator: { kind: "user", name: "ezekiel.martin", initials: "EM" },
      detail: {
        configName: "Bitdeer Primary · SHA-256",
        pool1Url: "stratum+tcp://btc.bitdeer.com:3333",
        pool1Sub: "bitdeer.farm01_a2pro_001",
        pool2Url: "stratum+tcp://btc-backup.bitdeer.com:3333",
        pool2Sub: "bitdeer.farm01_a2pro_001",
        pool3Url: "stratum+tcp://btc-failover.bitdeer.com:3333",
        pool3Sub: "bitdeer.farm01_a2pro_001",
      },
    },
    {
      id: "OP-20260420-0455",
      type: "firmware",
      title: "Firmware upgrade",
      sub: "v2.4.0 → v2.4.1-stable",
      ts: "2026.04.20 22:18:33",
      result: "success",
      duration: "4m 12s",
      operator: { kind: "user", name: "anita.li", initials: "AL" },
      detail: {
        endTime: "2026.04.20 22:22:45",
        firmwareCategory: "SealMiner A2 Pro · Stable",
        firmwareVersion: "v2.4.1-stable",
      },
    },
    {
      id: "OP-20260419-0102",
      type: "log",
      title: "Log download",
      sub: "Operator-initiated diagnostic",
      ts: "2026.04.19 09:42:11",
      result: "success",
      duration: "22s",
      operator: { kind: "user", name: "liu.wei", initials: "LW" },
      detail: {
        endTime: "2026.04.19 09:42:33",
      },
    },
    {
      id: "OP-20260418-0223",
      type: "reboot",
      title: "Reboot",
      sub: "Triggered by maintenance system",
      ts: "2026.04.18 03:12:48",
      result: "failed",
      duration: "—",
      operator: { kind: "system", name: "system", initials: "SY" },
      detail: {
        endTime: "—",
      },
      failure: "ssh: connect to host 10.1.1.1 port 22: No route to host\nreboot command aborted after 3 retries (timeout=30s)\nMiner did not respond to ARP probe.",
    },
    {
      id: "OP-20260315-0902",
      type: "mode",
      title: "Change work mode",
      sub: "High Performance → Normal",
      ts: "2026.03.15 09:48:21",
      result: "success",
      duration: "12s",
      operator: { kind: "user", name: "anita.li", initials: "AL" },
      detail: {
        endTime: "2026.03.15 09:48:33",
        workMode: "Normal",
      },
    },
    {
      id: "MV-20260115-0044",
      type: "move",
      title: "Location change",
      sub: "Z1-D1-R02-S12 → Z1-D1-R01-S01",
      ts: "2026.01.15 09:30:00",
      result: "success",
      duration: "—",
      operator: { kind: "user", name: "supervisor.tk", initials: "ST" },
      detail: {
        from: { loc: "Zone 1 · Division 1 · Rack 2 · Slot 12", ip: "10.1.2.12" },
        to:   { loc: "Zone 1 · Division 1 · Rack 1 · Slot 1",  ip: "10.1.1.1" },
      },
    },
    {
      id: "OP-20251212-0188",
      type: "pool",
      title: "Configure pool",
      sub: "Worker name updated",
      ts: "2025.12.12 14:22:55",
      result: "success",
      duration: "6s",
      operator: { kind: "user", name: "ezekiel.martin", initials: "EM" },
      detail: {
        configName: "Bitdeer Primary · SHA-256",
        pool1Url: "stratum+tcp://btc.bitdeer.com:3333",
        pool1Sub: "bitdeer.farm01_a2pro_001",
        pool2Url: "stratum+tcp://btc-backup.bitdeer.com:3333",
        pool2Sub: "bitdeer.farm01_a2pro_001",
        pool3Url: "stratum+tcp://btc-failover.bitdeer.com:3333",
        pool3Sub: "bitdeer.farm01_a2pro_001",
      },
    },
  ];

  // ---- MAINTENANCE DATA ----
  window.MH_MAINTENANCE = [
    {
      id: "MR-20260418-0091",
      createdTs: "2026.04.18 04:55:02",
      updatedTs: "2026.04.18 11:12:40",
      technician: { name: "liu.wei",   initials: "LW" },
      details: [
        { kind: "change", text: "Change HB1" },
        { kind: "remove", text: "Remove HB2" },
        { kind: "add",    text: "Add power supply" },
        { kind: "flag",   text: "Reflashed" },
      ],
      expand: {
        sections: [
          { title: "Hash board", lines: [
              { action: "change", component: "HB1", newSn: "HB-A2P-7714-99213" },
              { action: "remove", component: "HB2" },
            ] },
          { title: "Power supply", lines: [
              { action: "add", component: "PSU", newSn: "PSU-3300W-AC-22581" },
            ] },
        ],
        flags: ["Reflashed"],
        comment: "Replaced HB1 due to thermal trip; HB2 fully failed and removed for return-merchandise. Reflashed firmware after re-seat.",
      },
    },
    {
      id: "MR-20260205-0066",
      createdTs: "2026.02.05 10:18:11",
      updatedTs: "2026.02.05 12:44:08",
      technician: { name: "liu.wei", initials: "LW" },
      details: [
        { kind: "flag", text: "Restarted" },
        { kind: "change", text: "Changed miner's fan 1" },
        { kind: "change", text: "Changed miner's fan 2" },
      ],
      expand: {
        sections: [
          { title: "Fans", lines: [
              { action: "change", component: "Miner's fan 1, fan 2" },
            ] },
        ],
        flags: ["Restarted"],
        comment: "Both intake fans showed RPM drift below 2,000. Replaced and verified airflow.",
      },
    },
    {
      id: "MR-20260114-0028",
      createdTs: "2026.01.14 16:02:33",
      updatedTs: "2026.01.15 09:24:50",
      technician: { name: "marcus.t", initials: "MT" },
      details: [
        { kind: "change", text: "Change control board" },
        { kind: "flag",   text: "Reflashed" },
        { kind: "flag",   text: "Reset" },
      ],
      expand: {
        sections: [
          { title: "Control board", lines: [
              { action: "change", component: "Control board", newSn: "CB-A2P-CTRL-44820" },
            ] },
        ],
        flags: ["Reflashed", "Reset"],
        comment: "",
      },
    },
  ];
})();
