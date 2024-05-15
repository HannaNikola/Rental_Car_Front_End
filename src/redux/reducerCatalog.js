import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { handlePending } from 'helpers/helpers';
import { handleRejected } from 'helpers/helpers';

axios.defaults.baseURL = 'https://66277c47b625bf088c0881db.mockapi.io/adverts';

export const fetchCatalogApi = createAsyncThunk(
  'adverts/getAllAdverts',
  async (page, thunkAPI) => {
    try {
      const limit = 4;

      const response = await axios.get('/adverts', {
        params: {
          limit: limit,
          page: page,
        },
      });
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const catalogSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCatalogApi.pending, handlePending)
      .addCase(fetchCatalogApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchCatalogApi.rejected, handleRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;
