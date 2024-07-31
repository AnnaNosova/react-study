import { useState } from 'react';
import { Counter } from './counter';

export const CounterContainer = ({ min, max, step }) => {
    const [value, setValue] = useState(min);

    const increment = () => setValue((prevState) => Math.min(max, prevState + step));
    const decrement = () => setValue((prevState) => Math.max(min, prevState - step));

    return <Counter value={value} increment={increment} decrement={decrement} min={min} max={max}  />;
};