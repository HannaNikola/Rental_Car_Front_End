import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './reducerCatalog';
import { modalReducer } from '../redux/reducerModal';

export const store = configureStore({
  reducer: {
    adverts: catalogReducer,
    modal: modalReducer,
  },
});

