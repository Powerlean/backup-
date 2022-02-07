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
import icon404 from '/images/404.png';

const NotFound = () => {
  return (
    <Container>
      <Box align="center">
      <Image alt="icon404" src={icon404} width={1500} height={1500} />
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
