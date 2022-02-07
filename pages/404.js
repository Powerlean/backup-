import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Image
} from "@chakra-ui/react";



const NotFound = () => {
  return (
    <Container>
      <Box align="center" mt={20}>
          <Divider my={9} />

    <Heading fontFamily="inherit" fontSize="3xl" fontWeight="bold">404</Heading>
    

        <Text mt={2}> 嚄...好像迷路囉？ </Text>
        <Divider my={6} />
<Image alt="notfound" src="/images/bak.png" width={400} height={400} />
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
