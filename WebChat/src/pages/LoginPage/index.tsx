import { useState } from "react";
import { Input } from "../../components";
import { useNavigate } from "react-router";
import { loginUser } from "../../api/httpClient";

type UserLog = {
  email: string;
  password: string;
};

export function LoginPage() {
  const navigate = useNavigate();

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
      console.log("undefiend email or password");
      setInputErrorTextEmail("Email is required");
      setInputErrorTextPassword("Password is required");
      return;
    }

    if (!email.trim()) return setInputErrorTextEmail("Email is required");
    if (!password.trim())
      return setInputErrorTextPassword("Password is required");

    const data: UserLog = {
      email,
      password,
    };

    try {
      setLoading(true);

      const result = await loginUser(data);

      if (!result.success) {
        console.log("result ->", result);
      }

      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (e) {
      console.log("error in front ->", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <div className="p-6 w-[23wv] min-w-[300px] md:min-w-[400px] bg-(--accent-bg) rounded-sm flex flex-col items-center gap-3">
        <span>
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
          onClick={() => handleSubmit}
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
