import {
  Alert,
  Box,
  chakra,
  Divider,
  Heading, Link, OrderedList,
  Text, UnorderedList,
  ListItem,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";

const ChakraHighlight = chakra(Highlight, {
  shouldForwardProp: (prop) =>
      ["Prism", "theme", "code", "language", "children"].includes(prop),
});
const CustomImage = (props) =>{
  const src = props.src;
  return (
      <Image src={src} borderRadius="lg" filter={useColorModeValue('brightness(70%)', 'brightness(0%)')} {...props}/>
  )}
const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: '#587bae',
    dark: 'cyan.100',
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
        <NextLink href={href} passHref>
          <Link color={color[colorMode]} {...props} />
        </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};


const Quote = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "gray.100",
    dark: "#2d2d2d",
  };

  return (
      <Alert
          mt={4}
          w="98%"
          bg={bgColor[colorMode]}
          borderLeftColor="gray.400"
          variant="left-accent"
          status="info"
          css={{
            "> *:first-of-type": {
              marginTop: 0,
              marginLeft: 8,
            },
          }}
          {...props}
      />
  );
};

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const CodeHighlight = ({ children: codeString, className: language }) => {
  language = language.replace("language-", "");
  const theme = useColorModeValue(lightTheme, darkTheme);
  const lineNumberColor = useColorModeValue("blackAlpha.500", "whiteAlpha.500");
  const preBackground = useColorModeValue("gray.100", "gray.900");
  const showLineNumbers = !["shell", "text"].includes(language);

  return (
      <ChakraHighlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
          tokens.pop();
          return (
              <div data-language={className}>
                <chakra.pre
                    className={className}
                    sx={{ ...style, backgroundColor: preBackground }}
                    overflowX="auto"
                    rounded="md"
                    p={4}
                    mx={-4}
                >
                  {tokens.map((line, i) => {
                    const lineProps = getLineProps({ line, key: i });
                    return (
                        <chakra.div {...lineProps} display="table-row" key={i}>
                          {showLineNumbers && (
                              <chakra.span
                                  w={8}
                                  display="table-cell"
                                  textAlign="right"
                                  userSelect="none"
                                  color={lineNumberColor}
                                  pr={3}
                              >
                                {i + 1}
                              </chakra.span>
                          )}
                          {line.map((token, key) => {
                            return (
                                <chakra.span
                                    {...getTokenProps({ token, key })}
                                    key={`${i}.${key}`}
                                />
                            );
                          })}
                        </chakra.div>
                    );
                  })}
                </chakra.pre>
              </div>
          );
        }}
      </ChakraHighlight>
  );
};

const InlineCode = (props) => (
    <chakra.code
        apply="mdx.code"
        color={useColorModeValue("gray.600", "blue.200")}
        bg={useColorModeValue("gray.50", "whiteAlpha.200")}
        px={1}
        py={0.5}
        rounded={{ base: "md", md: "lg" }}
        {...props}
    />
);

const MDXComponents = {
  code: CodeHighlight,
  inlineCode: InlineCode,
  h1: (props) => (
      <Heading
          as="h1"
          fontSize="10xl"
          pb={0.5}
          fontWeight="normal"
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
          borderBottomWidth="2px"
          mb={5}
          mt={10}
          {...props}
      />
  ),
  h2: (props) => (
      <Heading
          as="h2"
          fontSize="2xl"
          pb={0.5}
          fontWeight="normal"
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
          borderBottomWidth="1px"
          mb={4}
          mt={6}
          {...props}
      />
  ),
  h3: (props) => (
      <Heading
          as="h3"
          fontSize="xl"
          pb={0.5}
          fontWeight="normal"
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
          borderBottomWidth="1px"
          mb={3}
          mt={3}
          {...props}
      />
  ),
  h4: (props) => (
      <Heading
          as="h4"
          fontSize="lg"
          {...props}
          pb={0.5}
          fontWeight="normal"
          font-family="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
          borderBottomWidth="2px"
          mb={2}
          mt={2}
      />
  ),
  br: (props) => <Box height="24px" {...props} />,
  hr: Hr,
  a: CustomLink,
  p: (props) => (
      <Text
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
          mt={2}
          mb={4}
          lineHeight={1.5}
          letterSpacing={1}
          {...props}
      />
  ),
  ul: (props) => <UnorderedList as="ul" lineHeight="1.75" pt={2} pl={4}  mt={4} mb={4} {...props} />,
  ol: (props) => <OrderedList as="ol" lineHeight="1.75" pt={2} pl={6}  mt={4} mb={4} {...props} />,
  li: (props) => <ListItem as="li"  {...props} />,
  blockquote: Quote,
  img: CustomImage,
};

export default MDXComponents;
