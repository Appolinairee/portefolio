"use client";

import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArticleMeta } from "@/lib/mdx";

const FeaturedArticle = ({ title, summary, img, link, time }: { title: string; summary: string; img: string; link: string; time: string; }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-dark bg-light p-6 relative rounded-br-3xl dark:bg-dark dark:text-light dark:border-light max-md:p-2 h-full">
            <div className="absolute top-0 -right-2 -z-10 w-[101%] h-[102%] rounded-4xl bg-dark rounded-br-3xl cursor-pointer" />

            <Link
                href={link}
                className="w-full overflow-hidden rounded-lg mb-4 h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
            >
                <motion.img src={img} alt={title} className="object-cover w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
            </Link>

            <div className="w-full flex flex-col items-start justify-between flex-grow pl-2">
                <Link
                    href={link}
                    className="hover:underline underline-offset-2 transition-underline ease duration-100"
                >
                    <h2 className="w-full my-2 text-left text-2xl font-bold max-xs:text-sm">
                        {title}
                    </h2>
                </Link>
                <p className="dark:text-light/75 text-[14px] mb-4 flex-grow">{summary}</p>

                <span className="text-primary font-medium text-12 max-sm:text-sm">{time}</span>
            </div>
        </article>
    );
};

const MovingImage = ({ title, img, link }: { title: string; img: string; link: string; }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef<HTMLImageElement>(null);

    function handleMouse(event: React.MouseEvent) {
        if (imgRef.current) {
            imgRef.current.style.display = "inline-block";
            x.set(event.pageX);
            y.set(-10);
        }
    }

    function handleLeave() {
        if (imgRef.current) {
            imgRef.current.style.display = "none";
            x.set(0);
            y.set(0);
        }
    }

    return (
        <Link href={link} 
            onMouseMove={handleMouse} onMouseLeave={handleLeave}>
            <h2 className="text-12 font-bold hover:underline underline-offset-2 text-xl max-sm:text-lg">{title}</h2>

            <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                style={{ x: x, y: y }} ref={imgRef} src={img} alt={title} className="w-96 h-auto hidden absolute rounded-lg max-md:!hidden z-10" />
        </Link>
    )
}

const Article = ({ img, title, date, link, time }: { img: string; title: string; date: string; link: string; time: string; }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.4 } }}
            viewport={{ once: false }}
            className="w-full flex justify-between items-center border border-r-4 border-b-4 border-dark p-4 rounded-xl mb-6 dark:border-light max-sm:flex-col bg-light dark:bg-dark">

            <div className="flex items-center gap-4 w-full">
                <MovingImage title={title} img={img} link={link} />
            </div>

            <div className="flex flex-col items-end min-w-[150px] max-sm:self-start max-sm:pl-0 max-sm:mt-2">
                <span className="text-primary font-medium max-xs:text-sm text-right w-full">{date}</span>
                <span className="text-sm opacity-70">{time}</span>
            </div>
        </motion.li>
    )
}

export default function ArticlesClient({ 
    featuredArticles, 
    regularArticles 
}: { 
    featuredArticles: ArticleMeta[], 
    regularArticles: ArticleMeta[] 
}) {
    return (
        <>
            {featuredArticles.length > 0 && (
                <ul className="grid grid-cols-2 gap-10 mb-32 max-lg:gap-8 max-md:grid-cols-1 max-md:gap-y-14">
                    {featuredArticles.map((article) => (
                        <div key={article.slug} className="col-span-1 h-full">
                            <FeaturedArticle 
                                title={article.title} 
                                img={article.img} 
                                summary={article.summary} 
                                time={article.readingTime} 
                                link={`/articles/${article.slug}`} 
                            />
                        </div>
                    ))}
                </ul>
            )}

            {regularArticles.length > 0 && (
                <div className="flex items-center flex-col justify-center">
                    <h2 className="text-5xl font-bold mb-10 dark:text-light">Tous les articles</h2>

                    <ul className="w-full dark:text-light">
                        {regularArticles.map((article) => (
                            <Article 
                                key={article.slug}
                                img={article.img} 
                                title={article.title} 
                                date={new Date(article.date).toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })} 
                                time={article.readingTime}
                                link={`/articles/${article.slug}`} 
                            />
                        ))}
                    </ul>
                </div>
            )}
            
            {featuredArticles.length === 0 && (
                <div className="text-center w-full py-20 opacity-70">
                    <p className="text-2xl">De nouveaux articles arrivent bientôt...</p>
                </div>
            )}
        </>
    )
}
