import { configureStore } from '@reduxjs/toolkit';
import logger from "redux-logger";
import { userReducer } from '../components/Login/userSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
