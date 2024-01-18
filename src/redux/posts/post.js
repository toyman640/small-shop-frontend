import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_POST_URL = 'http://127.0.0.1:3000/api/v1/posts';

const initialState = {
  posts : [],
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get(GET_POST_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
})

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchPosts.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        categories: action.payload,
      }))
      .addCase(fetchPosts.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.err.message,
      }));
  },
})

export default postSlice.reducer;