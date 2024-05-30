import { createSlice } from '@reduxjs/toolkit';



export const FormSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: '',
    bookingDate: '',
    message: '',
    submitData: null,
  },
  reducers: {
    submitForm: (state, action) => {
      state.submitData = action.payload;
    },
  },
});


export const { submitForm } = FormSlice.actions;
export const formReducer = FormSlice.reducer;