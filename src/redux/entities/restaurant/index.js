import { createSlice } from '@reduxjs/toolkit';
import { Restaurants } from '../../../constants/mock';

const initialState = {
    entities: Restaurants.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {}),
    ids: Restaurants.map(({ id }) => id),
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsIds: (state) => state.ids,
    },
})

export const {  selectRestaurantById, selectRestaurantsIds } = restaurantSlice.selectors