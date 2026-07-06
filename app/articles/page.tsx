import Layout from "@/components/base/Layout";
import AnimatedText from "@/components/base/AnimatedText";
import TransitionEffect from "@/components/base/TransitionEffect";
import { getAllArticlesMeta } from "@/lib/mdx";
import ArticlesClient from "./ArticlesClient";

export const metadata = {
  title: "Articles | ADANDE Appolinaire",
  description: "Découvrez mes articles sur l'ingénierie logicielle, le DevOps, l'IA embarquée et la construction de produits concrets.",
};

export default async function ArticlesPage() {
  const articles = await getAllArticlesMeta();

  // On sépare les articles "Featured" (les 2 premiers) et les autres
  const featuredArticles = articles.slice(0, 2);
  const regularArticles = articles.slice(2);

  return (
    <div className="flex flex-col justify-center items-center">
      <TransitionEffect />
      <Layout className="py-16">
        <AnimatedText 
          text="Ingénierie, Architecture & Code pragmatique." 
          className="mb-14 max-lg:!text-7xl max-sm:mb-8 max-sm:!text-6xl max-xs:!text-4xl" 
        />

        <ArticlesClient featuredArticles={featuredArticles} regularArticles={regularArticles} />
        
      </Layout>
    </div>
  );
}

