import { motion, useScroll } from "framer-motion";

const LiIcon = ({reference} : {reference: React.RefObject<HTMLLIElement | null>}) => {

    const {scrollYProgress} = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    })

  return (
    <figure className="absolute left-[-35px] translate-y-[-5px] stroke-dark ">
        <svg  className="-rotate-90 max-md:rotate-[-67deg] max-md:w-[60px] max-md:h-[60px]" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="75" cy="50" r="20" className="stroke-primary  stroke-[1px" />
            <motion.circle 
            style={{pathLength: scrollYProgress}} cx="75" cy="50" r="20" className="stroke-[4px] fill-white dark:stroke-light dark:fill-dark" />
            <circle cx="75" cy="50" r="10" className="stroke-1 fill-primary animate-pulse" />
        </svg>
    </figure>
  )
}

export default LiIcon;