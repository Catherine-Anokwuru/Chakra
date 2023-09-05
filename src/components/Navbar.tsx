"use client";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Kbd,
  Link,
  Text,
  Select,
} from "@chakra-ui/react";
import {
  FaBars,
  FaDiscord,
  FaGithub,
  FaHeart,
  FaMoon,
  FaYoutube,
} from "react-icons/fa";

const Navbar: React.FC = () => {

  return (
    <Box
      id="nav"
      className="navbar"
      h={"4.5rem"}
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
        maxW={"90rem"}
        mx={"auto"}
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
        <Flex
          display={{ sm: "flex" }}
          alignItems={{ sm: "center" }}
          justifyContent={{ sm: "flex-end" }}
          w={{ sm: "100%" }}
          color={{ sm: "#a0aec0" }}
          maxW={{ sm: "1100px" }}
        >
          <Button
            display={{ base: "none", sm: "flex" }}
            flex={1}
            bg={"white"}
            mx={"1.5rem"}
            px={"1rem"}
            alignItems={"center"}
            py={"0.75rem"}
            p={"1rem"}
            pl={"1rem"}
            w={"100%"}
            lineHeight={1.2}
            color={"#4a5568"}
            outline={"2px solid transparent"}
            outlineOffset={"2px"}
            border={"none"}
            whiteSpace={"nowrap"}
            boxShadow={
              " 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
            }
            borderRadius={"0.375"}
          >
            <SearchIcon
              w={"1.2rem"}
              h={"1rem"}
              display={"inline-block"}
              lineHeight={"1em"}
              verticalAlign={"middle"}
              fontWeight={100}
              color={"#718096"}
            />
            <Flex
              alignItems={"center"}
              flexDirection={"row"}
              gap={"4px"}
              w={"100%"}
              ml={"0.75rem"}
            >
              <Text textAlign={"left"} flex={1} fontSize={"16px"}>
                Search the docs
              </Text>
              <Flex
                alignItems={"center"}
                flexDirection={"row"}
                gap={"4px"}
              >
                <span>
                  <Kbd borderRadius={"2px"}>
                    <abbr
                      title="Control"
                      style={{ textDecoration: "none" }}
                    >
                      Ctrl
                    </abbr>
                  </Kbd>
                </span>
                <span>
                  <Kbd borderRadius={"2px"}>K</Kbd>
                </span>
              </Flex>
            </Flex>
          </Button>
          <Flex
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Box
              display={{ base: "none", md: "flex" }}
              h={"fit-content"}
              w={"auto"}
              flexShrink={0}
            >
              <Select defaultValue={'v2.8.0'}
                aria-label="Select the Chakra UI Docs version. You're currently viewing the version v2.8.0 docs"
                variant="unstyled"
                fontSize={"1rem"}
                border={"none"}
                color={"#4a5568"}
                pe={"0.5rem"}
                mr={"0.75rem"}
                fontWeight={600}
                h={"auto"}
                w={"100%"}
              >
                <option value="https://chakra-ui.com" >
                  v2.8.0
                </option>
                <option value="https://v1.chakra-ui.com">
                  v1.8.8
                </option>
                <option value="https://v0.chakra-ui.com">
                  v0.8.x
                </option>
              </Select>
            </Box>
            <Box
              display={{ base: "none", md: "flex" }}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              gap={"1.25rem"}
              w={"100%"}
            >
              <Link
                w={"1.25rem"}
                h={"1.25rem"}
                fontSize={"1.25rem"}
                color={"#a0aec0"}
              >
                <FaGithub />
              </Link>
              <Link
                w={"1.25rem"}
                h={"1.25rem"}
                fontSize={"1.25rem"}
                color={"#a0aec0"}
              >
                <FaDiscord />
              </Link>
              <Link
                w={"1.25rem"}
                h={"1.25rem"}
                fontSize={"1.25rem"}
                color={"#a0aec0"}
              >
                <FaYoutube />
              </Link>
            </Box>
            <Flex
              alignItems={"center"}
              justifyContent={"flex-end"}
              w={"100%"}
              maxW={"1100px"}
              color={"#a0aec0"}
              flexDirection={"row"}
              gap={{ base: "0rem", lg: "1.25rem" }}
            >
              <Button
                px={"1rem"}
                bg={"transparent"}
                border={"none"}
                alignItems={"center"}
                ml={{ md: "0.5rem", lg: "0.75rem" }}
                h={{ lg: "1.125rem" }}
                outlineOffset={"2px"}
                outline={"2px"}
              >
                <FaMoon
                  color={"#a0aec0"}
                  style={{
                    fontSize: "1.25rem",
                    height: "1em",
                    width: "1em",
                  }}
                />
              </Button>
              <Button
                variant="ghost"
                display={{ md: "none" }}
                h={"2.5rem"}
                outlineOffset={"2px"}
                outlineColor={"transparent"}
                verticalAlign={"middle"}
              >
                <FaBars />
              </Button>
              <Link
                display={{ base: "none", lg: "flex" }}
                alignItems={"center"}
                bg={"#f7fafc"}
                border={"1px"}
                borderColor={"#e2e8f0"}
                textDecoration={"none"}
                px={"1em"}
                fontSize={"0.875rem"}
                borderRadius={"0.375rem"}
                color={"#1a202c"}
                ml={"1.25rem"}
                h={"36px"}
              >
                <FaHeart
                  color={"#E53E3E"}
                  w={"1rem"}
                  h={"1rem"}
                  lineheight={"1rem"}
                />
                <strong style={{ marginLeft: "0.5rem" }}>
                  Sponsor
                </strong>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
