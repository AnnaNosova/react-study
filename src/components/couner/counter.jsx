export const Counter = ({ value, increment, decrement }) => {
    return (
        <div>
            <button disabled={value <= 0} onClick={decrement}>-</button>
            {value}
            <button disabled={value >= 5} onClick={increment}>+</button>
        </div>
    );
};