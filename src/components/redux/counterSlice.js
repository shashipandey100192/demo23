import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {

      state.value += 10
    },
    decrement: (state) => {
      state.value -= 5
    },
    
  },
})


export const { increment, decrement} = counterSlice.actions

export default counterSlice.reducer