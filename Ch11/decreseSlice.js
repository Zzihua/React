import { createSlice } from '@reduxjs/toolkit';

export const decreseSlice = createSlice({
  name:'counter',
  initialState:{
    value4:0,
  },
  reducers:{
    decrese:(state,action)=>{
      state.value4 = Number(action.payload.deend) -Number(action.payload.demand);
    },
  },
})

export const { decrese } = decreseSlice.actions
export default decreseSlice.reducer