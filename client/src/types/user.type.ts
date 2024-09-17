import { Role } from './auth.type';

export interface User {
  id: number;
  fullName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  roles: Role[];
}
