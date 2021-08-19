import axios from 'axios';

// This variable locks down the URL for API to be called from.
const API_URL = window.API_URL || 'http://localhost:8000/';

/**
 * API Setup Function
 * 
 * @returns result : axios resulting instance
 */
export const api = () => {
  axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
  axios.defaults.xsrfCookieName = 'csrftoken';

  var result = axios.create({ baseURL: `${API_URL}api/`, timeout: 20000 });
  return result;
};

export default api();
