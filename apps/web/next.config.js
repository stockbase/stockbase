module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/stocks/redirect",
        has: [
          {
            type: "query",
            key: "tvwidgetsymbol",
            value: "([^&]*):(?<ticker>.*)",
          },
        ],
        permanent: false,
        destination: "/stocks/:ticker",
      },
    ];
  },
};
