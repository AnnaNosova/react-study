import { CounterContainer } from '../counter/container';
import styles from "./menu.module.sass"

export const Menu = ({ menu }) => {
    return (
        <div>
            <h4 className={"sectionTitle"}>Menu</h4>
            <ul className={styles.menu}>
                {menu.map(({id, name, price}) => (
                    <li className={styles.menuItem} key={id}>
                        <div>{name} - {price} USD</div>
                        <CounterContainer min={0} max={5} step={1}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};