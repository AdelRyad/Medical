import {
  Button,
  Menu,
  MenuButton,
  Th,
  Image,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";

const TableHead = ({ title }: { title: string }) => {
  return (
    <Th fontSize={"14px"} py={0}>
      <Menu>
        <MenuButton
          as={Button}
          p={0}
          textAlign={"center"}
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          rightIcon={
            <Image src="/tableHeadArrow.svg" alt="more" w={"15px"} h={"15px"} />
          }
          minW={"max-content"}
        >
          {title}
        </MenuButton>
        <MenuList minW={"max-content"}>
          <MenuItem
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            Asec{" "}
            <Image
              src="/OptionArrow.svg"
              alt="more"
              w={"7px"}
              transform={"rotate(180deg)"}
            ></Image>
          </MenuItem>
          <MenuItem
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={2}
          >
            Dsec <Image src="/OptionArrow.svg" alt="more" w={"7px"}></Image>
          </MenuItem>
        </MenuList>
      </Menu>
    </Th>
  );
};

export default TableHead;
