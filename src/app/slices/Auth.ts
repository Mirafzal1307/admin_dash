import { createAsyncThunk, createDraftSafeSelector, createSelector, createSlice } from '@reduxjs/toolkit';
import { api } from '../api';
import { RootState } from '../rootReducer';

// A token gets returned which we will save in local storage
export const login = createAsyncThunk(
  'admin/login',
  async (details: { name: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await api.post('admin/login', {
        name: details.name,
        password: details.password,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.admin.name);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export type User = {
  _id: string;
  email: string;
  fullName: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Slice
export type SliceState = {
  isLoggedIn: boolean;
  token: null | string;
  user: null | User;
  status: 'idle' | 'pending' | 'error' | 'fulfilled';
  error: { message: null; type: null } | { message: string; type: string };
};

const initialState: SliceState = {
  isLoggedIn: false,
  token: null,
  user: null,
  status: 'idle',
  error: { message: null, type: null },
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: {
      reducer(state) {
        state.isLoggedIn = false;
        state.token = null;
        state.user = null;
      },
      prepare(payload) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        return { payload, meta: {}, error: false };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = 'pending';
      state.error.message = null;
      state.error.type = null;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.status = 'fulfilled';
    });
    builder.addCase(login.rejected, (state, action: any) => {
      state.status = 'error';
      state.error.message = action.payload.response.data.message;
      state.error.type = 'login';
    });
  },
});
export default slice.reducer;

// Actions
export const { setUser, logout } = slice.actions;

// Selectors
export const getAuth = (state: RootState) => state.auth;

// export const selectIsAuthLoading = createSelector(getAuth, (auth) => auth.status === 'pending');
export const selectIsAuthLoading = createDraftSafeSelector(getAuth, (auth) => auth.status === 'pending');
export const selectAuthStatus = createSelector(getAuth, (auth) => auth.status);
export const selectAuthError = createSelector(getAuth, (auth) => auth.error);

// export const selectIsUserLoggedIn = createSelector(getAuth, (auth) => auth.isLoggedIn);
export const selectIsUserLoggedIn = createDraftSafeSelector(getAuth, (auth) => auth.isLoggedIn);

// export const selectUser = createSelector(getAuth, (auth) => auth.user);
export const selectUser = createDraftSafeSelector(getAuth, (auth) => auth.user);
