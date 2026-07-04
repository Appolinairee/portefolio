"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, adresse, work }: { position: string; company: string; companyLink: string; time: string; adresse: string; work: React.ReactNode; }) => {
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

      <div className="font-medium w-full max-md:text-sm mt-2">{work}</div>
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
            position="Lead Africa Brain"
            company="Africa Brain"
            companyLink=""
            time="2024 - Présent"
            adresse="Bénin"
            work="Lead tech et promoteur de l'équipe. Pilotage de sujets produit, architecture et delivery autour de Shopinxx, Conforthi et d'autres produits web."
          />

          <Details
            position="Lead Software & Électronique"
            company="Aqua-Atmos"
            companyLink="https://github.com/Appolinairee/aqua-atmos-ai"
            time="2025 - 2026"
            adresse="Casablanca"
            work={
              <>
                🏆 <strong>Prix de la meilleure présentation à l&apos;École Centrale Casablanca</strong> — Système de production d&apos;eau atmosphérique porté par une équipe de 6. En charge de l&apos;électronique (capteurs, actionneurs, câblage ESP32), de la logique de décision embarquée (règles + IA) et du dashboard Flask/Raspberry Pi pour le pilotage à distance en temps réel.
              </>
            }
          />

          <Details
            position="Fullstack Engineer"
            company="Shopinxx"
            companyLink="https://shopinxx.com"
            time="2024 - Présent"
            adresse="Bénin"
            work="Contribution à la marketplace B2B sur la partie produit, front, API, déploiement et amélioration continue avec une logique fullstack et DevOps."
          />

          <Details
            position="Lead Fullstack"
            company="Conforthi"
            companyLink="https://conforthi.shopinxx.com/"
            time="2022 - 2025"
            adresse="Bénin"
            work="Conception et évolution d'une marketplace mobilier avec fonctionnalités sociales, architecture web, coordination technique et mise en production."
          />

          <Details
            position="Frontend Engineer"
            company="Alitcha"
            companyLink="https://alitchateam.com/"
            time="2021 - 2022"
            adresse="Cotonou"
            work="Développement d'interfaces web et participation aux projets produits de l'équipe tech."
          />
        </ul>

      </div>
    </div>
  )
}

export default Experiences;
