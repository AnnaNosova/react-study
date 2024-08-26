import {  useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/index';
import styles from './cart-item.module.sass';
import { selectCartItemAmountById} from '../../redux/ui/cart/cart.js';
import { MenuItemCartSection } from '../menu-item-cart-section/menu-item-cart-section.jsx';

export const CartItem = ({ id }) => {
    const amount = useSelector((state) => selectCartItemAmountById(state, id));
    const item = useSelector((state) => selectDishById(state, id));
    const { name, price } = item || {};
    const total = price*amount;

    return (
        <div className={styles.item}>
            <div>{name}</div>
            <div>{price} USD</div>
            <div><MenuItemCartSection id={id} /></div>
            <div>{total} USD</div>
        </div>
    );
};