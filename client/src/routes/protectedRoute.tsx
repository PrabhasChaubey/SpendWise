import { useTypedSelector } from "@/app/hook";
import { Navigate, Outlet } from "react-router-dom";
import { AUTH_ROUTES } from "./common/routePath";

const ProtectedRoute = () => {
  const accessToken = useTypedSelector((state) => state.auth);
  const userId = useTypedSelector((state) => state.auth.user?.id);
  
  if (accessToken && !userId) return <Outlet />;

  return <Navigate to={AUTH_ROUTES.SIGN_IN} replace />;
};

export default ProtectedRoute;