"use client";

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

            <AnimatedText text="Un Élan Créatif" className="text-7xl! py-8 dark:text-light sm:text-6xl! xs:!text-4xl" />

            <div className="grid grid-cols-9 w-full mt-4 mb-40 gap-4 dark:text-light text-[15px] items-center lg:mb-30 md:mb-14">
                <div className="col-span-3 xl:col-span-4 md:col-span-9 md:order-2">
                    <h3 className="font-bold mb-4 uppercase text-dark/85 text-lg dark:text-light/75">BIOGRAPHIE</h3>

                    <p className="my-4 font-medium">
                        Je suis ADANDE Appolinaire, développeur full-stack avec 3 ans d’expérience. Mon approche est centrée sur le clean code et la rapidité d'exécution.
                    </p>

                    <p className="my-4 font-medium">
                        Après un bac C obtenu en 2021, j’ai suivi deux ans de classes préparatoires à l’IMSP, où je poursuis actuellement une licence en informatique orientée développement, systèmes et réseaux.
                    </p>

                    <p className="my-4 font-medium">
                        Passionné par la tech responsable, l’Afrique et l'entrepreneuriat, je m’implique à fond dans chaque projet. Si vous avez un projet web solide ? Parlons-en.
                    </p>
                </div>


                <div className="col-span-4 border-dark bg-light dark:bg-dark relative border p-2 h-full flex items-center dark:rounded-3xl xl:col-span-5 md:col-span-9 md:order-1">
                    <div className="w-100% bg-red rounded-2xl shadow-dark shadow-1xl hover:shadow-lg dark:shadow-light  transition-shadow ease duration-100 py-2 cursor-pointer md:relative">
                        <img className="h-full w-auto" src="/assets/identity-picture.png" alt="ADANDE Appolinaire" />
                    </div>
                </div>

                <div className="col-span-2 flex flex-col justify-between gap-xl border-dark text-right py-8 xl:col-span-9 gap-y-10 xl:flex-row xl:items-center md:order-2 md:text-center xs:flex-col xs:gap-4">
                    <div className="flex flex-col justify-center whitespace-nowrap">
                        <span className="text-6xl font-bold md:text-5xl xs:text-6xl">
                            <AnimatedNumbers value={10} />+
                        </span>
                        <h2 className="capitalize text-dark/75 text-[18px] font-medium mt-2 dark:text-light sm:text-base  xs:mt-1">Projets réalisés</h2>
                    </div>

                    <div className="flex flex-col justify-center whitespace-nowrap">
                        <span className="text-6xl font-bold md:text-5xl xs:text-6xl">
                            <AnimatedNumbers value={15} />
                            +</span>
                        <h2 className="capitalize text-dark/75 text-[18px] font-medium mt-2 dark:text-light sm:text-base  xs:mt-1">Interventions</h2>
                    </div>

                    <div className="flex flex-col justify-center whitespace-nowrap">
                        <span className="text-6xl font-bold md:text-5xl xs:text-6xl">
                            <AnimatedNumbers value={3} />+
                        </span>
                        <h2 className="capitalize text-dark/75 text-[18px] font-medium mt-2 dark:text-light sm:text-base xs:mt-1">Années d'expérience</h2>
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