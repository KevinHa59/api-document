import { baseTheme } from "./themes/base";

export const methodColor = (method) => {
  return baseTheme.theme.method[method.toLowerCase()].color;
};
