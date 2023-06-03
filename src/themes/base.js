export const baseTheme = {
  theme: {
    colors: {},
    box: {
      display: "flex",
      borderRadius: "5px",
    },
    divider_horizontal: {
      height: "1px",
      width: "100%",
    },
    divider_vertical: {
      height: "100%",
      width: "1px",
    },
    stack: {
      display: "flex",
    },
    method: {
      get: {
        color: "#4cf48f",
      },
      post: {
        color: "#f1bc1c",
      },
      put: {
        color: "#38a5f8",
      },
      delete: {
        color: "#e13728",
      },
    },
    method_fill: {
      get: {
        background: "#4cf48f",
        color: "#000",
        borderRadius: "2px",
        fontSize: "10px",
        padding: "3px",
      },
      post: {
        background: "#f1bc1c",
        color: "#000",
        borderRadius: "2px",
        fontSize: "10px",
        padding: "3px",
      },
      put: {
        background: "#38a5f8",
        color: "#000",
        borderRadius: "2px",
        fontSize: "10px",
        padding: "3px",
      },
      delete: {
        background: "#e13728",
        color: "#000",
        borderRadius: "2px",
        fontSize: "10px",
        padding: "3px",
      },
    },
    button: {
      normal: {
        cursor: "pointer",
        background: "rgba(147, 12, 236, 0.3)",
        color: "#fff",
        border: "none",
        fontSize: "13px",
        fontWeight: "500",
        padding: "5px 20px 5px 20px",
      },
      hover: {
        cursor: "pointer",
        background: "rgba(147, 12, 236, 0.6)",
        color: "#fff",
        border: "none",
        fontSize: "13px",
        fontWeight: "500",
        padding: "5px 20px 5px 20px",
      },
    },
    button_tab: {
      whiteSpace: "nowrap",
      fontSize: "13px",
      gap: "5px",
      padding: "0 5px 0 0",
      borderRadius: "2px",
      opacity: 0.6,
      cursor: "pointer",
    },
    button_tab_active: {
      whiteSpace: "nowrap",
      fontSize: "13px",
      gap: "5px",
      padding: "0 5px 0 0",
      borderRadius: "2px",
      cursor: "pointer",
    },
    button_icon: {
      default: {
        transition: "ease 0.3s",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: "30px",
        height: "30px",
        background: "rgba(142, 15, 212, 0.2) !important",
      },
      default_hover: {
        transition: "ease 0.3s",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: "30px !important",
        height: "30px !important",
        background: "rgba(142, 15, 212, 0.4) !important",
      },
    },
    text_field: {
      normal: {
        background: "rgba(0,0,0,0.3)",
        border: "1px solid rgba(147, 12, 236, 0.4)",
        width: "300px",
        padding: "5px",
        color: "rgba(255,255,255,0.7)",
      },
      focus: {
        background: "rgba(0,0,0,0.3)",
        border: "1px solid rgba(147, 12, 236, 0.6)",
        width: "300px",
        padding: "5px",
        color: "rgba(255,255,255,0.7)",
      },
    },

    scrollbar: `
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background: rgba(0,0,0,0.1);
    }
    
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }
  `,
  },
};
