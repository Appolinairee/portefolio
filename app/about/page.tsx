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
                <div className="col-span-3 flex flex-col justify-center gap-y-6 max-xl:col-span-4 max-md:col-span-9 max-md:order-2">
                    <h3 className="font-bold mb-2 uppercase text-dark/85 text-lg dark:text-light/75">BIOGRAPHIE</h3>

                    <p className="font-medium text-lg leading-8">
                        Je suis <span className="font-bold">ADANDE Appolinaire</span>. Je bâtis des produits &mdash; <span className="font-bold text-primary">Shopinxx</span>, <span className="font-bold text-primary">Conforthi</span>, <span className="font-bold text-primary">Aqua-Atmos</span> &mdash; avec une base <span className="font-semibold">fullstack</span> et <span className="font-semibold">DevOps</span> solide : <span className="font-semibold">Next.js</span>, <span className="font-semibold">React</span>, <span className="font-semibold">NestJS</span>, <span className="font-semibold">Docker</span> et <span className="font-semibold">CI/CD/TDD</span>.
                    </p>

                    <p className="font-medium text-lg leading-8">
                        En parallèle, je poursuis mon cursus à l&apos;<span className="font-semibold">École Centrale Casablanca</span>, qui renforce ma rigueur en <span className="font-semibold">modélisation</span>, <span className="font-semibold">optimisation</span> et <span className="font-semibold">ingénierie générale</span>.
                    </p>

                    <p className="font-medium text-lg leading-8">
                        Ma vision : porter des <span className="font-bold">produits concrets</span> du code <span className="font-bold">jusqu&apos;au marché</span>, avec une trajectoire <span className="font-bold text-primary">Fullstack, DevOps &rarr; ML Engineering</span>, et un <span className="font-bold">impact réel</span> &mdash; notamment sur les <span className="font-bold">marchés africains</span>.
                    </p>
                </div>


                <div className="col-span-4 flex items-center justify-center max-xl:col-span-5 max-md:col-span-9 max-md:order-1">
                    <div className="w-full max-w-[420px] border border-dark dark:border-light bg-light dark:bg-dark rounded-3xl p-4 shadow-dark shadow-1xl hover:shadow-lg dark:shadow-light transition-shadow ease duration-100 cursor-pointer">
                        <Image
                            className="w-full h-auto rounded-2xl"
                            src="/assets/identity-picture.png"
                            width={398}
                            height={540}
                            alt="ADANDE Appolinaire"
                            priority
                        />
                    </div>
                </div>

                <div className="col-span-2 flex flex-col justify-between gap-xl border-dark text-right py-8 max-xl:col-span-9 gap-y-10 max-xl:flex-row max-xl:items-center max-md:order-2 max-md:text-center max-xs:flex-col max-xs:gap-4">
                    <div className="flex flex-col justify-center whitespace-nowrap">
                        <span className="text-6xl font-bold max-md:text-5xl max-xs:text-6xl">
                            <AnimatedNumbers value={12} />+
                        </span>
                        <h2 className="capitalize text-dark/75 text-[18px] font-medium mt-2 dark:text-light max-sm:text-base  max-xs:mt-1">Projets réalisés</h2>
                    </div>

                    <div className="flex flex-col justify-center whitespace-nowrap">
                        <span className="text-6xl font-bold max-md:text-5xl max-xs:text-6xl">
                            <AnimatedNumbers value={5} />
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
