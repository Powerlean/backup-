import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";
import Image from 'next/image';
import notfound from '/images/404.png';

h1 {
  font-weight: 400;
}

const NotFound = () => {
  return (
    <Container>
      <Box align="center">
          <Divider my={9} />
          <h1>404</h1>
        <Text> 嚄...好像迷路囉？ </Text>
        <Divider my={6} />
<Image alt="notfound" src={notfound} width={400} height={400} />
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
