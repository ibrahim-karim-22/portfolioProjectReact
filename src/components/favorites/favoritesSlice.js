import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        faveList: [],
        faveListTV: [],
    },
    reducers: {
        addToFavorites(state, action) {
            const { item, type } = action.payload;
            let newItem = { ...item };

            if (type === 'movie') {
                state.faveList = [...state.faveList, newItem]; // Using spread operator to create a new array
            } else if (type === 'tvChannel') {
                state.faveListTV = [...state.faveListTV, newItem]; // Using spread operator to create a new array
            }
        },
        removeFromFavorites(state, action) {
            const { item, type } = action.payload;
            // let newItem = { ...item };

            if (type === 'movie') {
                state.faveList = state.faveList.filter(movie => movie.id !== item.id);
            } else if (type === 'tvChannel') {
                state.faveListTV = state.faveListTV.filter(channel => channel.id !== item.id);
            }
        },
    },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
