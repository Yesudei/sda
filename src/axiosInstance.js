import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Ensure your backend is running on this port
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper to set the token header dynamically
export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

export default axiosInstance;