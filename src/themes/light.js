// 1. Import `createTheme`
import { createTheme } from "@nextui-org/react";
import { baseTheme } from "./base";

// 2. Call `createTheme` and pass your custom values
export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      background: "#fff",
      backgroundLinear: "linear-gradient(to right top, #8017a6, #8713bb, #8d0fd1, #920ce7, #940dff)",
      default: "#fff",
      primary: "#fff", // Set primary color
      text: {
        default: "#fff", // Set default text color
      },
    },
    divider_horizontal: {
      background: "#8017a6",
      ...baseTheme.theme.divider_horizontal,
    },
    divider_vertical: {
      background: "#8017a6",
      ...baseTheme.theme.divider_vertical,
    },
    box: {
      color: "#fff",
      background: "linear-gradient(to right top, #15021c, #1a0624, #1e092c, #220b34, #270b3d)",
      boxShadow: "5px 5px 10px #15021c",
      ...baseTheme.theme.box,
    },
    stack: {
      ...baseTheme.theme.stack,
    },
    method_get: {
      ...baseTheme.theme.method.get,
    },
    method_post: {
      ...baseTheme.theme.method.post,
    },
    method_put: {
      ...baseTheme.theme.method.put,
    },
    method_delete: {
      ...baseTheme.theme.method.delete,
    },
    method_fill_get: {
      ...baseTheme.theme.method_fill.get,
    },
    method_fill_post: {
      ...baseTheme.theme.method_fill.post,
    },
    method_fill_put: {
      ...baseTheme.theme.method_fill.put,
    },
    method_fill_delete: {
      ...baseTheme.theme.method_fill.delete,
    },
    button: {
      ...baseTheme.theme.button.normal,
    },
    button_hover: {
      ...baseTheme.theme.button.hover,
    },
    button_tab: {
      ...baseTheme.theme.button_tab,
    },
    button_tab_active: {
      ...baseTheme.theme.button_tab_active,
    },
    button_icon_default: {
      ...baseTheme.theme.button_icon.default,
    },
    button_icon_default_hover: {
      ...baseTheme.theme.button_icon.default_hover,
    },
    text_field: {
      ...baseTheme.theme.text_field.normal,
    },
    text_field_focus: {
      ...baseTheme.theme.text_field.focus,
    },
    scrollbar: {
      value: `
    ::-webkit-scrollbar {
      width: 3px;
      height: 4px;
    }
    
    ::-webkit-scrollbar-track {
      background: rgba(0,0,0,0.1);
    }
    
    ::-webkit-scrollbar-thumb {
      background: #8017a6;
      border-radius: 5px;
    }
  `,
    },
  },
});
