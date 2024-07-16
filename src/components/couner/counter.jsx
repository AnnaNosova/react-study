export const Counter = ({ value, increment, decrement }) => {
    return (
        <div>
            <button disabled={value >= 5} onClick={increment}>+</button>
            {value}
            <button disabled={value <= 5} onClick={decrement}>-</button>
        </div>
    );
};