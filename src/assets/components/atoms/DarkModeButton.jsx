import React, { useState, useEffect } from "react";
import SunIcon from '../atoms/Icons/SunIcon.svg';
import MoonIcon from '../atoms/Icons/MoonIcon.svg';

export const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(() =>
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark-mode");
        } else {
            root.classList.remove("dark-mode");
        }
    }, [isDark]);

    const handleToggle = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <button
            onClick={handleToggle}
            aria-label="Dark mode toggle"
            style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                width: 40,
                heigh: 40
            }}
        >
            {isDark ? (
                <img src={MoonIcon} alt="Switch to light mode"  style={{ width: "100%", height: "100%" }}/>
            ) : (
                <img src={SunIcon} alt="Switch to dark mode"  style={{ width: "100%", height: "100%" }}/>
            )}
        </button>
    );
};