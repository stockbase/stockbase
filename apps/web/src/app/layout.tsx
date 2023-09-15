import "./styles.css";
import Script from "next/script";
import { Providers } from "./providers";
import Footer from "./footer";
import Navbar from "./navbar";

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
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
