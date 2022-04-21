import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Set the AUTH token for any request
api.interceptors.request.use(function (config: any) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : null;
  return config;
});
