import "./styles.css";
import Script from "next/script";
import { Providers } from "./providers";
import Footer from "./footer";
import Navbar from "./navbar";
import StockTickersBar from "./stock-tickers-bar";
// import { ColorModeScript, theme } from "@chakra-ui/react";
import "@splidejs/react-splide/css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "models";
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head>
        <Script src="https://s3.tradingview.com/tv.js"></Script>
      </head>
      <body>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        <Providers>
          <Navbar session={session} />
          <StockTickersBar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
