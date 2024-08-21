import styles from './menu.module.sass';
import { MenuItem } from '../menu-item/menu-item';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/index.js';

export const Menu = () => {
    const { restaurantId } = useParams();
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );
    const { menu } = restaurant;

    return (
        <div className={styles.menu}>
            {menu.map((id) => {
                return <MenuItem id={id}/>
            })}
        </div>
    );
};