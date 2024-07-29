import { createSlice } from '@reduxjs/toolkit';
import { Users } from '../../../constants/mock';

const initialState = {
    entities: Users.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {}),
    ids: Users.map(({ id }) => id),
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    selectors: {
        selectUserById: (state, id) => state.entities[id],
    },
});

export const { selectUserById } = userSlice.selectors;