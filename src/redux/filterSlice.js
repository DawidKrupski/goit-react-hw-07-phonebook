import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setFilterAction: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
