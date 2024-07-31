import { createSlice } from '@reduxjs/toolkit';

export const divideSlice = createSlice({
  name:'counter',
  initialState:{
    value3:0,
  },
  reducers:{
    divide:(state,action)=>{
      state.value3 = action.payload.div1 / action.payload.div2;
    },
  },
})

export const { divide } = divideSlice.actions
export default divideSlice.reducer