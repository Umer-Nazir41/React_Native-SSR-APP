import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  aTags: [],
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      state.aTags.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addNewItem} = headerSlice.actions;

export default headerSlice.reducer;
