import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import appSlice from './slices/appSlice';

export const store = configureStore({
  reducer: { appSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
