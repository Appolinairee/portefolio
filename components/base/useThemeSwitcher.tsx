"use client";

import { useEffect, useState } from "react";

const useThemeSwitcher = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
    const [mode, setMode] = useState<string>(() => {
        if (typeof window === "undefined") {
            return "light";
        }

        return localStorage.getItem("theme") || "light";
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

    return [mode, setMode];
};

export default useThemeSwitcher;
