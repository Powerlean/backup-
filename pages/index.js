import {
  Container,
  Box,
  Stat,
  StatNumber,
  StatHelpText,
  Badge,
  Text,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Image
} from "@chakra-ui/react";




const Home = () => (
  <Container>
    <Box mt={10} mb={6} p={6}>
  <Image src='/images/about.png' alt="logo" rounded="md" my={4} />
      <Stat mt={6} mb={5}>
        <StatNumber>SUNN</StatNumber>
        <StatHelpText>( UI設計 / 平面設計 )</StatHelpText>
      </Stat>

      <Text fontSize="md" mb={3}>
        Looking for an excellent graphic designer? You found!
      </Text>
    </Box>

    <Box
      mt={10}
      mb={6}
      p={6}
      bg={useColorModeValue("#edf2f780", "#2d2d2d")}
      borderRadius="lg"
    >
      <Badge mt={4} mb={7}>
        主要業務
      </Badge>
      <UnorderedList>
        <ListItem mt={3}>網頁、應用程式UI</ListItem>
        <ListItem mt={3}>商標、Logos等平面設計</ListItem>
        
    
      </UnorderedList>
    </Box>

    <Box
      mt={10}
      mb={6}
      p={6}
      bg={useColorModeValue("#edf2f780", "#2d2d2d")}
      borderRadius="lg"
    >
      <Badge mt={4} mb={7}>
        友情連結
      </Badge>
      <UnorderedList>
        <ListItem mt={3}>
          <Link href="https://www.wll.moe/" isExternal>
            Willie Xu
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  </Container>
);

export default Home;
