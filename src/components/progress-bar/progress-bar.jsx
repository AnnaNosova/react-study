import { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';
import styles from "./progress-bar.module.sass"
import { useTheme } from '../theme-context/theme-context.jsx';
import classnames from 'classnames';

const calculatePosition = () => {
    return (
        ( window.scrollY / ( document.documentElement.scrollHeight - window.innerHeight ) ) * 100
    );
};

const progressBarWidth = () => {
    const [value, setValue] = useState("0%");

    useEffect(() => {
        const handler = throttle(20, () => {
            const progress = calculatePosition();

            setValue( `${ progress }%` );
        });

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return value;
}

export const ProgressBar = () => {

    const { value: themeValue } = useTheme();
    const progress = progressBarWidth();

    return (
        <div className={ classnames(styles.progressBar, {[styles.dark]: themeValue === "dark"})}
             style={{ width: progress }}
        />
    )
};