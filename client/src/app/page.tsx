import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import AddTaskForm from "./components/AddTaskForm";
import AddPatientForm from "./components/AddPatientForm";
export default function Home() {
  return (
    <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Tabs
        isFitted
        w={{ base: "90%", md: "50%" }}
        border={"1px solid #E2E8F0"}
        borderRadius={"8px"}
      >
        <TabList mb="1em">
          <Tab>Add Task</Tab>
          <Tab>Add Patient</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AddTaskForm />
          </TabPanel>
          <TabPanel>
            <AddPatientForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
