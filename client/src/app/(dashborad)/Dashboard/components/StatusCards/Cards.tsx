import { Flex } from "@chakra-ui/react";
import StatusCard from "./StatusCard";

const Cards = () => {
  return (
    <Flex
      h={"100%"}
      w={"100%"}
      justifyContent={"space-between"}
      gap={3}
      flexWrap={"wrap"}
    >
      <StatusCard
        title="Patients"
        icon="/user-multiple.svg"
        color="primary.2"
        value="1,500"
        positive={true}
        percentage={50}
      />
      <StatusCard
        title="Diagnoses"
        icon="/injection.svg"
        color="red.2"
        value="1,500"
        positive={false}
        percentage={12.5}
      />
      <StatusCard
        title="Appointments"
        icon="/calendar.svg"
        color="green.2"
        value="250"
        positive={true}
        percentage={25}
      />
      <StatusCard
        title="Tasks"
        icon="/note.svg"
        color="orange.2"
        value="10"
        positive={false}
        percentage={10}
      />
    </Flex>
  );
};

export default Cards;
