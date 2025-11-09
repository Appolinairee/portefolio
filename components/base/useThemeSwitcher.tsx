import { useEffect, useState } from "react";

const useThemeSwitcher = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
    const [mode, setMode] = useState<string>("light");

    useEffect(() => {
        // Initialiser le mode depuis localStorage uniquement côté client
        const savedTheme = localStorage.getItem("theme");
        const initialMode = savedTheme || "light";
        
        const htmlElement = document.querySelector("html");
        if (htmlElement) {
            if (initialMode === "dark") {
                htmlElement.classList.add("dark");
            } else {
                htmlElement.classList.remove("dark");
            }
        }
        
        setMode(initialMode);
    }, []);

    useEffect(() => {
        // Sauvegarder et appliquer les changements de thème
        if (mode) {
            console.log("Changing theme to:", mode);
            localStorage.setItem("theme", mode);
            
            const htmlElement = document.querySelector("html");
            console.log("HTML Element:", htmlElement);
            console.log("Current classes:", htmlElement?.className);
            
            if (htmlElement) {
                if (mode === "dark") {
                    htmlElement.classList.add("dark");
                    console.log("Added dark class. Classes:", htmlElement.className);
                } else {
                    htmlElement.classList.remove("dark");
                    console.log("Removed dark class. Classes:", htmlElement.className);
                }
            }
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;
