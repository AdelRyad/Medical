import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

const Welcome = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      h={"100%"}
      flexWrap={{ base: "wrap", md: "nowrap" }}
      gap={3}
    >
      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight={"semibold"}
        w={{ base: "100%", md: "max-content" }}
      >
        Welcome Back, Dr.Omar
      </Text>
      <Flex gap={3} alignItems={"center"}>
        <Menu>
          <MenuButton
            as={Button}
            aria-label="Options"
            rightIcon={<Image src="/arrow.svg" alt="arrow" w={"10px"} />}
            leftIcon={
              <Image
                src="/calendar-02.svg"
                alt="calendar"
                filter={"grayscale(100%)"}
              />
            }
            variant="outline"
          >
            Today
          </MenuButton>
          <MenuList minW={"max-content"}>
            <MenuItem>Last month</MenuItem>
            <MenuItem>Last year</MenuItem>
          </MenuList>
        </Menu>
        <Button
          leftIcon={<Image src="/file-export.svg" alt="file" />}
          bg={"primary.1"}
          color={"white"}
          _hover={{ bg: "primary.1" }}
        >
          Export
        </Button>
      </Flex>
    </Flex>
  );
};

export default Welcome;
