import axios from 'axios';
import userEndpoint from './user.endpoint';
import { User } from 'src/types/user.type';

export const getUsers = async (): Promise<User[]> => {
  const url = userEndpoint.getList();

  const { data } = await axios.get<User[]>(url);

  return data;
};
