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
import notfound from '/images/404bak.png';




const NotFound = () => {
  return (
    <Container>
      <Box align="center">
          <Divider my={9} />
          <Text> 404 </Text>
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
