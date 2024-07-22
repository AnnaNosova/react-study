import { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';
import styles from "./progress-bar.module.sass"

const calculatePosition = () => {
    return (
        ( window.scrollY / ( document.documentElement.scrollHeight - window.innerHeight ) ) * 100
    );
};

const useProgressBar = () => {
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
    const progress = useProgressBar();

    return (
        <div className={styles["progress-bar"]}
             style={{ width: progress }}
        />
    )
};