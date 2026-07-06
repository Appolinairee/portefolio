import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const root = process.cwd();
const articlesDirectory = path.join(root, "content", "articles");

export type ArticleMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  img: string;
  tags: string[];
  readingTime: string;
};

export async function getArticleBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(articlesDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    meta: {
      ...data,
      slug: realSlug,
      readingTime: readingTime(content).text,
    } as ArticleMeta,
    content,
  };
}

export async function getAllArticlesMeta(): Promise<ArticleMeta[]> {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  const files = fs.readdirSync(articlesDirectory);

  const articles = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fullPath = path.join(articlesDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = file.replace(/\.mdx$/, "");

      return {
        ...data,
        slug,
        readingTime: readingTime(content).text,
      } as ArticleMeta;
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return articles;
}
