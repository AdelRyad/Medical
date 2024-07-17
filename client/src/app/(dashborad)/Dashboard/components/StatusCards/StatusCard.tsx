import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

interface StatusCardProps {
  title: string;
  icon: string;
  color: string;
  value: string;
  positive: boolean;
  percentage: number;
}

const StatusCard: FC<StatusCardProps> = ({
  title,
  icon,
  color,
  value,
  positive,
  percentage,
}) => {
  return (
    <Card
      flex={1}
      h={{ base: "max-content", lg: "100%" }}
      border={"1px solid "}
      borderColor={"secondary.2"}
      rounded={"8"}
      boxShadow={"none"}
      minW={{ base: "100%", md: "45%", lg: "0" }}
    >
      <CardHeader
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={3}
      >
        <Text fontSize={"lg"} fontWeight={"medium"} color={"neutral.2"}>
          {title}
        </Text>
        <Image
          src={icon}
          alt={title}
          p={2}
          bg={color}
          rounded={"4"}
          w={"44px"}
        />
      </CardHeader>
      <CardBody display={"flex"} alignItems={"center"} flexWrap={"wrap"} p={3}>
        <Text fontSize={"x-large"} fontWeight={"bold"} color={"neutral.3"}>
          {value}
        </Text>
        <Flex alignItems={"center"} gap={1} ml={3}>
          <Text
            fontSize={"x-large"}
            color={positive ? "green.1" : "orange.1"}
            transform={positive ? "rotate(90deg)" : "rotate(-90deg)"}
            fontWeight={"medium"}
          >
            &#171;
          </Text>
          <Text color={positive ? "green.1" : "orange.1"} fontWeight={"medium"}>
            {percentage}%
          </Text>
        </Flex>
        <Text w={"100%"} color={"neutral.2"} fontSize={"sm"}>
          Compared to last week
        </Text>
      </CardBody>
    </Card>
  );
};

export default StatusCard;
