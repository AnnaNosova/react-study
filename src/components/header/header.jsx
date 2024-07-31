import styles from './header.module.sass';
import classnames from 'classnames';
import { DARK_THEME } from '../theme-context/constants';
import { ThemeButton } from '../theme-button/theme-button';
import { useTheme } from '../theme-context/hooks';
import { UserSection } from '../user-section/user-section';

export const Header = ({ className }) => {
    const { theme } = useTheme();

    return (
        <header className={classnames(className, {
            [styles.dark]: theme === DARK_THEME,
        })}>
            <div><ThemeButton /></div>
            <div className={styles.title}>Restaurants list</div>
            <div className={styles.auth}><UserSection /></div>
        </header>
    );
};