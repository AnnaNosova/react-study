import { Button } from "../button/button";
import { useTheme } from "../theme-context/theme-context";

export const ThemeButton = () => {
    const { value, toggleTheme } = useTheme();

    return (
        <Button
            text={value === "light" ? "Switch to dark" : "Switch to light"}
            onClick={toggleTheme}
        />
    );
};