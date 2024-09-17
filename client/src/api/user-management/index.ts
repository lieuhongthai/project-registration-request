import axios from 'axios';

export type TUserData = {
  id: number;
  fullName: string;
  email: string;
  roles: string[];
};
export type TUserListApi = {
  fullName?: string;
  callback?: (data: TUserData[]) => void;
};

type TCallback = () => void;

const getRolesApi = async (): Promise<string[]> =>
  axios
    .get('/api/v1/user-management/roles/name/all')
    .then(res => res.data)
    .catch(() => []);

const getUserListApi = async ({ fullName, callback }: TUserListApi) => {
  return await axios.get('/api/v1/user-management', { params: { fullName } }).then(res => {
    if (res && res.status === 200) {
      if (callback) callback(res.data);
    }

    return res;
  });
};

const getUserByIdApi = async (id: string | number) => {
  return await axios
    .get(`/api/v1/user-management/${id}`)
    .then(res => res.data)
    .catch(() => null);
};

const createUserApi = async (data: TUserData, callback?: TCallback) => {
  return await axios.post('/api/v1/user-management', data).then(res => {
    if (res && res.status === 201) {
      callback && callback();
    }

    return res;
  });
};

const updateUserApi = async (id: string | number, data: TUserData, callback?: TCallback) => {
  return await axios.patch(`/api/v1/user-management/${id}`, data).then(res => {
    if (res && res.status === 200) {
      callback && callback();
    }

    return res;
  });
};

const deleteUserApi = async ({ id }: { id: number }) => {
  return await axios.delete(`/api/v1/user-management/${id}`);
};

const UserManagementApiService = { getRolesApi, getUserListApi, getUserByIdApi, createUserApi, updateUserApi, deleteUserApi };

export default UserManagementApiService;
