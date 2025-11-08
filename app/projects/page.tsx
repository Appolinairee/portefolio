"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/base/TransitionEffect";
import Layout from "@/components/base/Layout";
import AnimatedText from "@/components/base/AnimatedText";
import { GithubIcon } from "@/components/icons/Icons";

const FeaturedProject = ({ type, title, summary, img, github, link }: { type: string; title: string; summary: string; img: string; github?: string; link: string; }) => {
    return (
        <article className="w-auto flex items-center justify-center rounded-2xl border border-gray-300 bg-light p-6 relative rounded-br-3xl dark:text-light dark:bg-dark lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 dark:border dark:border-light lg:flex-col">

            <div className="absolute top-0 -right-2 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light xs:w-[100%] xs:h-[101%] xs:-right-1 xs:rounded-[1.5rem]" />

            <Link
                href={link}
                target="_blank"
                className="w-full overflow-hidden rounded-lg lg:w-full"
            >
                <motion.img src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} />
            </Link>

            <div className="w-full flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6">
                <span className="text-primary font-mdium text-xl mt-2">{type}</span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2 transition-underline ease duration-100"
                >
                    <h2 className="w-full my-2 text-left text-3xl font-bold xs:text-sm">
                        {" "}
                        {title}{" "}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>

                <div className="flex gap-5 items-center justify-start mt-2">
                    {github && <Link href={github} target="_blank">
                        {" "}
                        <GithubIcon className="w-10" />{" "}
                    </Link>}
                    <Link
                        className="bg-dark rounded-lg font-bold text-light p-2 text-8"
                        href={link}
                        target="_blank"
                    >
                        {" "}
                        Visit Project{" "}
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ type, title, img, github, link }: { type: string; title: string; img: string; github: string; link: string; }) => {
    return (
        <article className="w-full flex items-center flex-col justify-center rounded-2xl border border-gray-300 bg-light p-6 relative dark:text-light dark:bg-dark dark:border-light xs:p-4 md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] ">

            <Link
                href={link}
                target="_blank"
                className="lg:w-full overflow-hidden rounded-lg"
            >
                <motion.img src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} />
            </Link>

            <div className="w-full flex flex-col items-start justify-between">
                <span className="text-primary font-mdium text-xl mt-2 lg:text-lg md:text-base">{type}</span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="w-full my-1 text-left text-2xl font-bold xs:text-sm">
                        {" "}
                        {title}{" "}
                    </h2>
                </Link>

                <div className="flex gap-5 items-center w-full justify-between mt-2">
                    <Link
                        className=" font-semibold underline p-2 text-8 md:text-base"
                        href={link}
                        target="_blank"
                    >
                        {" "}
                        Visit Project{" "}
                    </Link>

                    <Link href={github} target="_blank">
                        {" "}
                        <GithubIcon className="w-8 mr-6 md:w-6" />{" "}
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Projects = ({ title }: { title?: string; }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <TransitionEffect />

            <Layout className="py-16">

                <AnimatedText
                    text={title || "Au delà de la théorie: l'expérience"}
                    className="!text-7xl mb-10 sm:!text-6xl xs:!text-4xl"
                />

                <div className="w-fit grid grid-cols-12 sm:flex sm:flex-col gap-24 xl:gap-x-16 md:gap-x-10 md:gap-y-20">

                    <div className="col-span-12">
                        <FeaturedProject
                            type="NextJs & Laravel API"
                            title="Conforthi - Marketplace Mobilier"
                            summary="Marketplace de meubles au Bénin, permettant à plusieurs vendeurs de proposer leurs produits avec des fonctionnalités sociales (liker, commenter, partager)."
                            img="/projects/conforthi.png"
                            link="https://conforthi.com"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                        <Project
                            type="ReactJS & Laravel API"
                            title="NetBoxTV"
                            img="/NetBox.png"
                            github="https://github.com/Appolinairee/net_box_tv"
                            link="https://github.com/Appolinairee/net_box_tv"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                        <Project
                            type="JavaScript && CSS native"
                            title="Divisma Ecommerce site"
                            img="/divisima.png"
                            github="https://github.com/Appolinairee/divisima"
                            link="https://appolinairee.github.io/divisima/"
                        />
                    </div>

                    <div className="col-span-12">
                        <FeaturedProject
                            type="JavaScript POO & Mithril"
                            title="Module de Calendrier"
                            summary="Module de calendrier en JavaScript, conçu pour être intégré dans diverses applications. Offre des fonctionnalités similaires à Google Calendar avec une personnalisation facile pour les développeurs."
                            img="/projects/calendar.png"
                            github="https://github.com/Appolinairee/Calendar"
                            link="https://github.com/Appolinairee/Calendar"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                        <Project
                            type="Développeur Frontend"
                            title="Alitcha Community"
                            img="/projects/alitcha.png"
                            github="https://github.com/Appolinairee/alitchaWebsite"
                            link="https://alitchateam.com/"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                        <Project
                            type="JavaScript"
                            title="DataSchool."
                            img="/dataSchool.png"
                            github="https://github.com/Appolinairee/Data-School-23/"
                            link="https://appolinairee.github.io/Data-School-23/"
                        />
                    </div>


                </div>
            </Layout>
        </div>
    );
};

export default Projects;
