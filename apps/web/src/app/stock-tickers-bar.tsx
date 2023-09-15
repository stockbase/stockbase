"use client";

// import { CopyrightStyles } from "react-ts-tradingview-widgets";
import dynamic from "next/dynamic";

interface CopyrightStyles {
  parent?: React.CSSProperties;
  link?: React.CSSProperties;
  span?: React.CSSProperties;
};

const TickerTapeNoSSR = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.TickerTape),
  {
    ssr: false,
  }
);

export default function StockTickersBar() {
  const tradingViewCopyRightStyles: CopyrightStyles = {
    // Styles for the parent element wrapping the copyright text
    parent: {
      float: "right",
      marginRight: "5px"
    },
    // Styles for the link
    link: {
      textDecoration: "line-trough",
    },
    // Styles for text of the link
    span: {
      color: "darkblue",
      fontSize: "10px",
    },
  };

  // TODO: 
  const markets = [
    {
      "proName": "FOREXCOM:SPXUSD",
      "title": "S&P 500"
    },
    {
      "proName": "FOREXCOM:NSXUSD",
      "title": "Nasdaq 100"
    },
    {
      "proName": "FX_IDC:EURUSD",
      "title": "EUR/USD"
    },
  ];

  const defaultStocks = [
    {
      "proName": "NASDAQ:MSFT",
      "title": "MSFT"
    },
    {
      "proName": "NASDAQ:AAPL",
      "title": "AAPL"
    },
    {
      "proName": "NASDAQ:TSLA",
      "title": "TSLA"
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
      <TickerTapeNoSSR symbols={tickers} colorTheme="light" displayMode="regular" copyrightStyles={tradingViewCopyRightStyles} largeChartUrl={`http://localhost/stocks`} />
      <div style={{ clear:"both"}}></div>
    </div>
  )
}