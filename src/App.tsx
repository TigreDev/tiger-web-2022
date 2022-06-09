import { ChakraProvider } from "@chakra-ui/react";
import theme from "./designSystem/theme";
import Landing from "./page/Landing";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Landing />
  </ChakraProvider>
);
