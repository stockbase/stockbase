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
      {/* <div className="container">
        <h1 className="title">
          Admin <br />
        </h1>
        <CounterButton />
        <p className="description">
          Built With{" "}
          <Link href="https://turbo.build/repo" newTab>
            Turborepo
          </Link>
          {" & "}
          <Link href="https://vitejs.dev/" newTab>
            Vite
          </Link>
        </p>
      </div> */}
    </>
  );
}

export default App;
