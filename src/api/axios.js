import axios from 'axios';

const BACKEND_URL = import.meta.env.BACKEND_URL;

const instance = axios.create({
  baseURL: `${BACKEND_URL}`, // Adjust if your backend is running on a different port
});

export default instance;
