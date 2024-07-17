import {
  Button,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Activity from "./Activity";

const RecentActivity = () => {
  return (
    <Flex p={3} flexDir={"column"} gap={4}>
      <Flex
        justifyContent={"space-between"}
        w={"100%"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Text fontSize={"x-large"} fontWeight={"bold"} color={"neutral.2"}>
          Recent Activity
        </Text>
        <Flex
          gap={2}
          flexWrap={"nowrap"}
          w={"max-content"}
          alignItems={"center"}
        >
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<Image src="/filter.svg" alt="filter" />}
              bg={"transparent"}
              p={2}
              border={"1px solid"}
              borderColor={"secondary.2"}
              transition="all 0.2s"
              borderRadius={"8px"}
              _hover={{ bg: "secondary.2" }}
            >
              <Text fontWeight={"medium"} color={"neutral.2"}>
                Today
              </Text>
            </MenuButton>
            <MenuList minW={"max-content"}>
              <MenuItem>completed</MenuItem>
              <MenuItem>pending</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<Image src="/arrow.svg" alt="arrow" w={"10px"} />}
              leftIcon={
                <Image
                  src="/calendar-02.svg"
                  filter={"grayscale(100%)"}
                  alt="calendar"
                />
              }
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
                Today
              </Text>
            </MenuButton>
            <MenuList minW={"max-content"}>
              <MenuItem>Last month</MenuItem>
              <MenuItem>Last year</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Activity />
      <Activity />
    </Flex>
  );
};

export default RecentActivity;
