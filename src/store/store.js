import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from './favouriteSlice';
import threadReducer from './threadSlice';

const store = configureStore({
  reducer: {
    favourites: favouriteReducer,
    threads: threadReducer,
  }
})

export default store;