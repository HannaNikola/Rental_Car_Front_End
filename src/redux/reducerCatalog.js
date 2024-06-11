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
     
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const catalogSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentPage: 1,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCatalogApi.pending, handlePending)
      .addCase(fetchCatalogApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        if (action.meta.arg === 1) {
          state.items = action.payload;
        } else {
          state.items = [...state.items, ...action.payload];
        }

        state.currentPage = action.meta.arg;
      })
      .addCase(fetchCatalogApi.rejected, handleRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;