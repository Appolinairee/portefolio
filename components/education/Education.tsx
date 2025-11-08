"use client";

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "../experiences/LiIcon";

const Details = ({ type, time, place, info } : { type: string; time: string; place: string; info: string; }) => {
  const ref = useRef(null);

  return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between text-left  lg:w-[80%] ">
    <LiIcon reference={ref} />

    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <h3 className="font-bold capitalize text-2xl sm:text-xl xs:text-lg">  {type} </h3>

      <span className="capitalize font-medium text-dark/75  dark:text-light/75 xs:text-base">
        {time} | <span className="text-primary">@</span>{place}
      </span>

      <p className="font-medium w-full md:text-sm">{info}</p>
    </motion.div>
  </li>
}


const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  })

  return (
    <div className="py-40">
      <h2 className="font-bold w-full text-8xl text-center mb-20 capitalize dark:text-light sm:text-xl md:text-6xl xs:text-5xl">éducation</h2>

      <div className="w-[75%] relative mx-auto  lg:w-[90%] md:w-full " ref={ref}>

        <motion.div style={{ scaleY: scrollYProgress }} className="absolute origin-top bg-dark w-[3px] h-full rounded-4 dark:bg-white"></motion.div>

        <ul className="flex flex-col  dark:text-light">
          <Details
            type="Licence Informatique"
            place="Institut de Mathématiques et de Sciences Physiques"
            time="2023-2024"
            info="Licence axée sur le web, la programmation, les systèmes et réseaux, après deux années de classes préparatoires."
          />

          <Details
            type="Classes Préparatoires"
            place="Institut de Mathématiques et de Sciences Physiques (IMSP)"
            time="2021-2023"
            info="Formation intensive en mathématiques, physique et informatique (Langage C, systèmes numériques, etc.)."
          />

          <Details
            type="Baccalauréat technologique série C"
            place="CEG 1 Avrankou"
            time="2021"
            info="Diplôme obtenu avec un focus sur les sciences exactes (maths et physique)."
          />

          <Details
            type="BEPC"
            place="La Merveilleuse"
            time="2017-2018"
            info="Diplôme de fin du premier cycle."
          />
        </ul>

      </div>
    </div>
  )
}

export default Education;
