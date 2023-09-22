"use client";

import {
  Card,
  CardHeader,
  Heading,
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
  Flex,
  Spacer,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Center,
  Stack,
  //   useColorModeValue,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import { FiUsers } from "react-icons/fi";

export default function TopUsers(): JSX.Element {
  const fakeUsers = [
    {
      rank: 1,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 1534532.45,
      followerCount: 100000,
    },
    {
      rank: 2,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 1434540.93,
      followerCount: 100000,
    },
    {
      rank: 3,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 904510.34,
      followerCount: 100000,
    },
    {
      rank: 4,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 804510.34,
      followerCount: 100000,
    },
    {
      rank: 5,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 704510.34,
      followerCount: 100000,
    },
  ];
  return (
    <Card variant="outline">
      <CardHeader>
        {/* <Heading size="sm">Top Users</Heading> */}
        <Flex>
          <Box>
            <Heading size="sm">Top Users</Heading>
          </Box>
          <Spacer />
          <Box>
            <FiUsers />
          </Box>
        </Flex>
      </CardHeader>
      <Select placeholder="Largest Portfolio" m={2} size="sm" width={"50%"}>
        <option value="option1">Most Followed</option>
      </Select>
      <TableContainer>
        <Table size="sm">
          <TableCaption>
            <Link href={`/users`}>See More</Link>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Rank</Th>
              <Th>User</Th>
              <Th isNumeric>Portfolio Balance</Th>
            </Tr>
          </Thead>
          <Tbody>
            {fakeUsers.map((u) => (
              <Tr key={u.username}>
                <Td>{u.rank}</Td>
                <Td>
                  <Box display={"flex"} alignItems={"center"}>
                    <Avatar src={u.profilePictureUrl} size="xs" mr={3} />
                    <Box as="span">
                      <Popover trigger="hover" placement="right">
                        <PopoverTrigger>
                          <Link href={`/users/${u.username}`}>
                            {u.username}
                          </Link>
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
                                  src={u.profilePictureUrl}
                                  mb={4}
                                  pos={"relative"}
                                />
                                <Heading fontSize={"2xl"} fontFamily={"body"}>
                                  {u.username}
                                </Heading>
                                <Text
                                  fontWeight={600}
                                  color={"gray.500"}
                                  mb={4}
                                >
                                  {/* {s.company} */}
                                  Bio here
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

                                {/* <Stack
                                  align={"center"}
                                  justify={"center"}
                                  direction={"row"}
                                  mt={6}
                                >
                                  {s.tags.map((tag) => (
                                    <Badge
                                      px={2}
                                      py={1}
                                      bg={useColorModeValue(
                                        "gray.50",
                                        "green.800"
                                      )}
                                      fontWeight={"400"}
                                    >
                                      #{tag}
                                    </Badge>
                                  ))}
                                </Stack> */}

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
                    </Box>
                  </Box>
                </Td>
                <Td isNumeric>
                  ${u.portfolioBalanceSnapshot.toLocaleString()}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}
