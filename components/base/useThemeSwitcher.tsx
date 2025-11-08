import { useEffect, useState } from "react";

const useThemeSwitcher = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
    const [mode, setMode] = useState<string>(() => {
        if (typeof window === "undefined") return "light";
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        console.log(localStorage.getItem("theme"))
        localStorage.setItem("theme", mode);
        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;
