import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, extendTheme } from "@chakra-ui/react";

export const colorTheme = extendTheme({
  colors: {
    brand: {
      100: "#494E5F",
      200: "#CCCCCC",
      300: "#F5F5F5",
      400: "#FFFFFF",
      500: "#FFE7D4",
      600: "#F9BCBC",
    },
  },
});
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    bg: "red.500",
  },
  track: {
    bg: "gray.100",
    _checked: {
      bg: "gray.100",
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
