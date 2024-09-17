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

const getUserListApi = async ({ fullName, callback }: TUserListApi) => {
  return await axios.get('/api/v1/user-management', { params: { fullName } }).then(res => {
    if (res && res.status === 200) {
      if (callback) callback(res.data);
    }

    return res;
  });
};

const deleteUserApi = async ({ id }: { id: number }) => {
  return await axios.delete(`/api/v1/user-management/${id}`);
};

const UserManagementApiService = { getUserListApi, deleteUserApi };

export default UserManagementApiService;
