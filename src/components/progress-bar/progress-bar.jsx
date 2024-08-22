import styles from './progress-bar.module.sass';
import classnames from 'classnames';
import { DARK_THEME } from '../theme-context/constants';
import { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';
import { useTheme } from '../theme-context/hooks';



const calculatePosition = () => {
    return (
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
};

const ProgressBarWidth = () => {
    const [value, setValue] = useState('0%');

    useEffect(() => {
        const handler = throttle(20, () => {
            const progress = calculatePosition();

            setValue(`${ progress }%`);
        });

        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return value;
}

export const ProgressBar = () => {

    const { theme } = useTheme();
    const progress = ProgressBarWidth();

    return (
        <div className={ classnames(styles.progressBar, {[styles.dark]: theme === DARK_THEME})}
             style={{ width: progress }}
        />
    )
};