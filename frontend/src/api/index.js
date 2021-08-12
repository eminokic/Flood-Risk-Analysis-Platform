import axios from 'axios';

const API_URL = window.API_URL || 'http://localhost:8000/';

export const api = () => {
  axios.defaults.withCredentials = true;
  axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
  axios.defaults.xsrfCookieName = 'csrftoken';

  return axios.create({ baseURL: `${API_URL}api/`, timeout: 20000 });
};

#export const getData = (url: string): Promise<any> => {
#  return api()
#    .get(url)
#    .then((response) => {
#      if (response?.status === 200) {
#        return response?.data;
#      }
#
#      return response.data
#    })
#    .catch(({ response }) => {
#      return response;
#    });
#};
#
export default api();
