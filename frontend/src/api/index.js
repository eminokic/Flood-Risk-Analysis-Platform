import axios from 'axios';

const API_URL = window.API_URL || 'http://localhost:8000/';

export const api = () => {
//   axios.defaults.withCredentials = true;
  axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
  axios.defaults.xsrfCookieName = 'csrftoken';

  return axios.create({ baseURL: `${API_URL}api/`, timeout: 20000 });
};

export default api();

// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.getData = void 0;
// exports.getData = function (url) {
//     return api()
//         .get(url)
//         .then(function (response) {
//         if ((response === null || response === void 0 ? void 0 : response.status) === 200) {
//             return response === null || response === void 0 ? void 0 : response.data;
//         }
//         return response.data;
//     })
//         .catch(function (_a) {
//         var response = _a.response;
//         return response;
//     });
// };


// export const getData = (url: string): Promise<any> => {
//       return api()
//         .get(url)
//         .then((response) => {
//           if (response?.status === 200) {
//             return response?.data;
//     #      }
//     #
//     #      return response.data
//     #    })
//     #    .catch(({ response }) => {
//     #      return response;
//     #    });
//     #};
//     #

