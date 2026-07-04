"use client";

import { motion } from "framer-motion";
import { AdvancedBadge } from "../icons/Icons";

const Skill = ({ name, x, y, level }: { name: string; x: string; y: string; level?: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full px-4 py-2 bg-dark text-white font-semibold shadow-2 cursor-pointer absolute shadow-dark dark:bg-light dark:text-dark max-sm:px-[9px] max-sm:py-1 max-sm:text-[13px]"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false }}
    >
      {name}
      {level === "advanced" && <AdvancedBadge className="text-primary absolute top-0 right-1 w-4 h-4" />}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold w-full text-8xl text-center dark:text-light max-md:text-6xl max-xs:text-5xl">Skills</h2>
      <div className="w-full bg-circularBackground rounded-full flex items-center justify-center h-screen border-dark dark:bg-circularBackgroundLight max-lg:h-[8Ovh] max-md:h-[60vh] max-xs:h-[60vh] max-lg:dark:bg-circularBackgroundLightLg max-lg:bg-circularBackgroundLg max-md:bg-circularBackgroundMd max-md:dark:bg-circularBackgroundLightMd max-sm:bg-circularBackgroundSm max-sm:dark:bg-circularBackgroundLightSm">
        <motion.div className="flex relative items-center justify-center rounded-full p-8 bg-dark text-white font-semibold shadow-2 cursor-pointer dark:bg-light dark:text-dark max-lg:p-6 max-md:p-4 max-xs:p-2 max-xs:text-xs"
          whileHover={{ scale: 1.06 }}
        >Build</motion.div>

        {/* Orbit 1: Core Stack (Proche du centre, distance ~10-14vw) */}
        <Skill name="Next.js" x="-6vw" y="-12vw" level="advanced" />
        <Skill name="React" x="-12vw" y="4vw" level="advanced" />
        <Skill name="NestJS" x="10vw" y="-8vw" level="advanced" />

        {/* Orbit 2: Infrastructure & Data (Milieu, distance ~18-25vw) */}
        <Skill name="Docker" x="6vw" y="17vw" level="advanced" />
        <Skill name="CI/CD" x="20vw" y="7vw" level="advanced" />
        <Skill name="SQL" x="16vw" y="-16vw" />
        <Skill name="MongoDB" x="17vw" y="18vw" />
        <Skill name="Linux" x="-16vw" y="18vw" />
        <Skill name="VPS" x="-23vw" y="10vw" />

        {/* Orbit 3: Compétences Transverses & Émergentes (Périphérie, distance ~28-32vw) */}
        <Skill name="FastAPI" x="26vw" y="-15vw" />
        <Skill name="Python" x="-27vw" y="-13vw" level="advanced" />
        <Skill name="ML" x="29vw" y="-2.5vw" />
        <Skill name="TDD" x="-22vw" y="-18vw" />
        <Skill name="TailwindCSS" x="27vw" y="12vw" level="advanced" />
      </div>
    </>
  )
}

export default Skills;
