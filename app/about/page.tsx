"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import TransitionEffect from "@/components/base/TransitionEffect";
import AnimatedText from "@/components/base/AnimatedText";
import Layout from "@/components/base/Layout";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experiences/Experience";
import Education from "@/components/education/Education";

const AnimatedNumbers = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && Number(latest.toFixed(0)) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value]);

    return <span ref={ref}></span>
}

const About = () => {
    return (
        <Layout className="px-12 pb-32">
            <TransitionEffect />

            <AnimatedText text="Concevoir. Déployer. Fiabiliser." className="text-7xl! py-8 dark:text-light max-sm:text-6xl! max-xs:!text-4xl" />

            <div className="grid grid-cols-9 w-full mt-4 mb-40 gap-4 dark:text-light text-[15px] items-center max-lg:mb-30 max-md:mb-14">
                <div className="col-span-3 max-xl:col-span-4 max-md:col-span-9 max-md:order-2">
                    <h3 className="font-bold mb-4 uppercase text-dark/85 text-lg dark:text-light/75">BIOGRAPHIE</h3>

                    <p className="my-4 font-medium">
                        Je suis ADANDE Appolinaire, développeur fullstack avec 4 ans d&apos;expérience professionnelle. Je conçois des applications web, des API et des déploiements robustes avec Next.js, React, FastAPI, Python, Docker et CI/CD.
                    </p>

                    <p className="my-4 font-medium">
                        En parallèle, je poursuis mon cursus à l&apos;École Centrale Casablanca. Cette formation renforce une base solide en modélisation, optimisation, systèmes dynamiques, analyse numérique et ingénierie générale.
                    </p>

                    <p className="my-4 font-medium">
                        Mon cap est clair: renforcer un profil fullstack, DevOps et ML engineering, avec une attention particulière aux produits concrets, aux marchés africains et aux langues sous-représentées. À long terme, je vise un rôle de Research Engineer.
                    </p>
                </div>


                <div className="col-span-4 border-dark bg-light dark:bg-dark relative border p-2 h-full flex items-center dark:rounded-3xl max-xl:col-span-5 max-md:col-span-9 max-md:order-1">
                    <div className="w-100% bg-red rounded-2xl shadow-dark shadow-1xl hover:shadow-lg dark:shadow-light  transition-shadow ease duration-100 py-2 cursor-pointer max-md:relative">
                        <Image
                            className="h-full w-auto"
                            src="/assets/identity-picture.png"
                            width={398}
                            height={290}
                            alt="ADANDE Appolinaire"
                        />
                    </div>
                </div>

                <div className="col-span-2 flex flex-col justify-between gap-xl border-dark text-right py-8 max-xl:col-span-9 gap-y-10 max-xl:flex-row max-xl:items-center max-md:order-2 max-md:text-center max-xs:flex-col max-xs:gap-4">
                    <div className="flex flex-col justify-center whitespace-nowrap">
                        <span className="text-6xl font-bold max-md:text-5xl max-xs:text-6xl">
                            <AnimatedNumbers value={10} />+
                        </span>
                        <h2 className="capitalize text-dark/75 text-[18px] font-medium mt-2 dark:text-light max-sm:text-base  max-xs:mt-1">Projets réalisés</h2>
                    </div>

                    <div className="flex flex-col justify-center whitespace-nowrap">
                        <span className="text-6xl font-bold max-md:text-5xl max-xs:text-6xl">
                            <AnimatedNumbers value={4} />
                            +</span>
                        <h2 className="capitalize text-dark/75 text-[18px] font-medium mt-2 dark:text-light max-sm:text-base  max-xs:mt-1">Années d&apos;expérience</h2>
                    </div>

                    <div className="flex flex-col justify-center whitespace-nowrap">
                        <span className="text-6xl font-bold max-md:text-5xl max-xs:text-6xl">
                            <AnimatedNumbers value={3} />+
                        </span>
                        <h2 className="capitalize text-dark/75 text-[18px] font-medium mt-2 dark:text-light max-sm:text-base max-xs:mt-1">Axes clés</h2>
                    </div>
                </div>
            </div>

            <Skills />
            <Experience />
            <Education />

        </Layout>
    )
}

export default About;
