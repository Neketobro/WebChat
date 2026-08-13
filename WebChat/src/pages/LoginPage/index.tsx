import { useEffect, useState } from "react";
import { Input } from "../../components";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginUser } from "../../store/auth/loginSlice.ts";
import type { UserLogin } from "../../types/auth.types.ts";
// import { fetchLogin } from "../../api/auth.ts";

export function LoginPage() {
  const count = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("count ->", count);
  }, [count, dispatch]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const [inputErrorTextEmail, setInputErrorTextEmail] = useState<string>("");
  const [inputErrorTextPassword, setInputErrorTextPassword] =
    useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() && !password.trim()) {
      setInputErrorTextEmail("Email is required");
      setInputErrorTextPassword("Password is required");
      return;
    }

    if (!email.trim()) return setInputErrorTextEmail("Email is required");
    if (!password.trim())
      return setInputErrorTextPassword("Password is required");

    const data: UserLogin = {
      email,
      password,
    };

    try {
      setLoading(true);

      const result = await dispatch(loginUser(data)).unwrap(); // loginSlice(data)

      // if (result && result.user.id) return navigate(`/${result.user.id}`);
      if (result && result.user.id) return navigate("/");

      console.log("RESULT - > ", result);

      // await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      const message = error as string;
      setInputErrorTextEmail(message);
      setInputErrorTextPassword(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <div className="p-6 w-[23wv] min-w-[300px] md:min-w-[400px] bg-(--accent-bg) rounded-sm flex flex-col items-center gap-3">
        <span className="gap-4">
          <h1>Login</h1>
        </span>

        <Input
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email or login"
          autoComplete="username"
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
            setInputErrorTextEmail("");
          }}
          label="Email or login"
          maxLength={30}
          minLength={5}
          errorText={inputErrorTextEmail}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setInputErrorTextPassword("");
          }}
          label="Password"
          maxLength={20}
          minLength={5}
          errorText={inputErrorTextPassword}
        />

        <div className="w-full flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe((prev) => !prev)}
              className="w-4 h-4"
            />

            {/* MAKE COMPONENT CHECKBOX */}

            <span className="text-sm text-(--text)">Remember me</span>
          </label>

          <button
            type="button"
            className="
                text-sm
                text-(--accent)
                hover:underline
                cursor-pointer
              "
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
              w-full
              h-12
              rounded-md
              bg-(--accent)
              text-white
              font-semibold
              transition
              hover:opacity-90
              disabled:opacity-50
              disabled:cursor-not-allowed
              cursor-pointer
            "
        >
          {loading ? "Loading..." : "Login"}
        </button>

        {/* Register */}
        <p className="text-center text-sm text-(--text)">
          Haven't an account?{" "}
          <button
            onClick={() => navigate("/auth/register")}
            type="button"
            className="
                text-(--accent)
                hover:underline
                cursor-pointer
              "
          >
            Register
          </button>
        </p>
      </div>
    </form>
  );
}
