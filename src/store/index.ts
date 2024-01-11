import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import appSlice from './slices/appSlice';
import searchSlice from './slices/searchSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: { appSlice, searchSlice, userSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<Dispatch>();
