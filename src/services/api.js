import axios from 'axios';

// best practice is to keep base url in .env filess
const baseURL = 'https://my-json-server.typicode.com';
export default () => {
  let axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // request interceptor for any additional logics
  axiosInstance.interceptors.request.use(
    function (req) {
      return req;
    },
    err => {
      return Promise.reject(err);
    },
  );

  // response interceptor for any additional logics
  axiosInstance.interceptors.response.use(
    res => {
      return res.data;
    },
    async error => {
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};
