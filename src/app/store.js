import { configureStore } from '@reduxjs/toolkit';
import logger from "redux-logger";
import { userReducer } from '../components/Login/userSlice';
import { favoritesReducer } from '../components/favorites/favoritesSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
  },
});
