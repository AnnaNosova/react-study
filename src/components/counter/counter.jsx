import styles from "./counter.module.sass"

export const Counter = ({ value, increment, decrement, min, max }) => {
    return (
        <div>
            <button className={styles.counter} disabled={value <= min} onClick={decrement}>-</button>
            <span className={styles.value}>  {value}  </span>
            <button className={styles.counter} disabled={value >= max} onClick={increment}>+</button>
        </div>
    );
};