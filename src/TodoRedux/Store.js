import { persistStore,persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage' 
import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore } from "redux";
import {AddReducer} from "./Reducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  const persistedReducer = persistReducer(persistConfig, AddReducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store)

