import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './features/pageSlice';

export const store = configureStore({
  reducer: { pageReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
