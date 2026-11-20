import { Shield } from "lucide-react";
import Navbar from "../Navbar.jsx";
import Card from "../Card.jsx";

// Shared frame for the Login and Register pages.
function AuthLayout({ title, subtitle, error, footer, children }) {
  return (
    <>
      <Navbar />
      <div className="auth-wrap">
        <Card className="auth-card">
          <Shield size={30} color="var(--cyan)" />
          <h1>{title}</h1>
          <p className="muted">{subtitle}</p>
          {error && (
            <div className="alert alert-error" role="alert">
              {error}
            </div>
          )}
          {children}
          <p className="auth-foot">{footer}</p>
        </Card>
      </div>
    </>
  );
}

export default AuthLayout;
