import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import Auth from './slices/Auth';

export const store = configureStore({
  reducer: {
    Auth,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
