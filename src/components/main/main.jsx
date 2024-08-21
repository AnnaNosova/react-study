import { Link } from 'react-router-dom'
import styles from './main.module.sass'
import classnames from 'classnames';
import { DARK_THEME } from '../theme-context/constants.js';
import { useTheme } from '../theme-context/hooks.js';

export const Main = () => {
    const { theme } = useTheme();

    return (
        <div className={classnames(styles.main, {
            [styles.dark]: theme === DARK_THEME,
        })}>
            <Link
                to={'/restaurants'}
                className={styles.btn}
            >
                Go to restaurants
            </Link>
        </div>
    );
};