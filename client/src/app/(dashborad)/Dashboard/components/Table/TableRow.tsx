import {
  Checkbox,
  Td,
  Tr,
  Image,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import React from "react";

const TableRow = ({ patient }: any) => {
  const { name, date, time, type, status, doctor } = patient;

  return (
    <Tr>
      <Td p={3}>
        <Checkbox
        //   isChecked={checkedItems[0]}
        //   onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        />
      </Td>
      <Td fontSize={"14px"} display={"flex"} alignItems={"center"} gap={2}>
        <Avatar src="/unsplash_EZ4TYgXPNWk.png" name={name} size={"sm"} />
        {name}
      </Td>
      <Td fontSize={"14px"}>{date}</Td>
      <Td fontSize={"14px"}>{time}</Td>
      <Td fontSize={"14px"}>{type}</Td>
      <Td fontSize={"14px"}>{status}</Td>
      <Td fontSize={"14px"}>{doctor.name}</Td>
      <Td p={0}>
        <Menu>
          <MenuButton
            as={IconButton}
            p={0}
            textAlign={"center"}
            w={"24px"}
            h={"24px"}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            icon={
              <Image
                src="/more-vertical.svg"
                alt="more"
                w={"20px"}
                h={"20px"}
              />
            }
          ></MenuButton>
          <MenuList minW={"max-content"}>
            <MenuItem>Edit</MenuItem>
            <MenuItem>View</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>
      </Td>
    </Tr>
  );
};

export default TableRow;
