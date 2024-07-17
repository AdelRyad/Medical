import Chart from "./Chart";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image,
} from "@chakra-ui/react";

const data = [
  {
    month: "Jun",
    value: 2000,
  },
  {
    month: "Feb",
    value: 2210,
  },
  {
    month: "Mar",
    value: 2290,
  },
  {
    month: "Apr",
    value: 2000,
  },
  {
    month: "May",
    value: 2181,
  },
  {
    month: "Jun",
    value: 2500,
  },
  {
    month: "Jul",
    value: 600,
  },
  {
    month: "Aug",
    value: 700,
  },
  {
    month: "Sep",
    value: 500,
  },
  {
    month: "Oct",
    value: 700,
  },
  {
    month: "Nov",
    value: 900,
  },
  {
    month: "Dec",
    value: 2100,
  },
];
const percentage = 0.5;
const value = 1000;
const positive = true;
const ChartContainer = () => (
  <Flex
    flexDir={"column"}
    w={"100%"}
    h={"100%"}
    p={3}
    gap={3}
    border={"1px solid"}
    borderColor={"secondary.2"}
    rounded={"8px"}
  >
    <Flex justifyContent={"space-between"}>
      <Text fontSize={"x-large"} fontWeight={"bold"} color={"neutral.2"}>
        Patients
      </Text>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Image src="/arrow.svg" alt="arrow" w={"10px"} />}
          bg={"transparent"}
          px={4}
          py={2}
          border={"1px solid"}
          borderColor={"secondary.2"}
          transition="all 0.2s"
          borderRadius={"8px"}
          _hover={{ bg: "secondary.2" }}
        >
          <Text fontWeight={"medium"} color={"neutral.2"}>
            Last week
          </Text>
        </MenuButton>
        <MenuList minW={"max-content"}>
          <MenuItem>Last month</MenuItem>
          <MenuItem>Last year</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
    <Flex flexDir={"column"} gap={1}>
      <Text>Total Patients</Text>
      <Flex gap={2} alignItems={"center"}>
        <Text fontSize={"3xl"} fontWeight={"bold"} color={"neutral.2"}>
          {value}
        </Text>
        <Flex
          gap={1}
          alignItems={"center"}
          bg={positive ? "green.2" : "orange.2"}
          rounded={"full"}
          px={2}
          userSelect={"none"}
        >
          <Text
            fontSize={"large"}
            fontWeight={"medium"}
            color={positive ? "green.1" : "orange.1"}
            transform={positive ? "rotate(90deg)" : "rotate(-90deg)"}
          >
            &#171;
          </Text>
          <Text
            fontSize={"sm"}
            fontWeight={"medium"}
            color={positive ? "green.1" : "orange.1"}
          >
            {percentage}%
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <Chart data={data} />
  </Flex>
);

export default ChartContainer;
