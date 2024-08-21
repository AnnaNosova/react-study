import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, removeCartItem, selectCartItemAmountById } from '../../redux/ui/cart/cart.js';
import { Counter } from '../counter/counter.jsx';

export const MenuItemCartSection = ({ id }) => {
    const dispatch = useDispatch();
    const amount = useSelector((state) => selectCartItemAmountById(state, id));
    const addItem = () => {
        dispatch(addCartItem(id));
    };
    const removeItem = () => {
        dispatch(removeCartItem(id));
    };

    return <div><Counter value={amount} increment={addItem} decrement={removeItem} min={0} /></div>
}