import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "./UserContext";

function RequireAuth({ children, allowedRoles }) {
  const { user, accessToken } = useContext(UserContext);
  const location = useLocation();

  if (!user || !accessToken) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RequireAuth;
