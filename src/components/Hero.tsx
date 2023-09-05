"use client";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <>
    <Box pt={"6rem"} bg={"#ffffff"}>
      <Box
        pt={"0.75rem"}
        pb={"3rem"}
        px={{ base: "1.5rem", md: "2rem" }}
        w={"100%"}
        maxW={{ base: "36rem", md: "80rem" }}
        mx={"auto"}
        textAlign={"center"}
      >
        <Heading
          as={"h1"}
          fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
          mx={"auto"}
          letterSpacing={"-0.05em"}
          fontWeight={800}
          lineHeight={1.2}
          mb={"16px"}
          maxWidth={"16ch"}
          color={"#2d3748"}
          fontFamily={"Inter, sans-serif"}
        >
          Create accessible React apps{" "}
          <Text as={"span"} color={"#319795"}>
            with speed
          </Text>
        </Heading>
        <Text
          color={"#718096"}
          fontSize={{ base: "1.125rem", lg: "1.25rem" }}
          mt={"1.5rem"}
          maxW={"560px"}
          mx={"auto"}
        >
          Chakra UI is a simple, modular and accessible component
          library that gives you the building blocks you need to build
          your React applications.
        </Text>
        <Flex
          justifyContent={"center"}
          flexDirection={{ base: "column", sm: "row" }}
          gap={"1rem"}
          mt={"2.5rem"}
        >
          <Link
            minW={"3rem"}
            minH={{ sm: "3rem" }}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"0.375rem"}
            fontWeight={600}
            bg={"#319795"}
            color={"#ffffff"}
            height={"4rem"}
            fontSize={"1.2rem"}
            textDecoration={"none"}
            whiteSpace={{ sm: "nowrap" }}
            px={{ sm: "40px" }}
            lineHeight={{ base: 1.2 }}
          >
            Get Started{" "}
            <Text
              as={"span"}
              display={"inline-flex"}
              alignSelf={"center"}
              marginInlineStart={"0.5rem"}
            >
              <FaArrowRight />
            </Text>
          </Link>
          <Link
            href="https://github.com/chakra-ui/chakra-ui/"
            target="blank"
            minW={"3rem"}
            minH={{ sm: "3rem" }}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"0.375rem"}
            fontWeight={600}
            bg={"#edf2f7"}
            color={"#1a202c"}
            height={"4rem"}
            fontSize={"1.2rem"}
            textDecoration={"none"}
            whiteSpace={{ sm: "nowrap" }}
            px={{ sm: "40px" }}
            lineHeight={{ base: 1.2 }}
          >
            <Text
              as={"span"}
              display={"inline-flex"}
              alignSelf={"center"}
              marginInlineEnd={"0.5rem"}
            >
              <FaGithub h={'1.5em'} w={'1.5em'}/>
            </Text>
            Github
          </Link>
        </Flex>
        <Box
          mt={"70px"}
          borderRadius={"0.75rem"}
          bg={"#f0fff4"}
          boxShadow={"base"}
          h={"5.5rem"}
          display={"inline-flex"}
          alignItems={"center"}
          justifyContent={"center"}
          px={"1.5rem"}
          paddingLeft={"24px"}
          paddingRight={"24px"}
          py={"1rem"}
          mx={"auto"}
        >
          <Image
            src="/assets/git-nation-badge.png"
            alt="Git Nation React Award"
            w={"100%"}
            h={"100%"}
            maxW={"100%"}
            objectFit={"contain"}
          />
        </Box>
      </Box>
    </Box>
      <Divider orientation='horizontal' />
  </>
  );
};
export default Hero;
