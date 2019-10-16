module.exports.themes = [
  {
    name: "moonlight",
    displayName: "Moonlight",
    theme: {
      background: {
        default: "#212337",
        success: "#c7f59b",
        notice: "#ffdb8e",
        warning: "#ff995e",
        danger: "#ff5370",
        surprise: "#baacff",
        info: "#82aaff"
      },
      foreground: {
        default: "#afbeee",
        success: "#fff",
        notice: "#fff",
        warning: "#fff",
        danger: "#fff",
        surprise: "#fff",
        info: "#fff"
      },
      highlight: {
        default: "rgba(162, 175, 174, 1)",
        xxs: "rgba(162, 175, 174, 0.05)",
        xs: "rgba(162, 175, 174, 0.1)",
        sm: "rgba(162, 175, 174, 0.15)",
        md: "rgba(162, 175, 174, 0.2)",
        lg: "rgba(162, 175, 174, 0.5)",
        xl: "rgba(162, 175, 174, 0.8)"
      },
      rawCss: `
          .tooltip, .dropdown__menu {
            opacity: 0.95;
          }
        `,
      styles: {
        dialog: {
          background: {
            default: "#212337"
          },
          foreground: {
            default: "#EEFFFF"
          }
        },
        paneHeader: {
          background: {
            default: "#212337",
            success: "#c7f59b",
            notice: "#ffdb8e",
            warning: "#ff995e",
            danger: "#ff5370",
            surprise: "#baacff",
            info: "#82aaff"
          },
          foreground: {
            success: "#000000"
          }
        },
        sidebarHeader: {
          highlight: {
            default: "rgba(42, 46, 72, 1)",
            xxs: "rgba(42, 46, 72, 0.05)",
            xs: "rgba(42, 46, 72, 0.1)",
            sm: "rgba(42, 46, 72, 0.15)",
            md: "rgba(162, 175, 174, 0.2)",
            lg: "rgba(162, 175, 174, 0.5)",
            xl: "rgba(162, 175, 174, 0.8)"
          }
        },
        transparentOverlay: {
          background: {
            default: "rgba(112,124,179,0.3)"
          }
        }
      }
    }
  }
];
