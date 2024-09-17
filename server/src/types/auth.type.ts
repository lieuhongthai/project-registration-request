import { RoleEnum } from 'src/@core/constants';

export type TUserAuth = {
  id: number;
  email: string;
  fullName: string;
  roles: RoleEnum[];
};
