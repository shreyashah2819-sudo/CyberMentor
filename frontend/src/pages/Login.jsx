import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import AuthLayout from "../components/moxa/AuthLayout.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { apiPost } from "../lib/api.js";
import { useAuth } from "../context/AuthContext.jsx";

// Where to go after login / register.
export const AFTER_LOGIN_ROUTE = "/dashboard";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) errs.email = "Enter a valid email.";
    if (!form.password) errs.password = "Password is required.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setLoading(true);
    try {
      const data = await apiPost("/api/auth/login", form);
      login(data.user);
      navigate(AFTER_LOGIN_ROUTE);
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back, agent"
      subtitle="Log in to continue your training."
      error={serverError}
      footer={
        <>
          New here? <Link to="/register">Create an account</Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <Input
          label="Email"
          name="email"
          type="email"
          icon={Mail}
          placeholder="you@example.com"
          autoComplete="email"
          value={form.email}
          onChange={update}
          error={errors.email}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          icon={Lock}
          placeholder="Your password"
          autoComplete="current-password"
          value={form.password}
          onChange={update}
          error={errors.password}
        />
        <Button type="submit" block disabled={loading}>
          {loading ? "Logging in..." : "Log in"}
        </Button>
      </form>
    </AuthLayout>
  );
}

export default Login;
