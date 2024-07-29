import { Button } from '../button/button';
import { useTheme } from '../theme-context/hooks';
import { LIGHT_THEME } from '../theme-context/constants'

export const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            text={theme === (LIGHT_THEME) ? 'Switch to dark' : 'Switch to light'}
            onClick={toggleTheme}
        />
    );
};