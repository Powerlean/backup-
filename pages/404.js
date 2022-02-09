import NextLink from "next/link";
import React from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Image
} from "@chakra-ui/react";
import { IoBalloonSharp } from "@chakra-ui/io5";



const NotFound = () => {
  return (
    <Container>
      <Box align="center" mt={20}>
        <Image alt="notfound" src="/images/bak.png" width={360} height={330} />
       <Heading fontFamily="sans-serif" fontSize="2xl" fontWeight="bold">嚄...好像迷路囉？</Heading>

       <h2>您所尋訪的資訊不存在亦或無訪問權限。</h2>  
</Box>
      <Box my={6} align="center">
        <NextLink href="/">

          <Button colorScheme="gray"><IoBalloonSharp />返回主頁</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
