import { createSlice } from '@reduxjs/toolkit';
import {
  authUserLogin,
  authUserRegister,
  authUserLogout,
  authRefreshUser,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const setUserData = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const resetUserData = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authUserRegister.fulfilled](state, action) {
      setUserData(state, action);
    },
    [authUserRegister.rejected](state) {
      resetUserData(state);
    },
    [authUserLogin.fulfilled](state, action) {
      setUserData(state, action);
    },
    [authUserLogin.rejected](state) {
      resetUserData(state);
    },
    [authUserLogout.fulfilled](state, _) {
      resetUserData(state);
    },
    [authRefreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [authRefreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authRefreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
