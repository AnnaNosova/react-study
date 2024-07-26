import { ThemeButton } from '../theme-button/theme-button.jsx';
import { useTheme } from '../theme-context/theme-context.jsx';
import classnames from 'classnames';
import styles from "./header.module.sass";
import { AuthButton } from '../auth-button/auth-button.jsx';


export const Header = ({ className }) => {
    const { value: themeValue } = useTheme();

    return (
        <header className={classnames(className, {
            [styles.dark]: themeValue === "dark",
        })}>
            <div><ThemeButton /></div>
            <div className={styles.title}>Restaurants list</div>
            <div className={styles.auth}><AuthButton /></div>
        </header>
    );
};