import { createSlice } from '@reduxjs/toolkit';
import { Restaurants } from '../../../constants/mock';

const initialState = {
    entities: Restaurants.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {}),
    ids: Restaurants.map(({id}) => id),
    names: Restaurants.map(({name}) => name),
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantIds: (state) => state.ids,
        selectRestaurantNames: (state) => state.names,
    },
})

export const { selectRestaurantById, selectRestaurantIds, selectRestaurantNames } = restaurantSlice.selectors