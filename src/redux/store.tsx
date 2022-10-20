import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { createLogger } from 'redux-logger';
import { WeatherApi } from '../apis/weatherAPIs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import weatherReducer from './reducers/weatherReducer';

const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ["weatherReducer"], //data to be saved in phone cache even after app closes
  storage: AsyncStorage,
}

//declare multiple reducers of the ap
const reducers = combineReducers({
  [WeatherApi.reducerPath]: WeatherApi.reducer,
  "weatherReducer": weatherReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({

  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    }).concat([
      //logger for debugging
      createLogger(),
      WeatherApi.middleware,
    ])

});

export const persistor = persistStore(store)

setupListeners(store.dispatch)
