import React, {createContext, useState, useContext, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    // Check local storage for a stored theme preference
    const storedTheme = localStorage.getItem('theme');

    // Check system preference for dark mode
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set the initial theme based on local storage or system preference
    const [theme, setTheme] = useState(storedTheme ? storedTheme : (systemPrefersDark ? 'dark' : 'light'));

    // Update the theme in local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);