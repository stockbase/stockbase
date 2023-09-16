import "./styles.css";
import Script from "next/script";
import { Providers } from "./providers";
import Footer from "./footer";
import Navbar from "./navbar";
import StockTickersBar from "./stock-tickers-bar";
import { ColorModeScript, theme } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <Script src="https://s3.tradingview.com/tv.js"></Script>
      </head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          <Navbar />
          <StockTickersBar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
