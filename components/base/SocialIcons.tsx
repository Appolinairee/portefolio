"use client";

import { motion } from "framer-motion";
import useThemeSwitcher from "./useThemeSwitcher";
import { GithubIcon, LinkedInIcon, MailIcon, MoonIcon, SunIcon, WhatsappIcon }  from "../icons/Icons";

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/appolinaire-adande-8b21ba249",
        icon: <LinkedInIcon />,
        label: "LinkedIn",
    },
    {
        href: "https://wa.me/212657553269",
        icon: <WhatsappIcon />,
        label: "WhatsApp",
    },
    {
        href: "https://www.github.com/Appolinairee",
        icon: <GithubIcon />,
        label: "GitHub",
    },
    {
        href: "mailto:appolinaireenangnon.adande@centrale-casablanca.ma",
        icon: <MailIcon className="text-primary" />,
        label: "Mail",
    },
];

const SocialIcons = ({ isNavbar = false, className }: { isNavbar?: boolean, className?: string }) => {
    const { mode, resolvedMode, setMode } = useThemeSwitcher();

    return (
        <div className={`flex justify-center items-center gap-5 flex-wrap ${className}`}>
            {socialLinks.map(({ href, icon, label }) => (
                <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className={isNavbar ? "w-5 max-lg:hidden" : "w-5"}
                    whileHover={{ scale: 1.2, rotate: 3 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {icon}
                </motion.a>
            ))}

            <motion.button
                onClick={() => setMode(resolvedMode === "light" ? "dark" : "light")}
                className="ml-2 flex items-center justify-center p-1 rounded-full border-none"
                whileHover={{ rotate: 20 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Toggle Theme${mode === "system" ? " (system)" : ""}`}
                title={mode === "system" ? `Auto (${resolvedMode})` : resolvedMode}
                suppressHydrationWarning
            >
                {resolvedMode === "dark" ? (
                    <SunIcon className={isNavbar ? "fill-white" : "fill-dark"} />
                ) : (
                    <MoonIcon className={isNavbar ? "fill-dark" : "fill-white"} />
                )}
            </motion.button>
        </div>
    );
};

export default SocialIcons;
