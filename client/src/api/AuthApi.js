// src/api/authApi.js

import axiosInstance from '@/lib/axiosInstance';  // Import the configured axios instance

// Login API call
export const loginApi = async (email, password) => {
  try {
    const response = await axiosInstance.post('/login', { email, password });
    return response.data.token;  // Assuming the token is returned in response.data.token
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Login failed');
  }
};

// Reset Password API call
export const resetPasswordApi = async (email) => {
  try {
    const response = await axiosInstance.post('/reset-password', { email });
    return response.data.message;  // Assuming a message is returned upon success
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Reset password failed');
  }
};
