"use client";

import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Layout from "@/components/base/Layout";
import AnimatedText from "@/components/base/AnimatedText";
import TransitionEffect from "@/components/base/TransitionEffect";

const FeaturedArticle = ({ title, summary, img, link, time }: { title: string; summary: string; img: string; link: string; time: string; }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-dark bg-light p-6 relative rounded-br-3xl dark:bg-dark dark:text-light dark:border-light md:p-2">
            <div className="absolute top-0 -right-2 -z-10 w-[101%] h-[102%] rounded-4xl bg-dark rounded-br-3xl cursor-pointer" />

            <Link
                href={link}
                target="_blank"
                className="w-full overflow-hidden rounded-lg"
            >
                <motion.img src={img} alt={title} className="m-auto w-auto h-auto" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} />
            </Link>

            <div className="w-full flex flex-col items-start justify-between pl-6 md:p-1 ">
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2 transition-underline ease duration-100"
                >
                    <h2 className="w-full my-2 text-left text-2xl font-bold xs:text-sm">
                        {title}
                    </h2>
                </Link>
                <p className="font-dark/75 text-[14px] mb-2">{summary}</p>

                <span className="text-primary font-mdium text-12 sm:text-sm">{time}</span>
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

    function handleLeave(event: React.MouseEvent) {
        if (imgRef.current) {
            imgRef.current.style.display = "none";
            x.set(0);
            y.set(0);
        }
    }

    return (
        <Link href={link} target="_blank"
            onMouseMove={handleMouse} onMouseLeave={handleLeave}>
            <h2 className="text-12 font-bold hover:underline underline-offset-2">{title}</h2>

            <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                style={{ x: x, y: y }} ref={imgRef} src={img} alt={title} className="w-96 h-auto hidden absolute rounded-lg md:!hidden" />
        </Link>
    )
}

const Article = ({ img, title, date, link }: { img: string; title: string; date: string; link?: string; }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.4 } }}
            viewport={{ once: false }}
            className="w-full flex justify-between items-center border border-r-4 border-b-4 border-dark p-4 rounded-xl mb-6 dark:border-light sm:flex-col ">

            <MovingImage title={title} img={img} link={link || "#"} />

            <span className="text-primary font-medium pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
        </motion.li>
    )
}

const Articles = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <TransitionEffect />
            <Layout className="py-16">
                <AnimatedText text="Nos mots qui changent nos maux." className="mb-14 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

                <ul className="grid grid-cols-4 gap-10 mb-32 lg:gap-8 md:grid-cols-1 md:gap-y-14">
                    <div className="col-span-2">
                        <FeaturedArticle title="Développeur et Entrepreneur, Le Duo Gagnant dans le Monde des Affaires" img="/assets/Family Values - In Company.png" summary="Dans le monde dynamique des affaires d'aujourd'hui, la synergie entre le rôle de développeur et celui d'entrepreneur est devenue un atout majeur. Cet article explore de manière approfondie comment la fusion de ces deux compétences distinctes, le développement informatique et l'entrepreneuriat..." time="9 min read, à suivre bientôt" link="#" />
                    </div>

                    <div className=" col-span-2">
                        <FeaturedArticle title="Laravel : Optimiser le Code pour Aller au-delà du Simple Fonctionnement" img="/assets/laravel.jpeg" summary="Laravel, avec sa syntaxe élégante et ses fonctionnalités puissantes, est devenu un choix privilégié pour de nombreux développeurs. Cependant, l'optimisation du code va bien au-delà de la simple exécution des fonctionnalités de base. Cet article plonge dans l'art de maximiser les performances..." time="9 min read, à suivre bientôt" link="#" />
                    </div>
                </ul>

                <div className="flex items-center flex-col justify-center">
                    <h2 className="text-5xl font-bold mb-10 dark:text-light">All Articles</h2>

                    <ul className="w-full dark:text-light">
                        <Article img="/assets/Family Values - In Company.png" title="Manssah : Un rêve d'enfance sur lequel les aînés travaillent déjà?" date="12 Février 2024" link="#" />
                        <Article img="/assets/Family Values - In Company.png" title="Lean Startup et Build In Public : Les Outils de l'Odyssée Entrepreneuriale." date="12 Mars 2024" link="#" />
                        <Article img="/assets/Family Values - In Company.png" title="ReactJS : Construire des Interfaces Utilisateur Dynamiques et Réactives" date="12 Mai 2024" link="#" />

                        <Article img="/assets/Family Values - In Company.png" title="Équilibre Spirituel : Naviguer entre Humilité et Confiance en Soi." date="12 Avril 2024" link="#" />

                        <Article img="/assets/Family Values - In Company.png" title="Maîtriser le Développement Web avec TDD : Guide Complet." date="12 Juin 2024" link="#" />
                    </ul>

                </div>
            </Layout>
        </div>
    )
}

export default Articles;