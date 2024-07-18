export const Counter = ({ value, increment, decrement, min, max }) => {
    return (
        <div>
            <button disabled={value <= min} onClick={decrement}>-</button>
            <span>  {value}  </span>
            <button disabled={value >= max} onClick={increment}>+</button>
        </div>
    );
};