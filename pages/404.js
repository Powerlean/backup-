import NextLink from "next/link";

import {
  Box,
  Heading,
  Container,
  Button,
  Image
} from "@chakra-ui/react";




const NotFound = () => {
  return (
    <Container>
      <Box align="center" mt={20}>
        <Image alt="notfound" src="/images/404.png" width={360} height={330} />
       <Heading fontFamily="sans-serif" fontSize="2xl" fontWeight="bold">嚄...好像迷路囉？</Heading>

       <h2>我们好像迷路了？</h2>  
</Box>
      <Box my={6} align="center">
        <NextLink href="/">

          <Button colorScheme="gray">返回主页</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
