import styles from './menu-item.module.sass';
import { CounterContainer } from '../counter/container';
import { useAuthorization } from '../auth-context/hooks';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/index';

export const MenuItem = ({ id }) => {
    const item = useSelector((state) => selectDishById(state, id));
    const { name, price, ingredients } = item || {};
    const {
        auth: { isAuthorized },
    } = useAuthorization();

    if (!name) {
        return null;
    }

    return (
        <div>
            <div className={styles.item}>
                <div>
                    <div>{name} - {price && <span>{price} USD</span>}</div>
                    <div className={styles.ingredients}>
                        {Boolean(ingredients.length) &&
                            ingredients.map((item) => (
                                <span>{item} </span>
                            ))}
                    </div>
                </div>
                {isAuthorized && (<CounterContainer min={0} max={5} step={1}/>)}
            </div>
        </div>
    );
};