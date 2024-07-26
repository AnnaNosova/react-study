import styles from "./button.module.sass";
import { useTheme } from "../theme-context/theme-context";
import classnames from 'classnames';

export const Button = ({
                           text,
                           onClick,
                           className,
                       }) => {
    const { value: themeValue } = useTheme();

    return (
        <button
            className={classnames(styles.button, className, {
                [styles.light]: themeValue === "light",
                [styles.dark]: themeValue === "dark",
            })}
            onClick={onClick}
        >
            {text}
        </button>
    );
};