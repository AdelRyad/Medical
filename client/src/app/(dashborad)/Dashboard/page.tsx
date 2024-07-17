import { Grid, GridItem } from "@chakra-ui/react";
import Welcome from "./components/Welcome";
import Cards from "./components/StatusCards/Cards";
import Appointments from "./components/Table/Appointments";
import Tasks from "./components/Tasks/Tasks";
import RecentActivity from "./components/RecentActivity/RecentActivity";
import ChartContainer from "./Chart/ChartContainer";

export const dynamic = "force-dynamic";
const Home = () => {
  return (
    <Grid
      templateColumns="repeat(10, 1fr)"
      templateRows={{ base: "repeat(1, 1fr)", lg: "repeat(12, 1fr)" }}
      p={6}
      gap={6}
      height={"100%"}
    >
      <GridItem colSpan={10} rowSpan={1}>
        <Welcome />
      </GridItem>
      <GridItem
        colSpan={10}
        rowSpan={2}
        h={{ base: "160px", md: "310px", lg: "100%" }}
      >
        <Cards />
      </GridItem>
      <GridItem
        colSpan={{ base: 10, lg: 7 }}
        rowSpan={5}
        h={{ base: "500px", lg: "100%" }}
      >
        <ChartContainer />
      </GridItem>
      <GridItem
        colSpan={{ base: 10, lg: 3 }}
        rowSpan={6}
        border={"1px solid"}
        borderColor={"secondary.2"}
        borderRadius={"8px"}
        overflow={"auto"}
        h={{ base: "400px", lg: "100%" }}
      >
        <Tasks />
      </GridItem>
      <GridItem
        colSpan={{ base: 10, lg: 7 }}
        rowSpan={5}
        overflowY={"hidden"}
        h={{ base: "420px", md: "400px", lg: "100%" }}
      >
        <Appointments />
      </GridItem>
      <GridItem
        colSpan={{ base: 10, lg: 3 }}
        rowSpan={4}
        border={"1px solid"}
        borderColor={"secondary.2"}
        borderRadius={"8px"}
        overflow={"auto"}
        h={{ base: "500px", lg: "100%" }}
      >
        <RecentActivity />
      </GridItem>
    </Grid>
  );
};

export default Home;
