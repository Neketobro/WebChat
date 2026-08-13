import { useState } from "react";
import { Input } from "../../components";
import { useNavigate } from "react-router";
import { fetchRegister } from "../../api/auth.ts";

type User = {
  username: string;
  email: string;
  password: string;
};

export function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const [inputErrorTextUsername, setInputErrorTextUsername] =
    useState<string>("");

  const [inputErrorTextEmail, setInputErrorTextEmail] = useState<string>("");

  const [inputErrorTextPassword, setInputErrorTextPassword] =
    useState<string>("");

  const [inputErrorTextPasswordR, setInputErrorTextPasswordR] =
    useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !passwordRepeat.trim()
    ) {
      setInputErrorTextUsername("Username is required");
      setInputErrorTextEmail("Email is required");
      setInputErrorTextPassword("Password is required");
      setInputErrorTextPasswordR("Password is required");
      return;
    }

    if (!username.trim())
      return setInputErrorTextUsername("Username is required");
    if (!email.trim()) return setInputErrorTextEmail("Email is required");
    if (!password.trim())
      return setInputErrorTextPassword("Password is required");
    if (!passwordRepeat.trim())
      return setInputErrorTextPasswordR("Password is required");

    if (password !== passwordRepeat) {
      setInputErrorTextPassword("password does not match");
      setInputErrorTextPasswordR("password does not match");
      return;
    }

    const data: User = {
      username,
      email,
      password,
    };

    try {
      setLoading(true);
      await fetchRegister(data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } finally {
      setLoading(false);
    }
  };

  // add REGAX & COLOR FOR INPUT (error, warning, ok)

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <div className="p-6 w-[23vw] min-w-[300px] md:min-w-[400px] bg-(--accent-bg) rounded-sm flex flex-col items-center gap-3">
        <span>
          <h1>Login</h1>
        </span>

        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Enter your username"
          autoComplete="username"
          value={username}
          onChange={(e: any) => {
            setUsername(e.target.value);
            setInputErrorTextUsername("");
          }}
          label="Username"
          maxLength={30}
          minLength={5}
          errorText={inputErrorTextUsername}
        />

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
          maxLength={15}
          minLength={5}
          errorText={inputErrorTextPassword}
        />
        <Input
          id="passwordrepeat"
          name="passwordrepeat"
          type="password"
          placeholder="Repeat your password"
          autoComplete="current-password"
          value={passwordRepeat}
          onChange={(e) => {
            setPasswordRepeat(e.target.value);
            setInputErrorTextPasswordR("");
          }}
          label="Repeat password"
          maxLength={15}
          minLength={5}
          errorText={inputErrorTextPasswordR}
        />

        <button
          type="submit"
          disabled={loading}
          onClick={() => {
            handleSubmit;
          }}
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
          {loading ? "Loading..." : "Register"}
        </button>

        {/* Register */}
        <p className="text-center text-sm text-(--text)">
          Have an account?{" "}
          <button
            onClick={() => navigate("/auth/login")}
            type="button"
            className="
                text-(--accent)
                hover:underline
                cursor-pointer
              "
          >
            Login
          </button>
        </p>
      </div>
    </form>
  );
}
