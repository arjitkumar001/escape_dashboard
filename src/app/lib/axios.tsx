// lib/axiosInstance.ts

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // Define your base API URL in environment variables
//   baseURL: `https://116.202.210.102:8059`,
  timeout: 10000, // Set a timeout for requests
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request configuration (e.g., add authentication token)
    const token = localStorage.getItem("token"); // Or wherever you store the token
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle the request error
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can modify the response before returning it
    return response;
  },
  (error) => {
    // Handle the response error
    if (error.response?.status === 401) {
      // For example, handle 401 unauthorized errors by redirecting to the login page
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
