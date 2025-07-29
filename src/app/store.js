import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '../features/contentSlice';
import filterReducer from '../features/filterSlice';

export const store = configureStore({
  reducer: {
    content: contentReducer,
    filter: filterReducer,
  },
});