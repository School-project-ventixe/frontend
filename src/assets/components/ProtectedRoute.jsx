import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("jwtToken");
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
