// ** React Imports
import { createContext, useEffect, useState, ReactNode, useContext } from 'react';

// ** React Router Import
import { useLocation, useNavigate } from 'react-router-dom';

// ** Types
import { AuthValuesType, LoginParams, ErrCallbackType } from './types';
import { useCookies } from 'react-cookie';
import { TAuthApi, TUserAuth } from 'src/api/auth/type';
import AuthApiService from 'src/api/auth';

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: false,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<TUserAuth | null>(null);
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);

  // ** Hooks
  const location = useLocation();
  const pathname = location.pathname;
  const returnUrl: string = location.state?.returnUrl || '';
  const navigate = useNavigate();

  const [cookies, set, remove] = useCookies(['__auth_']);

  const c = useCookies();

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      setLoading(true);
      const callback = (data: TUserAuth | null) => {
        if (data) setUser(data);
        else setUser(null);
        setLoading(false);
      };

      const errorCallback = () => {
        setLoading(false);
        setUser(null);
        navigate('/login', { replace: true });
      };

      AuthApiService.verifyApi({ callback, errorCallback });
    };
    initAuth();
  }, []);

  const handleLogin = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
    const callback = (data: TUserAuth) => {
      setUser({ ...data });
      setLoading(false);
      const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/';
      navigate(redirectURL as string, { replace: true });
    };
    setLoading(true);
    await AuthApiService.authApi({ ...params, callback, errorCallback });
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
