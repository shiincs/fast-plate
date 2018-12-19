import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(function(config) {
  // const token = localStorage.getItem('token');
  // if (token) {
  //   config.headers = config.headers || {};
  //   config.headers['Authorization'] = 'Bearer ' + token;
  // }

  const token = 'YWRtaW4tZmU6ZGplbWFsc2Zl';
  // const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = 'Basic ' + token;
  }
  return config;
});

export default api;
