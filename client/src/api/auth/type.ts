type ErrCallbackType = (err?: { [key: string]: string }) => void;

export enum RoleEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
  APPROVER = 'APPROVER',
}

export type TUserAuth = {
  id: number;
  email: string;
  roles: RoleEnum[];
};

export type TAuthApi = {
  username: string;
  password: string;

  callback?: (data: TUserAuth) => void;
  errorCallback?: ErrCallbackType;
};

export type TVerifyApi = {
  callback?: (data: TUserAuth | null) => void;
  errorCallback?: ErrCallbackType;
};

export type UserDataType = {
  id: number;
  level: number;
  employeeNumber: string;
  fullName: string;
  roles: { name: string }[];
  email: string;
  companyId: number;
  companyName: string;
  departmentId: number;
  departmentCode: string;
  departmentName: string;
  flagSkill: number;

  // roleViewer: string;
};
