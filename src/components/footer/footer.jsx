import classnames from 'classnames';
import styles from '../footer/footer.module.sass';
import { useTheme } from '../theme-context/hooks';
import { DARK_THEME } from '../theme-context/constants';

export const Footer = ({ className }) => {
    const { theme } = useTheme();

    return <footer className={ classnames(className, {
        [styles.dark]: theme === DARK_THEME,
    })}>
        footer
    </footer>;
};