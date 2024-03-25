import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        faveList: [],
       
    },
    reducers: {
        addToFavorites(state, action) {
            state.faveList.push(action.payload);
            
        },
        removeFromFavorites(state, action) {
           state.faveList = state.faveList.filter(movie => movie.id !== action.payload.id);
            
        },
    },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;