import { extendTheme } from "@chakra-ui/react";
import "@fontsource/encode-sans-semi-condensed";
import "@fontsource/galada";

const theme = extendTheme({
  fonts: {
    encode: `'encode sans semi condensed', sans-serif`,
    galada: `'galada', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "encode",
        letterSpacing: "0.04em",
      },
    },
  },
});

export default theme;
