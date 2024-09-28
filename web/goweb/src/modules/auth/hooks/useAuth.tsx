import { createContext, useContext, useMemo, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

interface AuthContextType {
  user: object;
  login: (data: object) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
  userData: object;
}

export const AuthProvider = ({ children, userData }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage('user', userData);
  const navigate = useNavigate();

  const login = async (data: object) => {
    setUser(data);
    navigate('/profile', { replace: true });
  };

  const logout = () => {
    setUser({});
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
