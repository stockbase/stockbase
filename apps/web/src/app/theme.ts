import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const styles = {
  // TODO: Seems like we need to remove CacheProvider from providers.ts to get this to work,
  // but I'm not sure what the implications are. Otherwise, the styles are reversed.
  // bg: mode("gray.100", "gray.900")(props),
  // global: (props: Record<string, any>) => ({
  //   body: {
  //   },
  // }),
};

// Override Chakra-UI components default colors
// Example:
// const components = {
//   Drawer: {
//     // setup light/dark mode component defaults
//     baseStyle: (props) => ({
//       dialog: {
//         bg: mode("white", "#141214")(props),
//       },
//     }),
//   },
// };

const theme = extendTheme({ config, styles });

export default theme;
