import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({

    name: 'favorite',
    initialState: {
        filter: '',
    },
    reducers: {
        addFavorite(state, action) {
            return {
                ...state,
                filter:action.payload
            }
    }
}
})

export const { addFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;