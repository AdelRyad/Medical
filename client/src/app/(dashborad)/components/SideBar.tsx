// SideBar.tsx
import { Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import SideBarLink from "./SideBarLInk";

const SideBar = () => {
  return (
    <Flex
      flexDirection="column"
      gap={2}
      p={{ base: 3, lg: 6 }}
      position={"fixed"}
    >
      <Link
        href={"/"}
        fontSize={"2xl"}
        fontWeight={"bold"}
        _hover={{ textDecoration: "none" }}
        display="flex"
        gap={2}
        alignItems="center"
        mb={6}
        flexDir={{ base: "column", xl: "row" }}
      >
        <Image src="/Group.svg" alt="Medikia" width={25} height={25} />
        <Text fontSize={{ base: "16px", lg: "2xl" }}>Medikia</Text>
      </Link>
      <Text
        color={"gray.500"}
        fontSize={{ base: "16px", lg: "lg" }}
        textAlign={{ base: "center", xl: "left" }}
      >
        Main
      </Text>
      <SideBarLink title="Dashboard" icon="/dashboard-square-02.svg" />
      <SideBarLink title="Patients" icon="/user-multiple.svg" />
      <SideBarLink title="Appointments" icon="/calendar-02.svg" />
      <SideBarLink title="Tasks" icon="/note-01.svg" />
      <SideBarLink title="Chat" icon="/bubble-chat.svg" />
      <Text
        color={"gray.500"}
        fontSize={{ base: "16px", lg: "lg" }}
        textAlign={{ base: "center", xl: "left" }}
      >
        Other
      </Text>
      <SideBarLink title="Reports" icon="analytics-01.svg" />
      <SideBarLink title="Staff" icon="doctor-02.svg" />
      <SideBarLink title="Notifications" icon="notification-02.svg" />
    </Flex>
  );
};

export default SideBar;
