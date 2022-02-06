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
h1{
    font-size: 80px;
    font-weight: 900;
}
        <Heading as="h1" mt={9}>
          404
        </Heading>
        <Text> 查無此頁 </Text>
        <Divider my={6} />
      </Box>
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="gray">返回主頁</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
