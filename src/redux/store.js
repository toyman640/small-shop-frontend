import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import postsReducer from './posts/post'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    posts: postsReducer,
  },
});

export default store;
