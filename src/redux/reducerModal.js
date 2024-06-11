import { createSlice } from '@reduxjs/toolkit';


export const ModalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpen: false,
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

});

export const { closeModal, openModal } = ModalSlice.actions;
export const modalReducer = ModalSlice.reducer;
