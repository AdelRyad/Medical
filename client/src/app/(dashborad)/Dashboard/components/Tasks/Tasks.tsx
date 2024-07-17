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
import Task from "./Task";
import axios from "axios";

const Tasks = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tasks`);

  return (
    <Flex p={3} flexDir={"column"} h={"100%"} gap={4}>
      <Flex
        justifyContent={"space-between"}
        w={"100%"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Text fontSize={"x-large"} fontWeight={"bold"} color={"neutral.2"}>
          Tasks
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
      {data.map((task: any) => (
        <Task key={task.id} data={task} />
      ))}
    </Flex>
  );
};

export default Tasks;
