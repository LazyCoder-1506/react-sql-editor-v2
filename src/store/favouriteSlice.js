import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  favourites: ['select * from MOVIES', 'select * from SERIES']
}

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.favourites.push(action.payload)
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter(query => query != action.payload)
    }
  },
})

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;