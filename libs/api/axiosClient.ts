import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const axiosClient = axios.create({
  baseURL: API_URL,  
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    // Thêm token vào header nếu cần
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
