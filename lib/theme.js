import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { prismDarkTheme, prismLightTheme } from "./prism";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f8f8f5", "#202023")(props),
      fontFamily:
        "'Noto Sans TC',-ui-monospace,SFMono-Regular,'SF Mono', 'Menlo',Consolas,'Liberation Mono',monospace",
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    basestyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlinOffset: 3,
    }),
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  theme: mode(prismLightTheme, prismDarkTheme),
  config,
  components,
  styles,
});

export default theme;
