import axios from 'axios';
import { TAuthApi } from './type';

const authApi = async ({ username, password }: TAuthApi) => {
  return axios.post('/api/v1/auth', { username, password }).then(res => {
    if (res && res.status === 200) {
    }
  });
};

const AuthApiService = {
  authApi,
};
export default AuthApiService;
