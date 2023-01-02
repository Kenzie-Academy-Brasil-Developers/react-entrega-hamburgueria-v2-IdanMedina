import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../providers/userContext";

const AuthRoute = () => {
  const navigate = useNavigate();
  /* const { user } = useContext(UserContext); */
  const token = localStorage.getItem("@TOKEN")
  
  useEffect(() => {
    /* user */token || navigate("/");
  }, []);

  return <>{/* user */token ? <Outlet /> : <span> Carregando...</span>}</>;
};
export default AuthRoute;
