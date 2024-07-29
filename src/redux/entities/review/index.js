import { createSlice } from '@reduxjs/toolkit';
import { Reviews } from '../../../constants/mock';

const initialState = {
    entities: Reviews.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {}),
    ids: Reviews.map(({ id }) => id),
};

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    selectors: {
        selectReviewById: (state, id) => state.entities[id],
    },
});

export const { selectReviewById } = reviewSlice.selectors;