"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, adresse, work }: { position: string; company: string; companyLink: string; time: string; adresse: string; work: string; }) => {
  const ref = useRef<HTMLLIElement>(null);

  return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between text-left max-lg:w-[80%]">
    <LiIcon reference={ref} />

    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <h3 className="font-bold capitalize text-2xl max-sm:text-xl max-xs:text-lg">  {position} &nbsp; <a className="text-primary capitalize" href={companyLink} target="_blank" rel="noreferrer" >@{company}</a>
      </h3>
      <span className="capitalize font-medium dark:text-light/75 text-dark/75 max-xs:text-base">
        {time} | {adresse}
      </span>

      <p className="font-medium w-full max-md:text-sm">{work}</p>
    </motion.div>
  </li>
}


const Experiences = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  })

  return (
    <div className="my-40 mx-auto max-lg:my-30 max-md:my-20 max-xs:py-10">
      <h2 className="font-bold w-full text-8xl text-center mb-20 dark:text-light max-sm:text-xl max-md:text-6xl max-xs:text-5xl">Experiences</h2>

      <div className="w-[75%] relative mx-auto dark:text-light max-lg:w-[90%] max-md:w-full " ref={ref}>

        <motion.div style={{ scaleY: scrollYProgress }} className="absolute origin-top bg-dark w-[3px] h-full rounded-4 dark:bg-light max-md:w-0.5"></motion.div>

        <ul className="flex flex-col">
          <Details
            position="Lead développeur"
            company="Conforthi"
            companyLink="https://conforthi.com"
            time="2022 - Présent"
            adresse="Bénin"
            work="Lead technique sur Conforthi, première verticale de la marketplace AtounAfrica. Mise en place de l’architecture front-end/back-end, intégration des fonctionnalités sociales et gestion technique de l'équipe."
          />

          <Details
            position="Développeur Frontend"
            company="Alitcha"
            companyLink="https://alitchateam.com/"
            time="2021"
            adresse="Bénin"
            work="Intégré au département développement d'Alitcha, j’ai contribué au développement de l’interface du site communautaire et aux projets tech du TechLab."
          />

          <Details
            position="Développeur d'applications & modules"
            company="Pehu"
            companyLink=""
            time="2024 - 2025"
            adresse="Pehu Group (Dr Hénoc SOUDE)"
            work="Développement de modules intégrables pour des projets internes, dont un module de calendrier interactif comparable à Google Calendar."
          />

          <Details
            position="Développeur fullstack"
            company="Data Afrique Hub"
            companyLink="https://dataafriquehub.org/"
            time="2024 - Présent"
            adresse="Cotonou"
            work="Développement de plateformes de données spécifiques pour l'Afrique."
          />
        </ul>

      </div>
    </div>
  )
}

export default Experiences;
