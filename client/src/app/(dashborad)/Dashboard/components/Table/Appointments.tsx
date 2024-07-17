"use client";
import { useEffect, useState } from "react";
import PatientsTable from "./PatientsTable";
import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  ButtonGroup,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";

const Appointments = () => {
  const filters = ["All", "Urgent", "Follow-Up", "New Patient", "Completed"];
  const [table, setTable] = useState(0);
  const [patients, setPatients] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/patients?table=${table}`
        );
        const data = res.data;
        const { patients, count } = data;
        setPatients(patients);
        setCount(Math.ceil(count / 2));
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, [table]);

  return (
    <Flex
      h={"100%"}
      flexDir={"column"}
      gap={5}
      border={"1px solid"}
      borderColor={"secondary.2"}
      p={3}
      borderRadius={"8px"}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Text fontSize={"2xl"} fontWeight={"bold"} color={"neutral.2"}>
          Appointments
        </Text>
        <Flex gap={3}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<Image src="/arrow.svg" alt="arrow" w={"10px"} />}
              leftIcon={<Image w={"15px"} src="/sorting-01.svg" alt="sort" />}
              bg={"transparent"}
              px={4}
              py={2}
              border={"1px solid"}
              borderColor={"secondary.2"}
              transition="all 0.2s"
              borderRadius={"8px"}
              _hover={{ bg: "secondary.2" }}
              fontSize={"sm"}
            >
              Last week
            </MenuButton>
            <MenuList minW={"max-content"}>
              <MenuItem>Today</MenuItem>
              <MenuItem>Last week</MenuItem>
              <MenuItem>Last month</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<Image src="/arrow.svg" alt="arrow" w={"10px"} />}
              leftIcon={
                <Image
                  w={"15px"}
                  src="/calendar-02.svg"
                  filter={"grayscale(100%)"}
                  alt="sort"
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
              fontSize={"sm"}
            >
              12 Dec,22
            </MenuButton>
            <MenuList minW={"max-content"}>
              <MenuItem>12 Oct,22</MenuItem>
              <MenuItem>12 Nov,22</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Flex overflowX={"auto"} overflowY={"hidden"}>
        <ButtonGroup gap={3}>
          {filters.map((filter, index) => (
            <Button
              key={index}
              color={"neutral.3"}
              _hover={{ bg: "primary.2" }}
              rounded={"full"}
              bg={"secondary.1"}
              fontSize={{ base: "sm", lg: "md" }}
            >
              {filter}
            </Button>
          ))}
        </ButtonGroup>
      </Flex>
      {patients.length > 0 && <PatientsTable patients={patients} />}

      <HStack w={"100%"} justifyContent={"center"} gap={3}>
        <Button onClick={() => setTable(table - 1)} isDisabled={table === 0}>
          Prev
        </Button>
        {Array.from({ length: count }).map((_, index) => (
          <Button
            isActive={index === table}
            key={index}
            onClick={() => setTable(index)}
          >
            {index + 1}
          </Button>
        ))}

        <Button
          onClick={() => setTable(table + 1)}
          isDisabled={count === table + 1}
        >
          Next
        </Button>
      </HStack>
    </Flex>
  );
};

export default Appointments;
