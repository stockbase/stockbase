import * as React from "react";
import "./styles.css";
import SidebarWithHeader from "./navbar";
import { ChakraProvider } from "@chakra-ui/react";

function App(): JSX.Element {
  return (
    <>
      <ChakraProvider>
        <SidebarWithHeader />
      </ChakraProvider>
    </>
  );
}

export default App;
