import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";

type props = {
  data: {
    title: string;
    description: string;
    doctors: [
      {
        name: string;
      }
    ];
    status: string;
    attachment: string[];
    date: string;
  };
};
const Task: React.FC<props> = ({ data }) => {
  const { title, description, doctors, status, attachment, date } = data;
  const formattedDate = new Date(date);

  return (
    <Accordion allowToggle>
      <AccordionItem border={"none"}>
        <AccordionButton
          p={"0 0 8px 0"}
          borderWidth={"0 0 1px"}
          borderColor={"secondary.2"}
          _hover={{ bg: "transparent" }}
        >
          <Box as="div" flex="1" textAlign="left">
            <Flex w={"100%"} gap={2}>
              <Image
                src="/mail-01.svg"
                alt="mail"
                bg={"primary.2"}
                p={2}
                borderRadius={"4px"}
                w={"45px"}
              />
              <Flex flexDir={"column"} gap={1}>
                <Flex alignItems={"center"} columnGap={2} flexWrap={"wrap"}>
                  <Text fontWeight={"semibold"} color={"neutral.2"}>
                    {title}
                  </Text>
                  <Badge
                    bg={"green.2"}
                    color={"green.1"}
                    px={2}
                    borderRadius={"full"}
                    textTransform={"lowercase"}
                  >
                    {status}
                  </Badge>
                </Flex>
                <Flex gap={1} alignItems={"center"} flexWrap={"wrap"}>
                  <Text fontSize={"11px"}>
                    {formattedDate.toDateString().slice(3)}
                  </Text>
                  <Text fontSize={"11px"}>
                    &#8226; {formattedDate.toLocaleTimeString()}
                  </Text>
                  <Flex fontSize={"11px"} gap={1}>
                    <Image
                      src="/calendar-02.svg"
                      alt="calendar"
                      filter={"grayscale(100%)"}
                      w={"11px"}
                    />
                    {formattedDate.toLocaleDateString()}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel
          py={4}
          px={0}
          gap={2}
          display={"flex"}
          flexDir={"column"}
        >
          <Text fontWeight={"medium"} color={"neutral.2"}>
            Description
          </Text>
          <Text
            fontSize={"sm"}
            color={"neutral.1"}
            borderBottom={"1px solid"}
            borderColor={"secondary.2"}
            pb={2}
          >
            {description}
          </Text>
          <Text fontWeight={"medium"} color={"neutral.2"}>
            Attachments
          </Text>
          <Flex
            fontSize={"sm"}
            color={"neutral.1"}
            borderBottom={"1px solid"}
            borderColor={"secondary.2"}
            pb={2}
            gap={3}
          >
            {attachment.map(
              (file: any, index: React.Key | null | undefined) => {
                const { name, size } = JSON.parse(file);
                return (
                  <Flex
                    key={index}
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    gap={1}
                  >
                    <Image src="/excel.svg" alt="file" w={"30px"} />
                    <Flex flexDir={"column"} gap={1}>
                      <Text fontWeight={"medium"}>{name}</Text>
                      <Text fontSize={"11px"}>{size}</Text>
                    </Flex>
                  </Flex>
                );
              }
            )}
          </Flex>
          <Text fontWeight={"medium"} color={"neutral.2"}>
            Assigned to
          </Text>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={2}
          >
            <Flex pl={2}>
              {doctors.map(
                (doctor: any, index: React.Key | null | undefined) => (
                  <Avatar
                    key={index}
                    src="/unsplash_EZ4TYgXPNWk.png"
                    size={"sm"}
                    ml={-2}
                    name={doctor.name}
                  />
                )
              )}

              <Avatar
                src="/plus.svg"
                p={2}
                size={"sm"}
                bg={"primary.2"}
                ml={-2}
                cursor={"pointer"}
              />
            </Flex>
            <Menu>
              <MenuButton
                as={Button}
                textAlign={"center"}
                bg={"transparent"}
                rightIcon={<Image src="/arrow.svg" alt="arrow" w={"10px"} />}
                border={"1px solid"}
                borderColor={"secondary.2"}
                fontSize={"sm"}
              >
                Options
              </MenuButton>
              <MenuList minW={"max-content"}>
                <MenuItem>Assign</MenuItem>
                <MenuItem>Unassign</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Task;
