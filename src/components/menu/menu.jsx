import { CounterContainer } from '../counter/container';
import styles from "./menu.module.sass"
import { useTheme } from '../theme-context/theme-context.jsx';
import classnames from 'classnames';
import { useAuthorization } from '../auth-context/auth-context.jsx';

export const Menu = ({ menu, className }) => {
    const { value: authValue } = useAuthorization();
    const { value: themeValue } = useTheme();
    return (
        <div>
            <h4 className={classnames(styles.sectionTitle, className, {
                [styles.dark]: themeValue === "dark",
            })}>Menu</h4>
            <ul className={styles.menu}>
                {menu.map(({id, name, price}) => (
                    <li className={styles.item} key={id}>
                        <div>{name} - {price} USD</div>
                        {authValue === "loggedIn" && (<CounterContainer min={0} max={5} step={1}/>)}
                    </li>
                ))}
            </ul>
        </div>
    );
};