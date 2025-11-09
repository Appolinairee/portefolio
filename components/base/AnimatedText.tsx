"use client";

import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 5,
    }
  }
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  }
}

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className="w-full mx-auto flex items-center justify-center text-center overflow-hidden max-sm:py-0">
      <motion.h1 className={`${className} text-dark capitalize text-8xl inline-block font-bold dark:text-light`} variants={quote}>
        {
          text.split(" ").map((word, index) =>
            <motion.span key={word + '-' + index} className="inline-block"
              variants={singleWord} initial="initial" animate="animate"
            >
              {word}&nbsp;
            </motion.span>
          )
        }
      </motion.h1>
    </div>
  )
}

export default AnimatedText;