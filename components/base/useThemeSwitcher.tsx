"use client";

import { useEffect, useState } from "react";

const useThemeSwitcher = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
    const getResolvedTheme = () => {
        if (typeof window === "undefined") {
            return "light";
        }

        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    const [mode, setMode] = useState<string>(() => {
        return getResolvedTheme();
    });

    useEffect(() => {
        if (!mode) {
            return;
        }

        localStorage.setItem("theme", mode);

        const htmlElement = document.documentElement;
        if (mode === "dark") {
            htmlElement.classList.add("dark");
            htmlElement.classList.remove("light");
        } else {
            htmlElement.classList.remove("dark");
            htmlElement.classList.add("light");
        }
    }, [mode]);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") {
            return;
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const syncSystemTheme = () => {
            setMode(mediaQuery.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", syncSystemTheme);
        return () => {
            mediaQuery.removeEventListener("change", syncSystemTheme);
        };
    }, []);

    return [mode, setMode];
};

export default useThemeSwitcher;
