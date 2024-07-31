import { useState, useCallback } from 'react';
import { ThemeContext } from '.';
import { DARK_THEME, LIGHT_THEME } from './constants'

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(LIGHT_THEME);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};