import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './reducerCatalog';
import { modalReducer } from '../redux/reducerModal';
import { formReducer } from '../redux/reducerForm';
import { favoriteReducer } from '../redux/reducerFavorites';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';



const favoritePersistConfig = {
  key: 'favorite',
  storage,
}; 
  

   
export const store = configureStore({
  reducer: {
    favorite: persistReducer(favoritePersistConfig, favoriteReducer),
    adverts: catalogReducer,
    modal: modalReducer,
    form: formReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persister = persistStore(store);
