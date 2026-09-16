// "use client";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  IconButton,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { log } from "logger";
// import DateHeader from "./date-header";
// import TopUsers from "./top-users";
// import { FiActivity } from "react-icons/fi";
// import TrendingStocks from "./top-stocks";
// import { BsNewspaper } from "react-icons/bs";
import StockCardCarousel from "./stock-card-carousel";
import { FaList, FaTable } from "react-icons/fa";
// import { AddIcon } from "@chakra-ui/icons";
import UserCardCarousel from "./user-card-carousel";

export const metadata = {
  title: "Stockbase",
};

export default function Home(): JSX.Element {
  log("Hey! This is the Stockbase homepage.");

  return (
    <Box>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage fontWeight={"bold"}>
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* <DateHeader /> */}

      {/* <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
        mb={5}
      >
        <GridItem rowSpan={2} colSpan={3}>
          <TopUsers />
        </GridItem>
        <GridItem rowSpan={2} colSpan={3}>
          <TrendingStocks />
        </GridItem>
      </Grid> */}

      <Box>
        <Flex align={"center"} justify={"center"}>
          <Box mb={4} mt={4}>
            <Heading size="md">Top Stocks</Heading>
          </Box>
          <Spacer />
          <Flex align={"center"} justify={"center"}>
            <Select placeholder="Gainers" size={"sm"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select placeholder="All Sectors" size={"sm"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <ButtonGroup size="sm" isAttached variant="outline">
              <IconButton
                aria-label=""
                icon={<FaTable />}
                color="black"
                bg="gray.200"
              />
              <IconButton aria-label="" icon={<FaList />} />
            </ButtonGroup>
          </Flex>
        </Flex>
        {/* <Text fontSize="xl" fontWeight="bold" mb={4} mt={4}>
          Top Stocks
        </Text> */}
        <Divider variant={"thick"} />
        <Box>
          {/* <HStack spacing={4} mt={4}>
            <Tag
              size={"lg"}
              key={"gainers-filter"}
              borderRadius="full"
              variant="solid"
              colorScheme="gray"
            >
              <TagLabel mr={2}>Gainers</TagLabel>
              <FiTrendingUp />
            </Tag>
            <Tag
              size={"lg"}
              key={"losers-filter"}
              borderRadius="full"
              variant="solid"
              colorScheme="linkedin"
            >
              <TagLabel mr={2}>Losers</TagLabel>
              <FiTrendingDown />
            </Tag>
            <Tag
              size={"lg"}
              key={"trending-filter"}
              borderRadius="full"
              variant="solid"
              colorScheme="linkedin"
            >
              <TagLabel mr={2}>Trending</TagLabel>
              <FiArrowUp />
            </Tag>
            <Tag
              size={"lg"}
              key={"following-filter"}
              borderRadius="full"
              variant="solid"
              colorScheme="linkedin"
            >
              <TagLabel mr={2}>Following</TagLabel>
              <FiUserPlus />
            </Tag>
          </HStack> */}
          <StockCardCarousel />
        </Box>
      </Box>
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb={4} mt={4}>
          Top Users
        </Text>
        <Divider variant={"thick"} />
        <UserCardCarousel />
      </Box>
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb={4} mt={4}>
          Top ETFs
        </Text>
        <Divider variant={"thick"} />
      </Box>
      {/* <Box>
        <Text fontSize="xl" fontWeight="bold" mb={4} mt={4}>
          Top News
        </Text>
        <Divider variant={"thick"} />
      </Box> */}
    </Box>
  );
}

// function Activity(): JSX.Element {
//   return (
//     <Card variant="outline">
//       <CardHeader>
//         <Flex>
//           <Box>
//             <Heading size="sm">Activity</Heading>
//           </Box>
//           <Spacer />
//           <Box>
//             <IconButton
//               variant="ghost"
//               colorScheme="gray"
//               aria-label="See menu"
//               icon={<FiActivity />}
//             />
//           </Box>
//         </Flex>
//       </CardHeader>
//     </Card>
//   );
// }

// function News(): JSX.Element {
//   return (
//     <Card variant="outline">
//       <CardHeader>
//         <Flex>
//           <Box>
//             <Heading size="sm">News</Heading>
//           </Box>
//           <Spacer />
//           <Box>
//             <IconButton
//               variant="ghost"
//               colorScheme="gray"
//               aria-label="See menu"
//               icon={<BsNewspaper />}
//             />
//           </Box>
//         </Flex>
//       </CardHeader>
//     </Card>
//   );
// }
