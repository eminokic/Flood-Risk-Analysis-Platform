import axios from 'axios';

const API_URL = window.API_URL || 'http://localhost:8000/';

export const api = () => {
  axios.defaults.withCredentials = true;
  axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
  axios.defaults.xsrfCookieName = 'csrftoken';

  return axios.create({ baseURL: `${API_URL}api/`, timeout: 20000 });
};

export default api();
