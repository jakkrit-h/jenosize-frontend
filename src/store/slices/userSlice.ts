import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { UserCredential } from 'firebase/auth';
interface UserState {
  credential: UserCredential | null;
}
const init: UserState = {
  credential: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState: init,
  reducers: {
    setCredential: (state, actions) => {
      return actions.payload;
    },
  },
});
export const userSelector = (state: RootState) => state.userSlice;
export const { setCredential } = userSlice.actions;
export default userSlice.reducer;
