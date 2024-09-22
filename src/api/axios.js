import axios from 'axios';

const backendURL = import.meta.env.VITE_BACKEND_URL;
const instance = axios.create({
  baseURL: backendURL, // Adjust if your backend is running on a different port
});

export default instance;
