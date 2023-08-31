import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#ff3c00",
    },
  },
  fonts: {
    body: "open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg:'gray.200'
      }

    })
  },

});
