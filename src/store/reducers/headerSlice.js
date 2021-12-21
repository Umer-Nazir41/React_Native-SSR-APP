import React from 'react';
import {createSlice} from '@reduxjs/toolkit';
import {View} from 'react-native';

const initialState = {
  aTags: [],
  isHeader: false,
  defaultPath: '/',
  body: <View></View>,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      let isExist = false;
      state.aTags.forEach(element => {
        if (element.link === action.payload.link) {
          isExist = true;
        }
      });
      if (!isExist) {
        state.aTags.push(action.payload);
      }
      //state.aTags.push(action.payload);
    },
    setHeaderTrue: (state, action) => {
      state.isHeader = true;
    },
    setBody: (state, action) => {
      state.body = action.payload;
    },
    setDefaultPath: (state, action) => {
      state.defaultPath = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addNewItem, setBody, setHeaderTrue} = headerSlice.actions;

export default headerSlice.reducer;
