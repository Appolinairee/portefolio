"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";
import SocialIcons from "../base/SocialIcons";

const CustomLink = ({ href, title, className }: { href: string; title: string; className?: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`relative capitalize text-green group ${className}`}>
      {title}
      <span className={`absolute left-0 -bottom-0.5 h-0.5 w-0 bg-dark group-hover:w-full transition-[width] ease duration-300 group active-w-full dark:bg-light ${isActive ? "w-full" : "w-0"}`}> &nbsp; </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }: { href: string; title: string; className?: string; toggle: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} onClick={() => toggle && toggle()} className={`relative capitalize group ${className}`}>
      {title}
      <span className={`absolute left-0 -bottom-0.5 h-0.5 w-0 bg-light group-hover:w-full transition-[width] ease duration-300 group active-w-full dark:bg-dark ${isActive ? "w-full" : "w-0"}`}> &nbsp; </span>
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`px-32 py-8 font-medium bg-light w-full flex items-center justify-between relative dark:bg-dark dark:text-light max-lg:px-16 max-md:px-12 max-sm:px-8 max-md:py-6`}>
      <button className="flex-col items-center justify-center hidden max-lg:flex" onClick={handleBar}>
        <span className={`bg-dark transition-all ease-out duration-300 dark:bg-light rounded-sm block h-0.5 w-6 ${isOpen ? 'rotate-45 translate-y-1' : 'rotate-0 -translate-y-0.5'}`}></span>
        <span className={`bg-dark transition-all ease-out duration-300 my-0.5 dark:bg-light rounded-sm block h-0.5 w-6 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark transition-all ease-out duration-300 dark:bg-light rounded-sm block h-0.5 w-6 ${isOpen ? '-rotate-45 -translate-y-1' : 'rotate-0 translate-y-0.5'}`}></span>
      </button>

      <div className="flex items-center justify-between max-lg:w-[calc(50%+20px)] w-full">
        <div className="flex flex-nowrap gap-4 max-lg:flex-col max-lg:justify-center max-lg:hidden">
          <CustomLink href="/" title="Accueil" className="" />
          <CustomLink href="/about" title="à propos" className="" />
          <CustomLink href="/projects" title="Projets" className="" />
          <CustomLink href="/articles" title="Articles" className="" />
        </div>

        <div className="flex justify-center items-center w-auto max-lg:w-fit dark:border-light border rounded-full dark:hover:border-none transition-all ease">
          <Logo />
        </div>

        <SocialIcons isNavbar />
      </div>

      {
        isOpen ?
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="hidden max-lg:flex justify-center items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-20 w-[80vw] max-w-lg h-auto min-h-[60vh]">
            <div className="flex flex-col items-center gap-6 justify-center text-light dark:text-dark mb-8 w-full">
              <CustomMobileLink href="/" title="Home" toggle={handleBar}  />
              <CustomMobileLink href="/about" title="à propos" toggle={handleBar} />
              <CustomMobileLink href="/projects" title="Projets" toggle={handleBar} />
              <CustomMobileLink href="/articles" title="Articles" toggle={handleBar} />
            </div>

            <SocialIcons className="" />
          </motion.div>
          : null
      }
    </nav>
  )
}

export default NavBar;
