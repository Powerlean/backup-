import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  Image
} from "@chakra-ui/react";



const NotFound = () => {
  return (
    <Container>
      <Box align="center" mt={20}>
        <Image alt="notfound" src="/images/bak.png" width={360} height={330} />
       <Heading fontFamily="serif" fontSize="2xl" fontWeight="bold">嚄...好像迷路囉？</Heading>
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
