import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

// Wrap a page element in <RequireAuth> to send logged-out visitors to /login.
function RequireAuth({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default RequireAuth;
