import {MDXRemote} from "next-mdx-remote";
import {motion} from "framer-motion";
import Head from "next/head";
import {Badge, Container, Heading, Text, useColorModeValue} from "@chakra-ui/react";
import MDXComponents from "../../components/MDXComponents";
import {getFileBySlug, getFiles} from "../../lib/mdx";
import distanceToNow from "../../lib/daterelative";
import { TimeIcon } from "@chakra-ui/icons"



const postanimate = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const Layout = ({ children }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={postanimate}
    transition={{ duration: 0.4, type: "easyInOut" }}
  >
    {children}
  </motion.article>
);

const BlogPost = ({ post }) => {
  const { metaData, contentSerialized } = post;
  return (
    <Container mt={10} mb={100} maxWidth={"container.md"}>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.content} />
      </Head>
      <Layout>
        <Heading
          fontWeight="normal"
          fontSize="4xl"
          mt={5}
          mb={2}
          fontFamily="inherit"
        >
          {metaData.title}

        </Heading>

        <Badge mb={4}>
          <time><TimeIcon /> {distanceToNow(new Date(metaData.date))}</time>
        </Badge>
<Text color={useColorModeValue('gray.600','gray.300')} fontSize="sm" mb={20}>
  {metaData.excerpt}
</Text>
        <MDXRemote
          components={MDXComponents}
          compiledSource={contentSerialized.compiledSource}
        />
      </Layout>
    </Container>
  );
};

export default BlogPost;

export const getStaticPaths = async () => {
  const posts = await getFiles("");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  if (slug) {
    try {
      const post = await getFileBySlug("", slug);
      return {
        props: {
          post,
        },
      };
    } catch (error) {
      console.error(error);
    }
  }

  return {
    notFound: true,

  };
};