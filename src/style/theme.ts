// screen size
const deviceSize = {
  mobile: "990px",
  web: "1200px",
};
const device = {
  mobile: `(max-width: ${deviceSize.mobile})`,
  web: `(min-width: ${deviceSize.mobile}) and (max-width: ${deviceSize.web})`,
};

export const theme = {
  // font-size
  fs11: "11px",
  fs12: "12px",
  fs13: "13px",
  fs14: "14px",
  fs15: "15px",
  fs16: "16px",
  fs18: "18px",
  fs19: "19px",
  fs20: "20px",
  fs21: "21px",
  fs22: "22px",
  fs24: "24px",
  fs26: "26px",
  fs28: "28px",
  fs30: "30px",

  // font-color
  fc01: "#ffffff",
  fc02: "#e5e7eb",
  fc03: "#dddddd",
  fc04: "#bbbbbb",
  fc05: "#999999",
  fc06: "#888888",
  fc07: "#7a7a7a",
  fc08: "#757575",
  fc09: "#646464",
  fc10: "#656565",
  fc11: "#666666",
  fc12: "#333333",
  fc13: "#20252b",
  fc14: "#212121",
  fc15: "#00913a",
  fc16: "#339999",
  fc17: "#216b6b",
  fc18: "#ff472b",
  fc19: "#fb4637",
  fc20: "#ffda03",

  // background-color
  bg01: "#ffffff",
  bg02: "#fcfcfc",
  bg03: "#f3f3f3",
  bg04: "#f6f6f6",
  bg05: "#f7f7f7",
  bg06: "#f8f8f8",
  bg07: "#eeeeee",
  bg08: "#cfd6d9",
  bg09: "#999999",
  bg10: "#777777",
  bg11: "#646464",
  bg12: "#666666",
  bg13: "#333333",
  bg14: "#ffffe9",
  bg15: "#23b85f",
  bg16: "#00913a",
  bg17: "#fe5356",
  bg18: "#339999",
  bg19: "#216b6b",

  // border-color
  ls01: "#ffffff",
  ls02: "#e5e5e5",
  ls03: "#e5e7eb",
  ls04: "#e9e9e9",
  ls05: "#ededed",
  ls06: "#dadada",
  ls07: "#cccccc",
  ls08: "#bbbbbb",
  ls09: "#bebebe",
  ls10: "#cfd6d9",
  ls11: "#646464",
  ls12: "#666666",
  ls13: "#333333",
  ls14: "#212121",
  ls15: "#00993a",
  ls16: "#00913a",
  ls17: "#fe5356",

  // rgba-color
  rgba01: "rgba(0, 0, 0, 0.03)",
  rgba02: "rgba(0, 0, 0, 0.07)",
  rgba03: "rgba(0, 0, 0, 0.4)",
  rgba04: "rgba(33,33,33,0.15)",
  rgba05: "rgba(33,33,33,0.2)",
  rgba06: "rgba(100, 100, 100, 0.1)",
  rgba07: "rgba(100,100,100,0.15)",
  rgba08: "rgba(100,100,100,0.2)",
  rgba09: "rgba(100,100,100,0.4)",
  rgba10: "rgba(100,100,100,0.6)",
  rgba11: "rgba(0,94,38,1)",

  // 반응형
  device,
};
