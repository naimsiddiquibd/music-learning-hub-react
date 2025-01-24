import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://musichub.fatmonk.studio/api",
});

// Add a request interceptor to attach the token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Authorization Header Set:", config.headers.Authorization); // Check if the token is attached
    }
    return config;
  },
  (error) => {
    console.error("Request Interceptor Error:", error);
    return Promise.reject(error);
  }
);


export default axiosInstance;
