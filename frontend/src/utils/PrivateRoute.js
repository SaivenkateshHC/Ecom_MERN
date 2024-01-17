import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    return () => {};
  }, [localStorage.getItem("accessToken")]);

  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};
export default PrivateRoute;
