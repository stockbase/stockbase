"use client";

import {
  Card,
  CardHeader,
  Heading,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  Box,
  Select,
} from "@chakra-ui/react";
import { Link } from "ui";
import { faker } from "@faker-js/faker";

export default function TopUsers(): JSX.Element {
  const fakeUsers = [
    {
      rank: 1,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 1534532.45,
    },
    {
      rank: 2,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 1434540.93,
    },
    {
      rank: 3,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 904510.34,
    },
    {
      rank: 4,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 804510.34,
    },
    {
      rank: 5,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 704510.34,
    },
  ];
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Top Users</Heading>
      </CardHeader>
      <Select placeholder="Select option" m={3} size="sm" width={"50%"}>
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
                    <span>
                      <Link href="/users/">{u.username}</Link>
                    </span>
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
