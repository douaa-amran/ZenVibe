import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMentalHealthImages = createAsyncThunk(
  "images/fetchMentalHealthImages",
  async (query, numImages = 5) => {
    const accessKey = '-LKReSN-1GQfp3pPPmPBl1eZi9IXAnkppOaX6Fb9rtE'; // Replace with your Unsplash access key
    const apiUrl = `https://api.unsplash.com/search/photos?page=${numImages}&query=${query}`;
    
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Client-ID ${accessKey}`
        }
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        return data.results.map(result => result.urls.regular);
      } else {
        throw new Error(`Failed to fetch mental health images: ${data.errors}`);
      }
    } catch (error) {
      console.error('Error fetching mental health images:', error.message);
      throw error;
    }
  }
);

export const fetchProfilePictures = createAsyncThunk(
  "images/fetchProfilePictures",
  async (query, numImages = 5) => {
    // Fetch profile pictures using a different API or modify the URL accordingly
    // This is a placeholder for demonstration purposes
    const accessKey = '-LKReSN-1GQfp3pPPmPBl1eZi9IXAnkppOaX6Fb9rtE'; // Replace with your Unsplash access key
    const apiUrl = `https://api.unsplash.com/search/photos?page=${numImages}&query=${query}`;
    
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Client-ID ${accessKey}`
        }
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        return data.results.map(result => result.urls.regular);
      } else {
        throw new Error(`Failed to fetch profile pictures: ${data.errors}`);
      }
    } catch (error) {
      console.error('Error fetching profile pictures:', error.message);
      throw error;
    }
  }
);

const ImagesSlice = createSlice({
  name: "images",
  initialState: {
    mentalHealthImages: [],
    profilePictures: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMentalHealthImages.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMentalHealthImages.fulfilled, (state, action) => {
        state.mentalHealthImages = action.payload;
        state.loading = false;
      })
      .addCase(fetchMentalHealthImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProfilePictures.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfilePictures.fulfilled, (state, action) => {
        state.profilePictures = action.payload;
        state.loading = false;
      })
      .addCase(fetchProfilePictures.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ImagesSlice.reducer;
