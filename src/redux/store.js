import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;
