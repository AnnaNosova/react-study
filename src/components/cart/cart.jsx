import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/ui/cart/cart';
import { CartItem } from '../cart-item/cart-item';
import classnames from 'classnames';
import styles from './cart.module.sass';
import { DARK_THEME } from '../theme-context/constants'
import { useTheme } from '../theme-context/hooks.js';
import { CartHeader } from '../cart-header/cart-header';
import { CartFooter } from '../cart-footer/cart-footer';

export const Cart = () => {
    const items = useSelector(selectCartItems);
    const { theme } = useTheme();

    return (
        <div className={classnames(styles.cart, {
            [styles.dark]: theme === DARK_THEME,
        })}>
            <h4 className={classnames(styles.title, {
                [styles.dark]: theme === DARK_THEME,
            })}>Your cart</h4>
            <div className={styles.items}>
                {items.length ?
                    <div>
                        <CartHeader />
                        <div>{items.map(({ itemId }) => {
                            return ( <CartItem id={itemId}  /> )
                            })}
                        </div>

                        <CartFooter />
                    </div>
                : <div className={styles.empty}>Your cart is empty</div>}
            </div>
        </div>
    )
};