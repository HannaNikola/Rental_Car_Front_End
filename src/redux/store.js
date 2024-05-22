import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './reducerCatalog';
import { modalReducer } from '../redux/reducerModal';
import { formReducer } from '../redux/reducerForm';
import { favoriteReducer } from '../redux/reducerFavorites';

export const store = configureStore({
  reducer: {
    adverts: catalogReducer,
    modal: modalReducer,
    form: formReducer,
    favorite: favoriteReducer,
  },
});

