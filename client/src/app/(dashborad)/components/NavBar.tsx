"use client";
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image,
  Input,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} h={"100%"}>
      <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }} fontWeight={"bold"}>
        {pathname.slice(1)}
      </Text>
      <Flex
        alignItems={"center"}
        w={"max-content"}
        gap={3}
        justifyContent={"flex-end"}
        maxW={"80%"}
      >
        <Input
          maxW={"300px"}
          w={"50%"}
          variant={"outline"}
          rounded={"full"}
          type="search"
          name="search"
          title="search"
          placeholder="Search"
          h={{ base: "35px", md: "40px" }}
          aria-label="Search"
        />
        <Flex borderRight={"1px solid #E2E8F0"} p={2} gap={2}>
          <Image
            src="/notification-02.svg"
            alt="Notification"
            filter={"grayscale(100%)"}
            w={{ base: "20px", md: "30px" }}
            cursor={"pointer"}
          />
          <Image
            src="/bubble-chat.svg"
            alt="Chat"
            filter={"grayscale(100%)"}
            w={{ base: "20px", md: "30px" }}
            cursor={"pointer"}
          />
        </Flex>
        <Flex gap={2} alignItems={"center"}>
          <Avatar
            src="/unsplash_EZ4TYgXPNWk.png"
            size={{ base: "sm", xl: "md" }}
            name="Omar Ryad"
          />
          <Flex flexDirection={"column"} gap={1}>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"12px"} display={{ base: "none", md: "block" }}>
                Omar Ryad
              </Text>
              <Text
                bg={"green.2"}
                color={"green.1"}
                px={"10px"}
                rounded={"full"}
                fontSize={"12px"}
                display={{ base: "none", md: "block" }}
              >
                Doctor
              </Text>
            </Flex>
            <Text fontSize={"12px"} display={{ base: "none", md: "block" }}>
              OmarRIyad@gmail.com
            </Text>
          </Flex>
          <Menu>
            <MenuButton
              display={{ base: "none", md: "block" }}
              background={"transparent"}
              as={IconButton}
              icon={<ChevronDownIcon />}
              aria-label="Options"
            />
            <MenuList minW={"max-content"}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
