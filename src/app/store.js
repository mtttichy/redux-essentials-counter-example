import { configureStore } from '@reduxjs/toolkit';
import {reducer as counterReducer} from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
