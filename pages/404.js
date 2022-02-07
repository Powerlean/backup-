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
   
    <Heading fontFamily="Georgia" fontSize="8xl" fontWeight="bold">404</Heading>
    

        <Text mt={2}> 嚄...好像迷路囉？ </Text>
        <Divider my={6} />
<Image alt="notfound" src="/images/bak.png" width={360} height={335} />
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
