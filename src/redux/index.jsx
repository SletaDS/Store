import { configureStore,combineReducers } from '@reduxjs/toolkit';
import Reducers from './Slice.jsx'
import TrashReducer from './SliceTrash.jsx'
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
 import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
 const rootReducer=combineReducers({
main:Reducers,
trash:TrashReducer
 })


 const persistConfig = {
     key: 'reducer',
     storage,
     blacklist:["main",]
  };
 const presistedReducer = persistReducer(persistConfig,rootReducer  );
 const store = configureStore({
  reducer:presistedReducer,
  middleware:[thunk]});
export   const persistor = persistStore(store);
export default store
