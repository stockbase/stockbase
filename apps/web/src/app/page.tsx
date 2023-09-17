// "use client";

import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { log } from "logger";
import DateHeader from "./date-header";
import TopUsers from "./top-users";
import Link from "next/link";

export const metadata = {
  title: "Stockbase",
};

export default function Home(): JSX.Element {
  log("Hey! This is the Stockbase homepage.");

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <DateHeader />

      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={2} /*bg="tomato*/>
          <TopUsers />
        </GridItem>
        <GridItem colSpan={3} /*bg="papayawhip"*/>
          <News />
        </GridItem>
        <GridItem colSpan={3} /* bg="tomato"*/>
          <TrendingStocks />
        </GridItem>
      </Grid>
    </>
  );
}

// function TopUsers(): JSX.Element {
//   const fakeUsers = [
//     {
//       rank: 1,
//       username: "warrenfreakingbuffet",
//       profilePictureUrl: "https://placekitten.com/120/120",
//       portfolioBalanceSnapshot: 1534532.45,
//     },
//     {
//       rank: 2,
//       username: "JohnnyBogleHead",
//       profilePictureUrl: "https://placekitten.com/120/120",
//       portfolioBalanceSnapshot: 143454093,
//     },
//     {
//       rank: 3,
//       username: "bennygraham",
//       profilePictureUrl: "https://placekitten.com/120/120",
//       portfolioBalanceSnapshot: 904510.34,
//     },
//     // {
//     //   rank: 4,
//     //   username: "",
//     //   profilePictureUrl: "https://placekitten.com/120/120",
//     //   portfolioBalanceSnapshot: "",
//     // },
//   ];
//   return (
//     <Card>
//       <CardHeader>
//         <Heading size="md">Top Users</Heading>
//       </CardHeader>
//       <TableContainer>
//         <Table size="sm">
//           <TableCaption>See More</TableCaption>
//           <Thead>
//             <Tr>
//               <Th>Rank</Th>
//               <Th>User</Th>
//               <Th isNumeric>Portfolio Balance</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {fakeUsers.map((u) => (
//               <Tr>
//                 <Td>{u.rank}</Td>
//                 <Td>
//                   <Box display={"flex"} alignItems={"center"}>
//                     <Avatar src={u.profilePictureUrl} size="xs" mr={3} />
//                     <span>
//                       <Link href="/users/">{u.username}</Link>
//                     </span>
//                   </Box>
//                 </Td>
//                 <Td isNumeric>${u.portfolioBalanceSnapshot}</Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </TableContainer>
//     </Card>
//   );
// }

function News(): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">News</Heading>
      </CardHeader>
    </Card>
  );
}

function TrendingStocks(): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Trending</Heading>
      </CardHeader>
      <TableContainer>
        <Table size="sm">
          <TableCaption>See More</TableCaption>
          <Thead>
            <Tr>
              <Th>Rank</Th>
              <Th>Stock</Th>
              {/* TODO: Conditionally shows <small>(After Hours)</small> */}
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
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
            </Tr>
          </Tbody>
          <Tfoot>
            {/* Footer could be useful if we need to show Attribution/Copyright info for the Stock API we are using */}
          </Tfoot>
        </Table>
      </TableContainer>
    </Card>
  );
}
