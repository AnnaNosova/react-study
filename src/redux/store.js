import { configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './entities/restaurant';
import { reviewSlice } from './entities/review';
import { userSlice } from './entities/user';
import { dishSlice } from './entities/dishes';
import { cartSlice } from './ui/cart/cart.js';


export const store = configureStore( {
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
        [reviewSlice.name]: reviewSlice.reducer,
        [userSlice.name]: userSlice.reducer,
        [dishSlice.name]: dishSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
    },
});