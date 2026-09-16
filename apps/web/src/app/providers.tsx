"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  // TODO: add AuthProvider here
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
      {/* <ChakraProvider>{children}</ChakraProvider> */}
    </CacheProvider>
  );
}
