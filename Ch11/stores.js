import { configureStore } from '@reduxjs/toolkit';
import mulReducer from '../src/mulSlice';
import addReducer from '../src/addSlice';
import divideReducer from './divideSlice';
import decreseReducer from './decreseSlice';

export default configureStore({
  reducer:{
    mul:mulReducer,
    add:addReducer,
    divide:divideReducer,
    decrese:decreseReducer,
    
  },
})