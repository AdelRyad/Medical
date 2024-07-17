import { Flex, Image, Text, Badge, Divider } from "@chakra-ui/react";
import React from "react";

const Activity = () => {
  return (
    <Flex w={"100%"} gap={2} alignItems={"start"}>
      <Image
        src="/analytics-01.svg"
        alt="mail"
        bg={"primary.2"}
        p={2}
        borderRadius={"full"}
        w={"45px"}
      />

      <Flex flexDir={"column"} gap={1}>
        <Flex alignItems={"center"} columnGap={2} flexWrap={"wrap"}>
          <Text fontWeight={"semibold"} color={"neutral.2"}>
            Dr.Ahmed Ali-Uploaded weekly reports
          </Text>
        </Flex>
        <Flex gap={1} alignItems={"center"} flexWrap={"wrap"}>
          <Text fontSize={"11px"}>Attached 3 files to task</Text>
          <Flex fontSize={"11px"} gap={1} color={"primary.1"}>
            <Image src="/note-01.svg" alt="calendar" w={"11px"} />
            Ak61
          </Flex>
        </Flex>
        <Flex fontSize={"sm"} color={"neutral.1"} gap={3} mt={2}>
          <Flex alignItems={"center"} flexWrap={"wrap"} gap={1}>
            <Image src="/excel.svg" alt="file" w={"30px"} />
            <Flex flexDir={"column"} gap={1}>
              <Text fontWeight={"medium"}>Operation Info.xls</Text>
              <Text fontSize={"11px"}>1.5 MB</Text>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} flexWrap={"wrap"} gap={1}>
            <Image src="/excel.svg" alt="file" w={"30px"} />
            <Flex flexDir={"column"} gap={1}>
              <Text fontWeight={"medium"}>Operation Info.xls</Text>
              <Text fontSize={"11px"}>1.5 MB</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Activity;
