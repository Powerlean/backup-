import {
  Container,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Badge,
  Text,
  Code,
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
        <StatLabel>我是</StatLabel>
        <StatNumber>SUNN</StatNumber>
         
        <StatHelpText>( 自動化開發 / 平面設計 )</StatHelpText>
      </Stat>

      <Text fontSize="md" mb={3}>
        Yes,I am a graphic designer!
      </Text>
      <Text fontSize="md" mb={3}>
        站點始建於 <Code> 公元二零二二年，二月二日 </Code>
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
        主要作業
      </Badge>
      <UnorderedList>
        <ListItem mt={3}>Shell script 程式編寫</ListItem>
        <ListItem mt={3}>商標、海報等平面設計</ListItem>
        
    
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
          <Link href="https://chakra-blog.vercel.app/" isExternal>
            Willie Xu
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  </Container>
);

export default Home;
