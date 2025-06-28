import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8228/api/v1/devcanvas/users/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error.response?.data?.message || "An error occurred");
  }
);
