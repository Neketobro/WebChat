import { useState } from "react";
import { Input } from "../../components";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      // API request

      await new Promise((resolve) => setTimeout(resolve, 1500));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-screen bg-(--bg) flex items-center justify-center"
    >
      <div className="p-6 w-[23vw] min-w-[300px] bg-(--accent-bg) rounded-sm flex flex-col items-center gap-3">
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
          onChange={(e: any) => setEmail(e.target.value)}
          label="Email or login"
          maxLength={30}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          maxLength={15}
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
            "
        >
          {loading ? "Loading..." : "Login"}
        </button>

        {/* Register */}
        <p className="text-center text-sm text-(--text)">
          Haven't an account?{" "}
          <button
            type="button"
            className="
                text-(--accent)
                hover:underline
              "
          >
            Register
          </button>
        </p>
      </div>
    </form>
  );
}
