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
} from "@chakra-ui/react";

import Image from 'next/image';


const Home = () => (
  <Container>
    <Box mt={10} mb={6} p={6}>
      <Stat mt={6} mb={5}>
<Image alt="back logo" src="/images/logo_winter.png" width={1955} height={1080} />
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
        <ListItem mt={3}>
          <Link href="https://anillc.cn" isExternal>
            Anillc
          </Link>
        </ListItem>
        <ListItem mt={3}>
          <Link href="https://www.chinq.xyz" isExternal>
            CHINQ
          </Link>
        </ListItem>
        <ListItem mt={3}>
          <Link href="https://ncdwlq.space" isExternal>
            NCDWLQ
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  </Container>
);

export default Home;
