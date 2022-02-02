import {
  Badge,
  Box,
  chakra,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  shouldForwardProp,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {motion} from "framer-motion";
import distanceToNow from "../lib/daterelative";

const BlogPost = ({ title, content, date, excerpt, slug }) => {
  const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => {
      return shouldForwardProp(prop) || prop === "transition";
    },
  });

  const Excerpt = ({ children }) => (
    <Text color={useColorModeValue("gray.600", "gray.400")}>{children}</Text>
  );

  const Section = ({ children, delay = 0 }) => (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay:0.2 }}
      mb={6}
      mt={5}
    >
      {children}
    </StyledDiv>
  );

  return (
    <Section>
      <NextLink href={`posts/${slug}`} passHref>
        <LinkBox p={3} borderWidth="1px" rounded="md">
          <Box as="time">
            <Badge>{distanceToNow(new Date(date))}</Badge>
          </Box>
          <Heading size="md" my="2" fontFamily="inherit" fontWeight="normal">
            <LinkOverlay>
              <Link>{title}</Link>
            </LinkOverlay>
          </Heading>
          <Excerpt>{excerpt}</Excerpt>
        </LinkBox>
      </NextLink>
    </Section>
  );
};

export default BlogPost;
