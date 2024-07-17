"use client";
import { customTheme } from "./theme";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { ChakraProvider, extendTheme, Grid, GridItem } from "@chakra-ui/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Grid
        templateColumns="repeat(10, 1fr)"
        templateRows="repeat(14, 1fr)"
        height={"100vh"}
      >
        <GridItem
          colSpan={{ base: 1, xl: 2 }}
          rowSpan={14}
          rowStart={1}
          borderRight={"1px solid "}
          borderColor={"secondary.2"}
          display={{ base: "none", md: "block" }}
        >
          <SideBar />
        </GridItem>
        <GridItem
          colSpan={{ base: 10, md: 9, xl: 8 }}
          rowSpan={1}
          colStart={{ base: 1, md: 2, xl: 3 }}
          borderBottom={"1px solid "}
          borderColor={"secondary.2"}
          p={{ base: 2, lg: 6, md: 3 }}
        >
          <NavBar />
        </GridItem>
        <GridItem
          colSpan={{ base: 10, md: 9, xl: 8 }}
          rowSpan={13}
          rowStart={2}
          colStart={{ base: 1, md: 2, xl: 3 }}
        >
          {children}
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default Layout;
