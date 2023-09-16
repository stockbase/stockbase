import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
// import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const styles = {};

const theme = extendTheme({ config, styles });

export default theme;
