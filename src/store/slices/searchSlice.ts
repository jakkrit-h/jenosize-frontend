import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

const init: string = '';
const searchSlice = createSlice({
  name: 'search',
  initialState: init,
  reducers: {
    setSearch: (state, actions) => {
      return actions.payload;
    },
  },
});
export const searchSelector = (state: RootState) => state.searchSlice;
export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
