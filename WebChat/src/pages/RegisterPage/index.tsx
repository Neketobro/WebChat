import { useState } from "react";
import { Input } from "../../components";
import { useNavigate } from "react-router";

export function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordRepeat) {
      console.log("undefiend password");
      return;
    }
    console.log("password confrim");

    try {
      setLoading(true);

      // API request

      await new Promise((resolve) => setTimeout(resolve, 1500));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
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
        <Input
          id="passwordrepeat"
          name="passwordrepeat"
          type="password"
          placeholder="Repeat your password"
          autoComplete="current-password"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
          label="Repeat password"
          maxLength={15}
        />

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
              "
          >
            Login
          </button>
        </p>
      </div>
    </form>
  );
}
