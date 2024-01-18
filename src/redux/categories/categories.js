import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_CAT_URL = 'http://127.0.0.1:3000/api/v1/categories';

const initialState = {
  categories: [],
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  try {
    const response = await axios.get(GET_CAT_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const createCategories = createAsyncThunk('newCategory', async (newCategory, thunkAPI) => {
  try {
    await axios.post(GET_CAT_URL, newCategory, { mode: 'cors' });
    const response = await thunkAPI.dispatch(fetchCategories());
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchCategories.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        categories: action.payload,
      }))
      .addCase(fetchCategories.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.err.message,
      }));
  },
});

export default categoriesSlice.reducer;
