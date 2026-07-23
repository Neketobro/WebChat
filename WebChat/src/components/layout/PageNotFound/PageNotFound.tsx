import { NavLink } from "react-router";

export function PageNotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
      <h1>404</h1>
      <h2>Oops... Page not found</h2>
      <p className="text-(--text-h)">We don't know how you ended up here, but you should gp away now.</p>
      <NavLink to="/" className="text-(--text-h) hover:text-(--text) hover:underline  hover:underline-offset-2" replace>Go back {'->'}</NavLink>
    </div>
  );
}