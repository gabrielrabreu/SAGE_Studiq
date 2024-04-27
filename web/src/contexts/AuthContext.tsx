import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import localStorageUtils, { User } from "../utils/local-storage.utils";
import { LoginResult } from "../services/auth.service";

interface AuthContextProps {
  user: User | undefined;
  login: (data: LoginResult) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();

  const login = useCallback(
    (data: LoginResult) => {
      const user = {
        name: data.userName,
        email: data.userEmail,
        avatarUrl: data.userAvatarUrl,
      };

      localStorageUtils.setAccessToken(data.accessToken);
      localStorageUtils.setUser(user);

      setUser(user);

      navigate("/", { replace: true });
    },
    [navigate]
  );

  const logout = useCallback(() => {
    localStorageUtils.removeAll();

    setUser(undefined);

    navigate("/auth/login", { replace: true });
  }, [navigate]);

  const loadStore = useCallback(() => {
    const storedUser = localStorageUtils.getUser();
    if (storedUser) {
      setUser(storedUser);
      navigate("/");
    }
  }, [navigate]);

  const contextValue = useMemo(() => {
    return { user, login, logout };
  }, [user, login, logout]);

  useEffect(() => {
    loadStore();
  }, [loadStore]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
