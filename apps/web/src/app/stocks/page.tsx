import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

export default function Stocks(): JSX.Element {
  return (
    <Box>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Stocks</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
}
