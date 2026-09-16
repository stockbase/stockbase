import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
// import { usePathname } from "next/navigation";

export default function Stock(): JSX.Element {
  // const tickerSymbol = usePathname();
  return (
    <Box>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Stocks</BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{tickerSymbol}</BreadcrumbLink>
        </BreadcrumbItem> */}
      </Breadcrumb>
    </Box>
  );
}
