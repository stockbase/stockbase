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
import { FiActivity } from "react-icons/fi";
import TrendingStocks from "./top-stocks";
import { BsNewspaper } from "react-icons/bs";

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
        <GridItem rowSpan={2} colSpan={3}>
          <TopUsers />
        </GridItem>
        <GridItem rowSpan={2} colSpan={3}>
          <TrendingStocks />
        </GridItem>
        <GridItem rowSpan={2} colSpan={3}>
          <Activity />
        </GridItem>
        <GridItem rowSpan={2} colSpan={3}>
          <News />
        </GridItem>
      </Grid>
    </>
  );
}

function Activity(): JSX.Element {
  return (
    <Card variant="outline">
      <CardHeader>
        <Flex>
          <Box>
            <Heading size="sm">Activity</Heading>
          </Box>
          <Spacer />
          <Box>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<FiActivity />}
            />
          </Box>
        </Flex>
      </CardHeader>
    </Card>
  );
}

function News(): JSX.Element {
  return (
    <Card variant="outline">
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
              icon={<BsNewspaper />}
            />
          </Box>
        </Flex>
      </CardHeader>
    </Card>
  );
}
