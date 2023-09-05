import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import { Kbd } from "./kbd";

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#ff3c00",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#e2e8f0",
      },
    components: {
      Kbd
    }
    }),
  },
});
