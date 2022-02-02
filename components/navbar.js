import Logo from "./logo";
import NextLink from "next/link";
import React from "react";
import {
  Container,
  Box,
  Heading,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { IoLogoGithub } from "react-icons/io5";

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.500", "#949494");
  const bgColor = useColorModeValue("#f1f1f180", "#38383880");
  const LinkColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? bgColor : undefined}
        color={active ? LinkColor : inactiveColor}
        borderRadius="lg"
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff80", "20202380")}
      zIndex={1}
      css={{ backdropFilter: "blur(10px)" }}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 1.5 }}
        >
          <LinkItem href="/" path={path}>
            About
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/lab" path={path}>
            Lab
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/7ity/homepage"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                _focus={{ boxShadow: "0" }}
                borderRadius="lg"
              />
              <MenuList bg={useColorModeValue("whiteAlpha.900", "#2d2d2d")}>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Post</MenuItem>
                </NextLink>
                <NextLink href="/lab" passHref>
                  <MenuItem as={Link}>Lab</MenuItem>
                </NextLink>
                <NextLink
                  href="https://github.com/7ity/homepage"
                  _target="_blank"
                >
                  <MenuItem as={Link}>Source</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
