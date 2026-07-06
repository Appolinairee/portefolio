import { getArticleBySlug, getAllArticlesMeta } from "@/lib/mdx";
import Layout from "@/components/base/Layout";
import AnimatedText from "@/components/base/AnimatedText";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import ExplainWithAI from "@/components/articles/ExplainWithAI";

// Fonction pour générer les params statiquement à la compilation
export async function generateStaticParams() {
  const articles = await getAllArticlesMeta();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const { meta } = await getArticleBySlug(slug);
    return {
      title: `${meta.title} | ADANDE Appolinaire`,
      description: meta.summary,
      openGraph: {
        title: meta.title,
        description: meta.summary,
        type: "article",
        publishedTime: meta.date,
        authors: ["ADANDE Appolinaire"],
      },
    };
  } catch (e) {
    return {
      title: "Article introuvable",
    };
  }
}

// Composants personnalisés pour le rendu MDX (style Tailwind)
const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl font-bold mt-8 mb-4 dark:text-light" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mt-10 mb-4 dark:text-light border-b border-gray-200 dark:border-gray-700 pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mt-6 mb-3 dark:text-light" {...props} />,
  p: (props: any) => <p className="mb-6 text-lg leading-relaxed dark:text-light/75" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-8 mb-6 text-lg dark:text-light/75" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-8 mb-6 text-lg dark:text-light/75" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  a: (props: any) => <a className="text-primary hover:underline font-medium" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-xl dark:text-light/75 bg-gray-50 dark:bg-gray-800/50 py-3 pr-4 rounded-r-lg" {...props} />,
  code: (props: any) => {
    // Différencier code inline et bloc de code
    const isInline = typeof props.children === 'string' && !props.children.includes('\n');
    if (isInline) {
      return <code className="bg-gray-200 dark:bg-gray-800 text-primary px-1.5 py-0.5 rounded text-sm font-mono break-all" {...props} />;
    }
    return <code className="block text-sm font-mono whitespace-pre" {...props} />;
  },
  pre: (props: any) => <pre className="my-6 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto w-full max-w-full p-4" {...props} />,
  strong: (props: any) => <strong className="font-bold dark:text-light" {...props} />,
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  let meta;
  let content;

  try {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);
    meta = article.meta;
    content = article.content;
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "headline": meta.title,
              "description": meta.summary,
              "image": `https://adandeappolinaire.me${meta.img}`,
              "datePublished": meta.date,
              "author": {
                "@type": "Person",
                "name": "ADANDE Appolinaire",
                "url": "https://adandeappolinaire.me"
              },
              "publisher": {
                "@type": "Person",
                "name": "ADANDE Appolinaire",
                "url": "https://adandeappolinaire.me"
              }
            })
          }}
        />
        <Layout className="pt-16 pb-32">
          
          <div className="mb-12">
            <Link 
              href="/articles" 
              className="group inline-flex items-center text-dark/60 dark:text-light/60 font-medium hover:text-primary dark:hover:text-primary transition-colors duration-200"
            >
              <span className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
              Retour aux articles
            </Link>
          </div>

          <article className="max-w-4xl mx-auto w-full min-w-0">
            <header className="mb-12 text-center">
              
              <AnimatedText 
                text={meta.title} 
                className="!text-5xl max-md:!text-4xl max-sm:!text-3xl text-center mb-6" 
              />
              
              <div className="flex items-center justify-center gap-4 dark:text-light/75 font-medium flex-wrap">
                <time dateTime={meta.date}>
                  {new Date(meta.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span>•</span>
                <span>{meta.readingTime}</span>
                <span>•</span>
                <ExplainWithAI title={meta.title} />
              </div>
            </header>

            <div className="w-full h-[400px] sm:h-[500px] relative rounded-2xl overflow-hidden mb-16 shadow-lg border border-gray-200 dark:border-gray-800">
              <Image 
                src={meta.img} 
                alt={meta.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote source={content} components={mdxComponents} />
            </div>
          </article>
          
        </Layout>
      </main>
    );
}
