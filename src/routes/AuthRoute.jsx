import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";


const AuthRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN")
  
  useEffect(() => {
    token || navigate("/");
  }, []);

  return <>{token ? <Outlet /> : <span> Carregando...</span>}</>;
};
export default AuthRoute;
