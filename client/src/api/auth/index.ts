import axios from 'axios';
import { TAuthApi, TVerifyApi } from './type';

const authApi = async ({ username, password, callback }: TAuthApi) => {
  return await axios.post('/api/v1/auth', { username, password }).then(res => {
    if (res && res.status === 200) {
      if (callback) callback(res.data);
    }
  });
};

const verifyApi = async ({ callback, errorCallback }: TVerifyApi) => {
  return await axios
    .post('/api/v1/auth/verify')
    .then(res => {
      if (res && res.status === 200) {
        if (callback) callback(res.data);
      }

      return res;
    })
    .catch(err => errorCallback && errorCallback(err));
};
const AuthApiService = {
  authApi,
  verifyApi,
};
export default AuthApiService;
