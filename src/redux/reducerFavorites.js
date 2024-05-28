import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({

    name: 'favorite',
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorite(state, action) {
            state.favorites.push(action.payload);
        },
        deleteFavorite(state, action) {
            state.favorites = state.favorites.filter(id => id !== action.payload)
        }
}
})

export const { addFavorite , deleteFavorite} = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;