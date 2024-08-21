import styles from '../cart-header/cart-header.module.sass';

export const CartHeader = () => {
    return (
        <div className={styles.header}>
            <div>Dish name</div>
            <div>Dish price</div>
            <div>Amount</div>
            <div>Total</div>
        </div>
    )
}