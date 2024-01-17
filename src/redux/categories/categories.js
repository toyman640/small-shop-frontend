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

const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default CategoriesSlice.reducer;
