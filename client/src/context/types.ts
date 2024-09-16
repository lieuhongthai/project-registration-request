import { TUserAuth } from 'src/api/auth/type';

export type ErrCallbackType = (err?: { [key: string]: string }) => void;

export type LoginParams = {
  username: string;
  password: string;
};

export type AuthValuesType = {
  loading: boolean;
  logout: () => void;
  user: TUserAuth | null;
  setLoading: (value: boolean) => void;
  setUser: (value: TUserAuth | null) => void;
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void;
};
