import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container>
      <Box align="center">
        <Heading as="h1" mt={6}>
          Not found
        </Heading>
        <Text> 404 </Text>
        <Divider my={6} />
      </Box>
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="gray">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
