import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from './favouriteSlice';
import threadReducer from './threadSlice';
import notificationReducer from './notificationSlice';

const store = configureStore({
  reducer: {
    favourites: favouriteReducer,
    threads: threadReducer,
    notification: notificationReducer
  }
})

export default store;