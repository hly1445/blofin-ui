module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      display: ["group-hover"],
      boxShadow: {
        card: "0px 0px 24px rgba(240, 242, 250, 0.6)",
        table: "inset 6px 0 8px -3px rgb(0 0 0 / 5%)",
      },
      colors: {
        light: {
          primary: {
            DEFAULT: "#2F54EB",
            60: "rgba(47, 84, 235, 0.6)",
            40: "rgba(47, 84, 235, 0.4)",
            14: "rgba(47, 84, 235, 0.12)",
            10: "rgba(47, 84, 235, 0.1)",
          },
          secondary: "#FF6600",
          success: "#0FCC71",
          warning: "#F5CD12",
          danger: "#D62035",
          green: {
            DEFAULT: "#08C787",
            alpha: "rgba(8, 199, 135, 0.12)",
          },
          red: {
            DEFAULT: "#F2465D",
            alpha: "rgba(242, 70, 93, 0.12)",
          },
          background: "#FFFFFF",
          label: {
            DEFAULT: "rgba(10, 10, 10, 1)",
            70: "rgba(10, 10, 10, 0.7)",
            40: "rgba(10, 10, 10, 0.4)",
            20: "rgba(10, 10, 10, 0.2)",
          },
          fill: {
            primary: "#F7F8FA",
            secondary: "#DCDEE5",
            tertiary: "#ABADB2",
          },
          line: {
            primary: "#E6E8EB",
            secondary: "#D2D3D6",
          },
          hover: {
            primary: "#3D63FF",
            secondary: "#FF7B24",
            success: "#1AD97D",
            warning: "#FFD305",
            danger: "#EB1730",
            green: "#00D991",
            red: "#FF4F67",
            fill: {
              primary: "#EDEDF5",
              secondary: "#EBEDF2",
              tertiary: "#C4C6CC",
            },
          },
          disabled: {
            blue: "rgba(47, 84, 235, 0.4)",
          },
          badge: {
            "primary-bg": "rgba(47, 84, 235, 0.12)",
            "secondary-bg": "rgba(255, 102, 0, 0.12)",
            "success-bg": "rgba(15, 204, 113, 0.12)",
            "warning-bg": "rgba(245, 205, 18, 0.12)",
            "danger-bg": "rgba(214, 32, 53, 0.12)",
            "info-bg": "rgba(10, 10, 10, 0.14)",
          },
          pagination: {
            primary: "#2F54EB",
            "primary-hover": "#F6F7FB",
          },
          input: {
            primary: "#2F54EB",
            gray: "#DCDCDD",
            error: "#D9242F",
          },
          header: {
            bgColor: "#FFFFFF",
          },
        },
        dark: {
          primary: {
            DEFAULT: "#5C7CFF",
            60: "rgba(92, 124, 255, 0.6)",
            40: "rgba(92, 124, 255, 0.4)",
            14: "rgba(92, 124, 255, 0.16)",
            10: "rgba(92, 124, 255, 0.1)",
          },
          secondary: "#FF7D20",
          success: "#0FCC71",
          warning: "#F5CD12",
          danger: "#D62035",
          green: {
            DEFAULT: "#08C787",
            alpha: "rgba(8, 199, 135, 0.14)",
          },
          red: {
            DEFAULT: "#F2465D",
            alpha: "rgba(242, 70, 93, 0.14)",
          },
          background: "#010105",
          label: {
            DEFAULT: "rgba(252, 253, 255, 1)",
            70: "rgba(235, 236, 245, 0.7)",
            40: "rgba(235, 236, 245, 0.4)",
            20: "rgba(235, 236, 245, 0.2)",
          },
          fill: {
            primary: "#2F3033",
            secondary: "#606166",
            tertiary: "#939499",
          },
          line: {
            primary: "#2F3033",
            secondary: "#47484D",
          },
          hover: {
            primary: "#4869F0",
            secondary: "#FA6800",
            success: "#13BA6A",
            warning: "#E8C317",
            danger: "#BF1D30",
            green: "#63DBB7",
            red: "#FF8A98",
            fill: {
              primary: "#47484D",
              secondary: "#787980",
              tertiary: "#ACADB3",
            },
          },
          disabled: {
            blue: "rgba(92, 124, 255, 0.4)",
          },
          badge: {
            "primary-bg": "rgba(92, 124, 255, 0.14)",
            "secondary-bg": "rgba(255, 125, 32, 0.14)",
            "success-bg": "rgba(15, 204, 113, 0.14)",
            "warning-bg": "rgba(245, 205, 18, 0.14)",
            "danger-bg": "rgba(214, 32, 53, 0.14)",
            "info-bg": "rgba(235, 236, 245, 0.2)",
          },
          pagination: {
            primary: "#2F54EB",
            "primary-hover": "#F6F7FB",
          },
          input: {
            primary: "#2F54EB",
            gray: "#DCDCDD",
            error: "#D9242F",
          },
          header: {
            bgColor: "transparent",
          },
        },
      },
    },
  },
  plugins: [],
};
