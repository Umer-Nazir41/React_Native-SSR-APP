import {configureStore} from '@reduxjs/toolkit';
import headerSlice from './reducers/headerSlice';

let reducer = {
  header: headerSlice,
};

export const store = configureStore({
  reducer,
});
