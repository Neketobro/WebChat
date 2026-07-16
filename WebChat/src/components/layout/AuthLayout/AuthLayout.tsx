import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="w-full h-screen bg-(--bg) flex items-center justify-center">
      <Outlet />
    </div>
  );
}
