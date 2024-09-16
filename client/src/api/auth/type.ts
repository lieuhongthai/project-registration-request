type ErrCallbackType = (err: { [key: string]: string }) => void;

export type TAuthApi = {
  username: string;
  password: string;

  callback?: () => void;
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
