import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, registration } from './authOperations';

export const authSlice = createSlice({
  name: 'authorization',
  initialState: {
    user: { name: null, email: null },
    isLoggedin: false,
    token: '',
    isRefreshing: false,
    isError: false,
  },

  reducers: {
    resetError: state => {
      state.isError = false;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(registration.pending, state => {
        state.isLoggedin = false;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedin = true;
        state.isError = false;
      })
      .addCase(registration.rejected, state => {
        state.isLoggedin = false;
        state.isError = true;
      })

      .addCase(login.pending, state => {
        state.isLoggedin = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedin = true;
        state.isError = false;
      })
      .addCase(login.rejected, state => {
        state.isLoggedin = false;
        state.isError = true;
      })

      .addCase(logout.pending, state => {
        state.isLoggedin = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedin = false;
        state.isError = false;
      })
      .addCase(logout.rejected, state => {
        state.isLoggedin = true;
        state.isError = true;
      })

      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedin = true;
        state.isError = false;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedin = false;
        state.isError = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { resetError } = authSlice.actions;
