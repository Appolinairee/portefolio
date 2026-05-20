"use client";

import { useEffect, useState } from "react";

export type ThemeMode = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";
const THEME_STORAGE_KEY = "theme";
const THEME_VERSION_KEY = "theme-version";
const THEME_VERSION = "2";

const getSystemTheme = (): ResolvedTheme => {
    if (typeof window === "undefined") {
        return "light";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getStoredMode = (): ThemeMode => {
    if (typeof window === "undefined") {
        return "system";
    }

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const savedVersion = localStorage.getItem(THEME_VERSION_KEY);

    if (savedVersion !== THEME_VERSION) {
        localStorage.setItem(THEME_STORAGE_KEY, "system");
        localStorage.setItem(THEME_VERSION_KEY, THEME_VERSION);
        return "system";
    }

    if (savedTheme === "system" || savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    return "system";
};

const applyTheme = (theme: ResolvedTheme) => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(theme);
};

const useThemeSwitcher = () => {
    const [mode, setMode] = useState<ThemeMode>(() => getStoredMode());
    const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() => getSystemTheme());
    const resolvedMode: ResolvedTheme = mode === "system" ? systemTheme : mode;

    useEffect(() => {
        localStorage.setItem(THEME_STORAGE_KEY, mode);
        localStorage.setItem(THEME_VERSION_KEY, THEME_VERSION);
        applyTheme(resolvedMode);
    }, [mode, resolvedMode]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const syncSystemTheme = () => {
            setSystemTheme(mediaQuery.matches ? "dark" : "light");
        };

        syncSystemTheme();
        mediaQuery.addEventListener("change", syncSystemTheme);

        return () => {
            mediaQuery.removeEventListener("change", syncSystemTheme);
        };
    }, [mode]);

    return { mode, resolvedMode, setMode };
};

export default useThemeSwitcher;
