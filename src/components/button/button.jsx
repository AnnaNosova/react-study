import styles from './button.module.sass';
import classnames from 'classnames';
import { useTheme } from '../theme-context/hooks';
import { LIGHT_THEME, DARK_THEME } from '../theme-context/constants';

export const Button = ({
                           text,
                           onClick,
                           className,
                       }) => {
    const { theme } = useTheme();

    return (
        <button
            className={ classnames(styles.button, className, {
                [styles.light]: theme === LIGHT_THEME,
                [styles.dark]: theme === DARK_THEME,
            })}
            onClick={onClick}
        >
            {text}
        </button>
    );
};