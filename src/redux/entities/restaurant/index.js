import { createSlice } from '@reduxjs/toolkit';
import { Restaurants } from '../../../constants/mock';

const initialState = {
    entities: Restaurants.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {}),
    idsNames: Restaurants. map(({id, name}) => {
        return {
            id: id,
            name: name,
        }
    })
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantIdsNames: (state) => state.idsNames,
    },
})

export const { selectRestaurantById, selectRestaurantIdsNames } = restaurantSlice.selectors