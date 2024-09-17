import { RoleEnum } from 'src/@core/constants';

declare module 'express' {
  interface Request {
    user: {
      id: number;
      email: string;
      fullName: string;
      roles: RoleEnum[];
    };
  }
}
export {};
