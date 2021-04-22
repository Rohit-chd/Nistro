import axios from 'axios';
const SERVER_API = 'http://nistroapi.medrectech.info/api/';
const api = axios.create({
  baseURL: SERVER_API,
});

export default api;