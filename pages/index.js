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
  <Image src='/images/bg.png' alt="logo" rounded="md" my={4} />
      <Stat mt={6} mb={5}>
        <StatNumber>MeMeCat</StatNumber>
        <StatHelpText>( VI设计 / 平面设计 )</StatHelpText>
      </Stat>

      <Text fontSize="md" mb={3}>
        设计赋予世界活力。
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
        业务范围
      </Badge>
      <UnorderedList>
        <ListItem mt={3}>网页，应用UI</ListItem>
        <ListItem mt={3}>VI识别系统设计...</ListItem>
        
    
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
        友情链接
      </Badge>
      <UnorderedList>
        <ListItem mt={3}>
          <Link href="https://www.wll.moe/" isExternal>
            Willie Xu
          </Link>
        </ListItem>
        <ListItem mt={3}>
          <Link href="https://t.me/sunndesign" isExternal>
            MeMeCatの设计方案
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  </Container>
);

export default Home;
