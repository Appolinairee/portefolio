import { useEffect, useState } from "react";

const useThemeSwitcher = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
    const [mode, setMode] = useState<string>("light");

    useEffect(() => {
        // Initialiser le mode depuis localStorage uniquement côté client
        const savedTheme = localStorage.getItem("theme");
        const initialMode = savedTheme || "light";
        
        if (initialMode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        
        setMode(initialMode);
    }, []);

    useEffect(() => {
        // Sauvegarder et appliquer les changements de thème
        if (mode) {
            console.log("Changing theme to:", mode);
            localStorage.setItem("theme", mode);
            
            if (mode === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;
