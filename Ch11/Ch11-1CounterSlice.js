import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name:'counter',
  initialState:{
    value:0,
  },
  reducers:{
    increment2:(state)=>{
      state.value +=2
    },
    decrement2: (state)=>{
      state.value -=2
    },
    increment:(state)=>{
      state.value +=1
    },
    decrement: (state)=>{
      state.value -=1
    },
    incrementByAmount:(state,action)=>{
      state.value += action.payload
    },
    decrementByAmount:(state,action)=>{
      state.value -= action.payload
    },
    multiByAmount:(state,action)=>{
      state.value *= action.payload
    },
    divideByAmount:(state,action)=>{
      state.value /= action.payload
    },
    mul:(state,action)=>{
      state.value = action.payload.multiplier * action.payload.multiplicand * action.payload.multiplicand1;
    },
  },
})

export const { increment2,decrement2,increment,decrement,incrementByAmount,decrementByAmount,multiByAmount,divideByAmount,mul } = counterSlice.actions
export default counterSlice.reducer