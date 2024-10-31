import React, { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const savedTheme = localStorage.getItem("theme");
    const [isDarkTheme, setIsDarkTheme] = useState(savedTheme === 'dark');

    const toggleTheme = () => {
        const newTheme = isDarkTheme ? 'light' : 'dark';
        setIsDarkTheme(!isDarkTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const theme = isDarkTheme ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
    }, [isDarkTheme]);

    const values = {
        isDarkTheme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    );
};
