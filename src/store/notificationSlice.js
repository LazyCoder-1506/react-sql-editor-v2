import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  notification: {
    message: "",
    open: false
  }
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.notification.message = action.payload
      state.notification.open = true
    },
    hideNotification: (state) => {
      state.notification.open = false
    }
  }
})

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;