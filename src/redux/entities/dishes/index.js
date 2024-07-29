import { createSlice } from '@reduxjs/toolkit';
import { Dishes } from '../../../constants/mock';

const initialState = {
    entities: Dishes.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {}),
    ids: Dishes.map(({ id }) => id),
};

export const dishSlice = createSlice({
    name: 'dish',
    initialState,
    selectors: {
        selectDishById: (state, id) => state.entities[id]
    },
});

export const { selectDishById } = dishSlice.selectors;