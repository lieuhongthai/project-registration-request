import { User } from './user.type';

export type ProjectRegistration = {
  id: number;
  name: string;
  department: string;
  purpose: string;
  scopeOfUse: string;
  demand: string;
  contactInformation: string;
  implementationDate: string;
  status: string;
  isDraft: null;
  createdAt: Date;
  updatedAt: Date;
  user: User;
};
