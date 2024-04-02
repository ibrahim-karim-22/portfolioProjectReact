import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../components/Login/userSlice';
import { favoritesReducer } from '../components/favorites/favoritesSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
  },
});
