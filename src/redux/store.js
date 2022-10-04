import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contactSlise';
import filterContactRaduser from './filterSlise';
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

import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterContactRaduser,
});

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
