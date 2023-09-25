"use client";

import { useColorMode, useColorModeValue } from "@chakra-ui/react";
// import { CopyrightStyles } from "react-ts-tradingview-widgets";
import dynamic from "next/dynamic";

interface CopyrightStyles {
  parent?: React.CSSProperties;
  link?: React.CSSProperties;
  span?: React.CSSProperties;
}

const TickerTapeNoSSR = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.TickerTape),
  {
    ssr: false,
  }
);

export default function StockTickersBar() {
  const { colorMode } = useColorMode();
  const tradingViewCopyRightStyles: CopyrightStyles = {
    // Styles for the parent element wrapping the copyright text
    parent: {
      float: "right",
      marginRight: "5px",
      // display: "none" // TODO: Contact TradingView to remove branding
    },
    // Styles for the link
    link: {
      textDecoration: "line-trough",
    },
    // Styles for text of the link
    span: {
      color: useColorModeValue("black", "gray.100"),
      fontSize: "10px",
    },
  };

  const markets = [
    {
      proName: "FOREXCOM:SPXUSD",
      title: "S&P 500",
    },
    {
      proName: "FOREXCOM:NSXUSD",
      title: "Nasdaq 100",
    },
    {
      proName: "FX_IDC:EURUSD",
      title: "EUR/USD",
    },
  ];

  const defaultStocks = [
    {
      proName: "NASDAQ:MSFT",
      title: "MSFT",
    },
    {
      proName: "NASDAQ:AAPL",
      title: "AAPL",
    },
    {
      proName: "NASDAQ:GOOG",
      title: "GOOG",
    },
    {
      proName: "NASDAQ:TSLA",
      title: "TSLA",
    },
    {
      proName: "NASDAQ:NVDA",
      title: "NVDA",
    },
    {
      proName: "NASDAQ:NFLX",
      title: "NFLX",
    },
    {
      proName: "NASDAQ:META",
      title: "META",
    },
    {
      proName: "NYSE:DIS",
      title: "DIS",
    },
    {
      proName: "NASDAQ:ADBE",
      title: "ADBE",
    },
    {
      proName: "NYSE:JPM",
      title: "JPM",
    },
    {
      proName: "NYSE:GME",
      title: "GME",
    },
    {
      proName: "NYSE:JNJ",
      title: "JNJ",
    },
    {
      proName: "NYSE:MA",
      title: "MA",
    },
    {
      proName: "NYSE:AMC",
      title: "AMC",
    },
    {
      proName: "NYSE:V",
      title: "V",
    },
  ];

  // TODO: Get trending stocks, and replace defaultStocks if there are at least 10 trending stocks for the day
  // Additionally, get the logged-in users most recently followed stocks, and also show those
  // Additionally, get the logged-in users most recently viewed stocks (stored in cookie or local storage)
  const tickers = markets.concat(defaultStocks);
  return (
    // TODO: largeChartUrl should redirect to our stock page URL based on environment
    // by default, it goes to ?tvwidgetsymbol=FX_IDC%3AEURUSD, so we will need to redirect the request to our stock page
    <div>
      {/* You can't configure `largeChartUrl` per symbol. We had to configure some routing rules in next.config.js to redirect clicks to the appropriate stock page on our site. */}
      <TickerTapeNoSSR
        symbols={tickers}
        colorTheme={colorMode === "light" ? "light" : "dark"}
        // isTransparent
        displayMode="regular"
        copyrightStyles={tradingViewCopyRightStyles}
        largeChartUrl={`http://localhost:3002/stocks/redirect`}
      />
      <div style={{ clear: "both" }}></div>
    </div>
  );
}
