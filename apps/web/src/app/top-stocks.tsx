"use client";

import {
  Card,
  CardHeader,
  Flex,
  Heading,
  Spacer,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  Tfoot,
  Box,
  Select,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiTrendingUp } from "react-icons/fi";

export default function TrendingStocks(): JSX.Element {
  const defaultStocks = [
    {
      rank: 1,
      ticker: "TSLA",
      company: "Tesla",
      price: 274.39,
      dollarChange: -1.65,
      percentChange: -0.6,
      logo: "https://storage.googleapis.com/iex/api/logos/TSLA.png",
    },
    {
      rank: 2,
      ticker: "MSFT",
      company: "Microsoft",
      price: 330.2,
      logo: "https://storage.googleapis.com/iex/api/logos/MSFT.png",
    },
    {
      rank: 3,
      ticker: "AAPL",
      company: "Apple",
      price: 330.2,
      logo: "https://storage.googleapis.com/iex/api/logos/AAPL.png",
    },
    {
      rank: 4,
      ticker: "NVDA",
      company: "Nvidia",
      price: 330.2,
      logo: "https://storage.googleapis.com/iex/api/logos/NVDA.png",
    },
    {
      rank: 5,
      ticker: "NFLX",
      company: "Netflix",
      price: 330.2,
      logo: "https://storage.googleapis.com/iex/api/logos/NFLX.png",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <Flex>
          <Box>
            <Heading size="sm">Top Stocks</Heading>
          </Box>
          <Spacer />
          <Box>
            <FiTrendingUp />
          </Box>
        </Flex>
      </CardHeader>
      <Select placeholder="Trending Today" m={2} size="sm" width={"50%"}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <TableContainer>
        <Table size="sm">
          <TableCaption>See More</TableCaption>
          <Thead>
            <Tr>
              <Th>Rank</Th>
              <Th>Stock</Th>
              {/* <Th>Company</Th> */}
              {/* TODO: Conditionally shows <small>(After Hours)</small> */}
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {defaultStocks.map((s) => (
              <Tr key={s.ticker}>
                <Td>{s.rank}</Td>
                <Td>
                  {/* <Box display={"flex"} alignItems={"center"}>
                    <Avatar src={s.logo} size="xs" mr={3} />
                    <div>
                      <h4>
                        <b>
                          <Link href="/stocks/TSLA">{s.ticker}</Link>
                        </b>
                      </h4>
                      <small>{s.company}</small>
                    </div>
                  </Box> */}
                  <Box display={"flex"} alignItems={"center"}>
                    <Avatar src={s.logo} size="xs" mr={3} />
                    <Box as="span" mr="3">
                      <Link href={`/stocks/${s.ticker}`}>
                        <b>{s.ticker}</b>
                      </Link>
                    </Box>
                    <Box as="span">
                      <small>{s.company}</small>
                    </Box>
                  </Box>
                </Td>
                {/* <td>
                  <small>{s.company}</small>
                </td> */}
                <Td isNumeric>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box as="span" mr="3">
                      ${s.price}{" "}
                    </Box>
                    <small>
                      {s.dollarChange} ({s.percentChange}%)
                    </small>
                  </Box>
                </Td>
              </Tr>
            ))}
            {/* <Tr>
              <Td>1</Td>
              <Td>
                <Box display={"flex"} alignItems={"center"}>
                  <Avatar src="https://bit.ly/sage-adebayo" size="xs" mr={3} />
                  <div>
                    <h4>
                      <b>
                        <Link href="/stocks/TSLA">TSLA</Link>
                      </b>
                    </h4>
                    <small>Tesla</small>
                  </div>
                </Box>
              </Td>
              <Td isNumeric>$330.22</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>
                <h4>
                  <b>AAPL</b>
                </h4>
                <small>Apple</small>
              </Td>
              <Td isNumeric>$175.01</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>
                <h4>
                  <b>MSFT</b>
                </h4>
                <small>Microsoft</small>
              </Td>
              <Td isNumeric>$330.22</Td>
            </Tr> */}
          </Tbody>
          <Tfoot>
            {/* Footer could be useful if we need to show Attribution/Copyright info for the Stock API we are using */}
          </Tfoot>
        </Table>
      </TableContainer>
    </Card>
  );
}
