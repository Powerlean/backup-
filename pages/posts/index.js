import dynamic from "next/dynamic";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
    useColorModeValue
} from "@chakra-ui/react";
import React, { useState } from "react";
const BlogPost = dynamic(() => import("../../components/BlogPost"));
import { getAllFilesFrontMatter } from "../../lib/mdx";

const Blog = ({ posts }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container>
      <Box mt={10} mb={6} p={5}>
        <Heading fontSize="3xl" fontFamily="inherit" fontWeight="normal" color={useColorModeValue('gray.600','gray.300')} mb={4}>
          PostList
        </Heading>

        <InputGroup mb={10}>
          <Input
            aria-label="Search by post title"
            placeholder="Posts ..."
            onChange={(e) => setSearchValue(e.target.value)}
            _focus={{ borderWidth: "0.0625rem" }}
          />
          <InputRightElement  zIndex={0} >
            <SearchIcon opacity="0.6" />
          </InputRightElement>
        </InputGroup>
        {!filteredBlogPosts.length && (
          <Box my={4}>No posts found, try searching for something else.</Box>
        )}
        {filteredBlogPosts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </Box>
    </Container>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter("");

  return {
    props: {
      posts,
    },
  };
};
