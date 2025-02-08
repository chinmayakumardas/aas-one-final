// src/redux/authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { loginApi, resetPasswordApi } from '@/api/AuthApi';  // Import the API methods

// Initial state
const initialState = {
  token: Cookies.get('auth_token') || null,
  loading: false,
  error: null,
};

// Login thunk
export const login = createAsyncThunk('/auth/login', async ({ email, password }) => {
  try {
    const token = await loginApi(email, password);  // Call the login API
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
});

// Reset Password thunk
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ email }) => {
    try {
      const message = await resetPasswordApi(email);  // Call the reset password API
      return message;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Auth slice definition
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      Cookies.remove('auth_token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        Cookies.set('auth_token', action.payload, { expires: 7 });
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions
export const { logout } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
