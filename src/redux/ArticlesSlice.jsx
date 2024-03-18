import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchArticles = createAsyncThunk(
    'articles/fetchArticles',
    async (_, { rejectWithValue }) => {
        const options = {
            method: 'GET',
            url: 'https://wiki-briefs.p.rapidapi.com/search',
            params: {
              q: 'Mental disorders',
              topk: '20'
            },
            headers: {
              'X-RapidAPI-Key': '14ef059b6cmshc8e3bc3d040af8dp13f2aajsn0101e520b61d',
              'X-RapidAPI-Host': 'wiki-briefs.p.rapidapi.com'
            }
          };
      try {
            const response = await axios.request(options);
            return response.data.summary;
          }
      catch (error) {
        console.error('Error fetching articles:', error);
        return rejectWithValue(error.message);
      }
    }
  );
  

// Create the articles slice
const ArticlesSlice = createSlice({
  name: 'articles',
  initialState : {
    articles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the slice reducer
export default ArticlesSlice.reducer;
