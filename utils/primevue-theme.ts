import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const PrimevueTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#eafaf8",
      100: "#d2f4ef",
      200: "#a5e9df",
      300: "#78ddcf",
      400: "#4ad2bf",
      500: "#4ab4a7", // COR PRINCIPAL
      600: "#3b8f84",
      700: "#2c6a61",
      800: "#1d453e",
      900: "#0e201b",
      950: "#07110d",
    },
    colorScheme: {
      light: {
        primary: {
          color: "#4ab4a7",       // principal
          inverseColor: "#444",
          hoverColor: "#3b8f84",
          activeColor: "#2c6a61",
        },
        highlight: {
          background: "#eafaf8",
          focusBackground: "#d2f4ef",
          color: "#1d453e",
          focusColor: "#1d453e",
        },
      },
      dark: {
        primary: {
          color: "#a5e9df",         // tom claro pro dark
          inverseColor: "#1f2937",  // fundo escuro
          hoverColor: "#78ddcf",
          activeColor: "#4ab4a7",
        },
        highlight: {
          background: "rgba(250, 250, 250, .16)",
          focusBackground: "rgba(250, 250, 250, .24)",
          color: "rgba(255,255,255,.87)",
          focusColor: "rgba(255,255,255,.87)",
        },
      },
    },
  },
});

export default PrimevueTheme;
