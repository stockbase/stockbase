// "use client";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { log } from "logger";
import DateHeader from "./date-header";
import TopUsers from "./top-users";
import { FiBook } from "react-icons/fi";
import TrendingStocks from "./top-stocks";

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
        // h="200px"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={3} /*bg="tomato*/>
          <TopUsers />
        </GridItem>
        <GridItem rowSpan={2} colSpan={3} /* bg="tomato"*/>
          <TrendingStocks />
        </GridItem>
        <GridItem rowSpan={2} colSpan={6} /*bg="papayawhip"*/>
          <News />
        </GridItem>
      </Grid>
    </>
  );
}

function News(): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <Flex>
          <Box>
            <Heading size="sm">News</Heading>
          </Box>
          <Spacer />
          <Box>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<FiBook />}
            />
          </Box>
        </Flex>
      </CardHeader>
    </Card>
  );
}
