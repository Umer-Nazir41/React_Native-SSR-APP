import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  aTags: [],
  isHeader: false,
  defaultPath: '/',
  // body,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      state.aTags.push(action.payload);
    },
    setHeaderTrue: (state, action) => {
      state.isHeader = true;
    },
    setHeaderFalse: (state, action) => {
      state.isHeader = false;
    },
    setDefaultPath: (state, action) => {
      state.defaultPath = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addNewItem, setHeaderFalse, setHeaderTrue} = headerSlice.actions;

export default headerSlice.reducer;
