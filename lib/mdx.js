import fs from "fs";
import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize";
import path from "path";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "_posts", type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "_posts", type, `${slug}.mdx`), "utf-8")
    : fs.readFileSync(path.join(root, "_posts", `${type}.mdx`), "utf-8");

  const { data: metaData, content } = matter(source);
  const contentSerialized = await serialize(content);

  return {
    content,
    contentSerialized,
    slug: slug ? slug : null,
    metaData,
  };
}



export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "_posts", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "_posts", type, postSlug),
      "utf-8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
