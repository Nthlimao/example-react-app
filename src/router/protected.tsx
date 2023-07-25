import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth";

export const ProtectedRoute = ({ children }: any) => {
  const {
    state: { user, token },
  } = useAuthContext();

  if (!user && !token) {
    return <Navigate to="/login" />;
  }

  return children;
};
