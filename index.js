const colors = {
  black: "#7F7F7F",
  red: "#E15A60",
  green: "#99C794",
  yellow: "#ffe2a9",
  blue: "#6796e6",
  magenta: "#C594C5",
  cyan: "#5FB3B3",
  white: "#d0d0d0",
  lightBlack: "#808080",
  lightRed: "#f1a5ab",
  lightGreen: "#a9cfa4",
  lightYellow: "#ffe2a9",
  lightBlue: "#6699CC",
  lightMagenta: "#C594C5",
  lightCyan: "#91c5d3",
  lightWhite: "#d4d4d4"
};

exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor: "#2c313a",
    colors
  });
