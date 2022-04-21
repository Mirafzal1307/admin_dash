import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/Auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
