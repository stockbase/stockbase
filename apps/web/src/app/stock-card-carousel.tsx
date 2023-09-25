"use client";

import { Stat, StatArrow, StatHelpText, StatNumber } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";

const StockDailyPriceChart = dynamic(
  () =>
    import("./components/simple-line-chart").then((mod) => mod.SimpleLineChart),
  {
    ssr: false,
  }
);

export default function StockCardCarousel() {
  const defaultStocks = [
    {
      rank: 1,
      ticker: "TSLA",
      company: "Tesla",
      price: 274.39,
      dollarChange: -1.65,
      percentChange: -0.6,
      logo: "https://storage.googleapis.com/iex/api/logos/TSLA.png",
      followerCount: 100000,
      tags: ["Technology", "Electric Vehicles"],
    },
    {
      rank: 2,
      ticker: "MSFT",
      company: "Microsoft",
      price: 330.2,
      dollarChange: -8.8,
      percentChange: -2.5,
      logo: "https://storage.googleapis.com/iex/api/logos/MSFT.png",
      followerCount: 100000,
      tags: [],
    },
    {
      rank: 3,
      ticker: "AAPL",
      company: "Apple",
      price: 85.58,
      dollarChange: 1.1,
      percentChange: 1.3,
      logo: "https://storage.googleapis.com/iex/api/logos/AAPL.png",
      followerCount: 100000,
      tags: [],
    },
    {
      rank: 4,
      ticker: "NVDA",
      company: "Nvidia",
      price: 330.2,
      dollarChange: -16.81,
      percentChange: -3.69,
      logo: "https://storage.googleapis.com/iex/api/logos/NVDA.png",
      followerCount: 100000,
      tags: [],
    },
    {
      rank: 5,
      ticker: "NFLX",
      company: "Netflix",
      price: 396.94,
      dollarChange: -3.55,
      percentChange: -0.89,
      logo: "https://storage.googleapis.com/iex/api/logos/NFLX.png",
      followerCount: 100000,
      tags: [],
    },
  ];
  const options = {
    // rewind: true,
    perPage: 4,
    breakpoints: {
      1280: {
        perPage: 3,
      },
      1024: {
        perPage: 3,
      },
      767: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
    updateOnMove: true,
  };
  return (
    <Splide options={options}>
      <SplideSlide>
        <StockCard stock={defaultStocks[0]} />
      </SplideSlide>
      <SplideSlide>
        <StockCard stock={defaultStocks[1]} />
      </SplideSlide>
      <SplideSlide>
        <StockCard stock={defaultStocks[2]} />
      </SplideSlide>
      <SplideSlide>
        <StockCard stock={defaultStocks[3]} />
      </SplideSlide>
      <SplideSlide>
        <StockCard stock={defaultStocks[4]} />
      </SplideSlide>
    </Splide>
  );
}

interface StockCardProps {
  stock: {
    rank: number;
    ticker: string;
    company: string;
    price: number;
    logo: string;
    dollarChange: number;
    percentChange: number;
    followerCount: number;
  };
}

function StockCard({ stock }: StockCardProps) {
  // const tradingViewCopyRightStyles: CopyrightStyles = {
  //   // Styles for the parent element wrapping the copyright text
  //   parent: {
  //     display: "none", // TODO: Contact TradingView to remove branding
  //   },
  // };

  const getCardBackgroundGradient = (rank: number) => {
    switch (rank) {
      case 1:
        return "linear(to-r, yellow.400, orange.300)";
      case 2:
        return "linear(to-r, gray.300, gray.500)";
      case 3:
        return "linear(to-r, orange.600, orange.700)";
      default:
        return "linear(to-r, gray.700, gray.900)";
    }
  };
  return (
    <Center py={6}>
      <Box
        // maxW={"270px"}
        maxW={"240px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"xl"}
        // border={"1px solid"}
        rounded={"md"}
        overflow={"hidden"}
      >
        {/* <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit="cover"
          alt="#"
        /> */}
        <Box
          h={"120px"}
          w={"full"}
          objectFit="cover"
          //   bg={useColorModeValue("gray.800", "gray.800")}
          bgGradient={getCardBackgroundGradient(stock.rank)}
        >
          <Box position={"relative"}>
            <Stat
              color={useColorModeValue("white", "gray.800")}
              p={2}
              position={"absolute"}
            >
              <StatNumber>${stock.price.toFixed(2)}</StatNumber>
              <StatHelpText>
                <Box
                  display={"flex"}
                  fontWeight={"bold"}
                  alignItems={"center"}
                  color={stock.dollarChange > 0 ? "#32a852" : "red"}
                >
                  {stock.dollarChange > 0 && <StatArrow type="increase" />}
                  {stock.dollarChange < 0 && <StatArrow type="decrease" />}

                  <p>
                    {stock.dollarChange.toFixed(2)} ({" "}
                    {stock.dollarChange > 0 && "+"}
                    {stock.percentChange.toFixed(2)}
                    %)
                  </p>
                </Box>
              </StatHelpText>
            </Stat>
            <Box position={"absolute"} mt={7}>
              <StockDailyPriceChart
                color={stock.dollarChange > 0 ? "#32a852" : "#db3030"}
                data={fakeDataPoints}
              />
            </Box>
          </Box>
          {/* <MiniChart colorTheme="dark" width="100%"></MiniChart> */}
          {/* <SingleTicker
            colorTheme="dark"
            // width="100%"
            symbol={stock.ticker}
            copyrightStyles={tradingViewCopyRightStyles}
          ></SingleTicker> */}
          {/* <SymbolOverview
            colorTheme="dark"
            symbols={[["Microsoft Corp.", "MSFT"]]}
            autosize
            chartType="candlesticks"
            downColor="#800080"
            borderDownColor="#800080"
            wickDownColor="#800080"
          /> */}
        </Box>
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={stock.logo}
            boxShadow={"xl"}
            // css={{
            //   border: "2px solid black",
            // }}
          />
        </Flex>
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={700} fontFamily={"body"}>
              {stock.ticker}
            </Heading>
            <Text color={"gray.500"}>{stock.company}</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            {/* <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Followers
              </Text>
            </Stack> */}
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>
                {stock.followerCount.toLocaleString()}
              </Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Followers
              </Text>
            </Stack>
          </Stack>

          {/* <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Follow
          </Button> */}
          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              View
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"gray.800"}
              color={"white"}
              //   boxShadow={
              //     "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              //   }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Follow
            </Button>
          </Stack>
        </Box>
        {/* <Text>Test</Text> */}
        <Box w={"100"} bg={"green.400"}>
          <Box as="span" bg={"green.400"} width="33%" height={"2"} />
          <Box as="span" bg={"yellow.400"} width="33%" height={"2"} />
          <Box as="span" bg={"red.400"} width="33%" height={"2"} />
        </Box>
      </Box>
    </Center>
  );
}

const fakeDataPoints = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
