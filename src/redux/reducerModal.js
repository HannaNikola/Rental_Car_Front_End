import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { handlePending } from 'helpers/helpers';
import { handleRejected } from 'helpers/helpers';

axios.defaults.baseURL = 'https://66277c47b625bf088c0881db.mockapi.io/adverts';

export const fetchModal = createAsyncThunk(
  'modal/getDetails',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/${_id}`);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const ModalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpen: false,
    details: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    closeModal: state => {
      state.isModalOpen = false;
      state.showReviews = false;
    },
    openModal: state => {
      state.isModalOpen = true;
    },

  },
 
  extraReducers: builder => {
    builder
      .addCase(fetchModal.pending, handlePending)
      .addCase(fetchModal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isModalOpen = true;
        state.details = action.payload;
      })
      .addCase(fetchModal.rejected, handleRejected);
  },
});

export const { closeModal, openModal} = ModalSlice.actions;
export const modalReducer = ModalSlice.reducer;
