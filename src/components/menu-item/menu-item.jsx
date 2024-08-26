import styles from './menu-item.module.sass';
import { useAuthorization } from '../auth-context/hooks';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/index';
import { MenuItemCartSection } from '../menu-item-cart-section/menu-item-cart-section';
import { Link, useParams } from 'react-router-dom';

export const MenuItem = ({ id }) => {
    const { restaurantId } = useParams();
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
                <Link to={`/dish/${id}`} state={{ item, restaurantId }} className={styles.link}>
                    <div>{name} - {price && <span>{price} USD</span>}</div>
                    <div className={styles.ingredients}>
                        {Boolean(ingredients.length) &&
                            ingredients.map((ingredient) => (
                                <span key={ingredient}>{ingredient} </span>
                            ))}
                    </div>
                </Link>
                {isAuthorized && (<MenuItemCartSection id={id} />)}
            </div>
        </div>
    );
};