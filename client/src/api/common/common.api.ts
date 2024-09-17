import axios from 'axios';
import { OracleDepartment } from 'src/types/common.type';
import commonEndpoint from './common.endpoint';

export const getOracleDepartments = async (): Promise<OracleDepartment[]> => {
  const url = commonEndpoint.getOracleDepartments();

  const { data } = await axios.get<OracleDepartment[]>(url);

  return data;
};
