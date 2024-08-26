import styles from '../cart-footer/cart-footer.module.sass';

export const CartFooter = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.total}><span className={styles.title}>Total: </span><span className={styles.value}> USD</span></div>
            <button className={styles.btn}>Proceed to checkout</button>
        </div>
    );
}