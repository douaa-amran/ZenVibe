import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
      const options = {
        method: 'GET',
        url: 'https://ai-random-user-generator.p.rapidapi.com/random-user',
        params: {
          results: '7',
          gender: 'female',
          nation: 'en_US'
        },
        headers: {
          'X-RapidAPI-Key': '6ce3a55a01mshf2903b0bf7c2a2dp16a90ajsn53fd164caf15',
          'X-RapidAPI-Host': 'ai-random-user-generator.p.rapidapi.com'
        }
      };
      try {
            const response = await axios.request(options);
            return response.data.results;
          }
      catch (error) {
        console.error('Error fetching users:', error);
        return rejectWithValue(error.message);
      }
    }
  );
  

// Create the articles slice
const UsersSlice = createSlice({
  name: 'users',
  initialState : {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the slice reducer
export default UsersSlice.reducer;
