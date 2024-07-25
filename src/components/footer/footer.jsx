import classnames from 'classnames';
import styles from '../footer/footer.module.sass';
import { useTheme } from '../theme-context/theme-context.jsx';

export const Footer = ({className}) => {

    const { value: themeValue } = useTheme();

    return <footer className={classnames(className, {
        [styles.dark]: themeValue === "dark",
    })}>
        footer
    </footer>;
};