import styles from './dish.module.sass';
import { useTheme } from '../theme-context/hooks';
import classnames from 'classnames';
import { DARK_THEME } from '../theme-context/constants';
import { useAuthorization } from '../auth-context/hooks';
import { Link, useLocation } from 'react-router-dom';
import { MenuItemCartSection } from '../menu-item-cart-section/menu-item-cart-section.jsx';

export const Dish = () => {
    const { theme } = useTheme();
    const location = useLocation();
    const { item, restaurantId } = location.state;
    const {
        auth: { isAuthorized },
    } = useAuthorization();

    item.ingredients.map((item) => (console.log(item)));

    return (
        <div className={classnames({
            [styles.dark]: theme === DARK_THEME,
        })}>
            <div className={styles.dish}>
                <div className={styles.inner}>
                    <div className={styles.img}>
                        <img src={`../src/images/dish.jpg`} alt={item.name} />
                    </div>
                    <div>
                        {item.name} - {item.price && <span>{item.price} USD</span>}
                        <div className={styles.ingredients}>
                            {Boolean(item.ingredients.length) &&
                                item.ingredients.map((ingredient) => (
                                    <span key={ingredient}>{ingredient} </span>
                                ))}
                        </div>
                    </div>
                </div>
                {isAuthorized && (<MenuItemCartSection id={item.id} />)}
            </div>
            <Link to={`/restaurants/${restaurantId}/menu`} className={styles.link}>
                Back
            </Link>
        </div>
    );
};