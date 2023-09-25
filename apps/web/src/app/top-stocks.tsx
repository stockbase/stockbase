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
  Text,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  Box,
  Select,
  Badge,
  Button,
  Center,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
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
      ticker: "DIS",
      company: "Disney",
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

  return (
    <Card variant="outline">
      <CardHeader
        bg={"gray.800"}
        color={"white"}
        borderTopRightRadius={"var(--card-radius)"}
        borderTopLeftRadius={"var(--card-radius)"}
      >
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
      <Select placeholder="Trending" m={2} size="sm" width={"50%"}>
        <option value="option1">Gainers</option>
        <option value="option2">Losers</option>
        <option value="option3">Most Followed</option>
      </Select>
      <TableContainer>
        <Table size="sm">
          <TableCaption>
            <Link href={`/stocks`}>See More</Link>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Rank</Th>
              <Th>Stock</Th>
              {/* <Th>Company</Th> */}
              {/* TODO: Conditionally shows <small>(After Hours)</small> */}
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {defaultStocks.map((s) => (
              <Tr key={s.ticker}>
                <Td>{s.rank}</Td>
                <Td>
                  <Popover trigger="hover" placement="right">
                    <PopoverTrigger>
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
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Center py={6}>
                          <Box
                            maxW={"320px"}
                            w={"full"}
                            // bg={useColorModeValue("white", "gray.900")}
                            // boxShadow={"2xl"}
                            rounded={"lg"}
                            p={6}
                            textAlign={"center"}
                          >
                            <Avatar
                              size={"xl"}
                              src={s.logo}
                              mb={4}
                              pos={"relative"}
                            />
                            <Heading fontSize={"2xl"} fontFamily={"body"}>
                              {s.ticker}
                            </Heading>
                            <Text fontWeight={600} color={"gray.500"} mb={4}>
                              {s.company}
                            </Text>
                            {/* <Text
                              textAlign={"center"}
                              color={useColorModeValue("gray.700", "gray.400")}
                              px={3}
                            >
                              Actress, musician, songwriter and artist. PM for
                              work inquires or{" "}
                              <Text color={"blue.400"}>#tag</Text> me in your
                              posts
                            </Text> */}

                            <Stack
                              direction={"row"}
                              justify={"center"}
                              spacing={6}
                            >
                              {/* <Stack spacing={0} align={"center"}>
                                      <Text fontWeight={600}>23k</Text>
                                      <Text fontSize={"sm"} color={"gray.500"}>
                                        Followers
                                      </Text>
                                    </Stack> */}
                              <Stack spacing={0} align={"center"}>
                                <Text fontWeight={600}>23k</Text>
                                <Text fontSize={"sm"} color={"gray.500"}>
                                  Followers
                                </Text>
                              </Stack>
                            </Stack>

                            <Stack
                              align={"center"}
                              justify={"center"}
                              direction={"row"}
                              mt={6}
                            >
                              {s.tags.map((tag) => (
                                <Badge
                                  px={2}
                                  py={1}
                                  // eslint-disable-next-line react-hooks/rules-of-hooks -- testing console
                                  bg={useColorModeValue("gray.50", "green.800")}
                                  fontWeight={"400"}
                                  key={tag}
                                >
                                  #{tag}
                                </Badge>
                              ))}
                            </Stack>

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
                                bg={"blue.400"}
                                color={"white"}
                                boxShadow={
                                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                                }
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
                        </Center>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>
                {/* <td>
                  <small>{s.company}</small>
                </td> */}
                <Td>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    color={s.dollarChange > 0 ? "green" : "red"}
                  >
                    <Box as="span" mr="3">
                      ${s.price.toFixed(2)}{" "}
                    </Box>
                    {/* <small> */}
                    {s.dollarChange > 0 && "+"}
                    {s.dollarChange.toFixed(2)} ( {s.dollarChange > 0 && "+"}
                    {s.percentChange.toFixed(2)}
                    %)
                    {/* </small> */}
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}
