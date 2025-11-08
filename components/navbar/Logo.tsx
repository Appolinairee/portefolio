import { motion } from "framer-motion";
import Link from "next/link";

const Logo = () => {
    return (
        <motion.div className="flex justify-center items-center px-3 py-3  bg-dark rounded-full text-light cursor-pointer font-bold text-2xl" whileHover={{
            backgroundColor: ["#121212", "rgba(131, 58, 180, 1)", "rgba(252, 176, 69, 1)", "rgba(256, 176, 69, 1)", "rgba(131, 58, 180, 1)", "#121212"],
            transition: { duration: 1, repeat: Infinity }
        }}>
            <Link href="/">AA</Link>
        </motion.div>
    )
}

export default Logo;