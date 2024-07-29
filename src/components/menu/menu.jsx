import styles from './menu.module.sass';
import classnames from 'classnames';
import { DARK_THEME } from '../theme-context/constants';
import { useTheme } from '../theme-context/hooks';
import { MenuItem } from '../menu-item/menu-item';

export const Menu = ({ ids, className }) => {
    const { theme } = useTheme();

    return (
        <div>
            <h4 className={ classnames(styles.sectionTitle, className, {
                [styles.dark]: theme === DARK_THEME,
            })}>Menu</h4>
            <div className={styles.menu}>
                {ids.map((id) => {
                    return <MenuItem id={id}/>
                })}
            </div>
        </div>
    );
};