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
            if (type === 'movie') {
              state.faveList.push({ id: item.id, name: item.name }); 
            } else if (type === 'tvChannel') {
              state.faveListTV.push({ id: item.id, name: item.name }); 
            }
            console.log(`Added to favorites: ${item.name} `, action );
            
        },
        removeFromFavorites(state, action) {
            const { item, type } = action.payload;
            if (type === 'movie') {
              state.faveList = state.faveList.filter(movie => movie.id !== item.id);
            } else if (type === 'tvChannel') {
              state.faveListTV = state.faveListTV.filter(channel => channel.id !== item.id);
            } 
            console.log(`Removed from favorites: ${item.name} `, action)       
        },
    },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;