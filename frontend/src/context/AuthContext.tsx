import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/api/v1/auth/me");
        setUser(res.data);
      } catch {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext)!;
};