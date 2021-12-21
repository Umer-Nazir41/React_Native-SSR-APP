import {configureStore} from '@reduxjs/toolkit';
import headerSlice from './reducers/headerSlice';
import {getDefaultMiddleware} from '@reduxjs/toolkit';

let reducer = {
  header: headerSlice,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({serializableCheck: false}),
});
