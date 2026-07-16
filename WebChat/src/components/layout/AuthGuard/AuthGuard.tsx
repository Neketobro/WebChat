import { Navigate, Outlet } from "react-router";

export function AuthGuard() {
//   localStorage.setItem("accessToken", "Jhon");
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
}
