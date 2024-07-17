"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Flex, Link, Text, Image } from "@chakra-ui/react";

interface SideBarLinkProps {
  title: string;
  icon: string;
}

const SideBarLink: FC<SideBarLinkProps> = ({ title, icon }) => {
  const pathname = usePathname();
  const isActive = pathname === `/${title}`;

  return (
    <Link
      as={NextLink}
      href={`/${title}`}
      p={3}
      color={isActive ? "primary.1" : "neutral.3"}
      background={isActive ? "primary.2" : "transparent"}
      _hover={{
        background: !isActive && "secondary.1",
      }}
      borderRadius={8}
    >
      <Flex
        gap={3}
        alignItems="center"
        justifyContent={{ base: "center", xl: "flex-start" }}
      >
        <Image
          src={icon}
          alt={title}
          filter={isActive ? "grayscale(0%)" : "grayscale(100%)"}
          width={25}
        />
        <Text
          fontSize={{ md: "12px", lg: "16px" }}
          display={{ base: "none", xl: "block" }}
        >
          {title}
        </Text>
      </Flex>
    </Link>
  );
};

export default SideBarLink;
