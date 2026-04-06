import { useTypedSelector } from "@/app/hook";
import { Navigate, Outlet } from "react-router-dom";
import { PROTECTED_ROUTES } from "./common/routePath";

const AuthRoute = () => {
  const accessToken = useTypedSelector((state) => state.auth);
  const userId = useTypedSelector((state) => state.auth.user?.id);

  if (!accessToken && !userId ) return <Outlet />;

  return <Navigate to={PROTECTED_ROUTES.OVERVIEW} replace />;
};

export default AuthRoute;