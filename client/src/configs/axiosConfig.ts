import axios from 'axios';
import toast from 'react-hot-toast';
import { t } from 'i18next';

axios.defaults.baseURL = '';
axios.defaults.timeout = 10000;
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      console.error('Error response - axios.interceptors.response:', error.response);
      switch (error.response.status) {
        case 400:
          toast.error(t('BAD_REQUEST'));
          break;
        case 401:
          toast.error(t('IDM_AUTHENTICATED_ERROR')); // ** Unauthorized
          break;
        case 403:
          toast.error(t('FORBIDDEN'));
          break;
        case 404:
          toast.error(t('NOT_FOUND'));
          break;
        case 500:
          toast.error(t('IDM_INTERNAL_SERVER_ERROR'));
          break;
        default:
          toast.error(t('IDM_INTERNAL_SERVER_ERROR'));
          break;
      }
    } else if (error.request) {
      console.error('Error request:', error.request);
      toast.error(t('IDM_INTERNAL_SERVER_ERROR'));
    } else {
      console.error('Error message:', error.message);
      toast.error(t('IDM_INTERNAL_SERVER_ERROR'));
    }

    return Promise.reject(error);
  },
);

// const instance = axios.create({});

// export default instance;
