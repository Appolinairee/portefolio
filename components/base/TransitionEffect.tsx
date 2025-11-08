"use client";

import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div className="fixed bottom-0 top-0 right-full w-screen h-screen z-30 bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      ></motion.div>

      <motion.div className="fixed bottom-0 top-0 right-full w-screen h-screen z-20 bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      ></motion.div>

      <motion.div className="fixed bottom-0 top-0 right-full w-screen h-screen z-10 bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
    </>
  )
}

export default TransitionEffect;
