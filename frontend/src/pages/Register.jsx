import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import AuthLayout from "../components/moxa/AuthLayout.jsx";
import PasswordStrength from "../components/moxa/PasswordStrength.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { apiPost } from "../lib/api.js";
import { useAuth } from "../context/AuthContext.jsx";
import { AFTER_LOGIN_ROUTE } from "./Login.jsx";

function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (form.username.trim().length < 3) errs.username = "Username must be at least 3 characters.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) errs.email = "Enter a valid email.";
    if (form.password.length < 8) errs.password = "Password must be at least 8 characters.";
    if (form.confirm !== form.password) errs.confirm = "Passwords do not match.";
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
      const data = await apiPost("/api/auth/register", {
        username: form.username,
        email: form.email,
        password: form.password,
      });
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
      title="Create your agent profile"
      subtitle="Free to join. Start learning in a minute."
      error={serverError}
      footer={
        <>
          Already have an account? <Link to="/login">Log in</Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <Input
          label="Username"
          name="username"
          icon={User}
          placeholder="CyberAgent007"
          autoComplete="username"
          value={form.username}
          onChange={update}
          error={errors.username}
        />
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
          placeholder="At least 8 characters"
          autoComplete="new-password"
          value={form.password}
          onChange={update}
          error={errors.password}
        />
        <PasswordStrength password={form.password} />
        <Input
          label="Confirm password"
          name="confirm"
          type="password"
          icon={Lock}
          placeholder="Re-enter your password"
          autoComplete="new-password"
          value={form.confirm}
          onChange={update}
          error={errors.confirm}
        />
        <Button type="submit" block disabled={loading}>
          {loading ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </AuthLayout>
  );
}

export default Register;
