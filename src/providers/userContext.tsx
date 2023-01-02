import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface salesProviderProps {
  children: React.ReactNode;
}

export interface iDataLogin {
  email: string;
  password: string;
}

export interface iDataRegister {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
}

interface iUser {
  id: string;
  name: string;
  email: string;
  passwordConfirm: string;
}

interface iResponse {
  accessToken: string;
  user: iUser;
}

interface iUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  userLogin: (
    data: iDataLogin,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userRegister: (
    data: iDataRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  logout: () => void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: salesProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")
    token && navigate("cart")
  }, []);
  
  const userRegister = async (
    data: iDataRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    console.log(data)
    try {
      setLoading(true);
      await api.post<iResponse>("/users", data);
      toast.success("Cadastro efetuado com sucesso", {
        autoClose: 1667
      });
      setTimeout(() => navigate("/"), 1667);
    } catch (error) {
      console.log(error);
      toast.error("Falha no cadastro");
    } finally {
      setLoading(false);
    }
  }

  const userLogin = async (
    data: iDataLogin,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post<iResponse>("/login", data);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      toast.success("Login efetuado", { autoClose: 1667 });
      setTimeout(() => navigate("cart"), 1667);
    } catch (error) {
      console.log(error)
      toast.error("Falha no login");
    } finally {
      setLoading(false);
    }
  };

  function logout() {
    localStorage.clear();
    setUser(null);
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{ user, setUser, userLogin, userRegister, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
