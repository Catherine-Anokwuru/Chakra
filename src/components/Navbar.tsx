"use client";

import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Box
      h={"4.5rem"}
      maxW={"90rem"}
      zIndex={10}
      bg={"white"}
      w={"100%"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        w={"100%"}
        height={"100%"}
        px={"1.5rem"}
      >
        <Box minW={"3rem"} display={"inline-block"}>
          <Link>
            <Image
              alt="logo"
              src={"/assets/bolt.svg"}
              display={{ md: "none" }}
              h={"2rem"}
              w={"auto"}
              bg={"transparent"}
            />
            <Image
              alt="logo"
              src={"/assets/chakra.svg"}
              display={{ md: "flex", base: "none" }}
              alignItems={{ md: "center" }}
              justifyContent={{ md: "center" }}
              me={{ md: "1rem" }}
              h={"2rem"}
              w={"auto"}
              bg={"transparent"}
            />
          </Link>
        </Box>
        <Flex>
          
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
