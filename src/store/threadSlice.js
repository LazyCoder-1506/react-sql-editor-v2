import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  threads: [
    {
      id: 1,
      name: 'thread1',
      history: [
        'select * from MOVIES',
        'select * from CARTOONS'
      ]
    }, {
      id: 2,
      name: 'thread2',
      history: [
        'select * from CARS',
        'select * from CARTOONS'
      ]
    }
  ]
}

const threadSlice = createSlice({
  name: 'thread',
  initialState,
  reducers: {
    addQueryToHistory: (state, action) => {
      const threadIndex = state.threads.findIndex(thread => thread.id === action.payload.threadId)
      state.threads[threadIndex].history.push(action.payload.query)
    },
    addThread: (state, action) => {
      state.threads.push({
        id: action.payload.id,
        name: action.payload.name,
        history: []
      })
    },
    removeThread: (state, action) => {
      state.threads = state.threads.filter(thread => thread.id != action.payload)
    },
  }
})

export const { addQueryToHistory, addThread, removeThread } = threadSlice.actions;

export default threadSlice.reducer;