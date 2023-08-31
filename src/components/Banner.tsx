"use client";

import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";

const Banner: React.FC = () => {
  return (
    <Box
      bgGradient="linear(to-r, #0987a0, #805ad5)"
      color="white"
      display={"flex"}
      pt={"0.5rem"}
      pb={"0.5rem"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      px={"0.75rem"}
      fontSize={"0.875rem"}
    >
      <Text fontWeight={500} fontSize={"0.875rem"} maxWidth={"32ch"}   maxW={{md:'unset'}}>
        Build faster with Premium Chakra UI Components 💎
      </Text>
      <Link
        href="https://pro.chakra-ui.com/?utm_source=chakra-ui.com&utm_medium=ad-banner/"
        bg={"rgba(0, 0, 0, 0.16)"}
        fontWeight={600}
        pt={"0.25rem"}
        pb={"0.25rem"}
        px={"0.75rem"}
        ms={"1.5rem"}
        color={"rgba(255, 255, 255, 0.92)"} _hover={{textDecoration:'none'}} borderRadius={'0.25rem'}
        flexShrink={0}

      >
        Learn More
      </Link>
    </Box>
  );
};
export default Banner;
