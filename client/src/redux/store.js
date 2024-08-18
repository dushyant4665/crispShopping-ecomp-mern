import { configureStore } from '@reduxjs/toolkit';
import crispReducer from './crispSlice';
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  version:1,
  storage,
}


const persistedReducer = persistReducer(persistConfig, crispReducer);

export const store = configureStore({
  reducer: {
    crisp: persistedReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:
      false,
    
  })
});

export let persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
