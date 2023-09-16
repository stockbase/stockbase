import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { log } from "logger";

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
      {/* <h1>Friday, September 15, 2023</h1> */}
      <Text fontSize="2xl" fontWeight="bold">
        Friday, September 15
      </Text>
      <Text fontSize="sm" fontWeight="bold" mb={6}>
        3:24pm ET - Market Open
      </Text>

      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={2} /*bg="tomato*/>
          <Card>
            <CardHeader>
              <Heading size="md">Top Users</Heading>
            </CardHeader>
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
                  <Tr>
                    <Td>1</Td>
                    <Td>
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://placekitten.com/100/100"
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                      />
                      <span>warrenfreakingbuffet</span>
                    </Td>
                    <Td isNumeric>
                      <small>$1,534,532.45</small>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://placekitten.com/120/120"
                        alt="Simon the pensive"
                        mr="12px"
                      />
                      <span>JohnnyBogleHead</span>
                    </Td>
                    <Td isNumeric>
                      <small>$1,434,540.93</small>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://placekitten.com/120/120"
                        alt="Simon the pensive"
                        mr="12px"
                      />
                      <span>bennygraham</span>
                    </Td>
                    <Td isNumeric>$904,510.34</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Card>
        </GridItem>
        <GridItem colSpan={3} /*bg="papayawhip"*/>
          <Card>
            <CardHeader>
              <Heading size="md">News</Heading>
            </CardHeader>
          </Card>
        </GridItem>
        {/* <GridItem colSpan={2} bg="papayawhip" /> */}
        <GridItem colSpan={3} /* bg="tomato"*/>
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
                      <h4>
                        <b>
                          <Link href="/stocks/TSLA">TSLA</Link>
                        </b>
                      </h4>
                      <small>Tesla</small>
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
        </GridItem>
      </Grid>
    </>
  );
}
