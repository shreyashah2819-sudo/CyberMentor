import { Link, NavLink, useNavigate } from "react-router-dom";
import { Shield, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";
import Button from "./Button.jsx";

// `landing` shows the marketing links (Home / Features / How it works) used on the Landing page.
function Navbar({ landing = false }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-logo">
            <Shield size={20} />
          </span>
          <span className="brand-text">
            <span className="brand-name">
              CYBER<b>MENTOR</b>
            </span>
            <small>LEARN. DEFEND. LEVEL UP.</small>
          </span>
        </Link>

        <nav className="nav-links">
          {landing ? (
            <>
              <a href="#top" className="active">Home</a>
              <a href="#features">Features</a>
              <a href="#how">How it works</a>
              <NavLink to="/academy">Academy</NavLink>
              <NavLink to="/mentor">AI Mentor</NavLink>
              {user && <NavLink to="/dashboard">Dashboard</NavLink>}
            </>
          ) : (
            <>
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/academy">Academy</NavLink>
              <NavLink to="/mentor">AI Mentor</NavLink>
              {user && (
                <>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <NavLink to="/challenges">Challenges</NavLink>
                  <NavLink to="/progress">Progress</NavLink>
                  <NavLink to="/badges">Badges</NavLink>
                </>
              )}
            </>
          )}
        </nav>

        <div className="nav-actions">
          {user ? (
            <>
              <span className="nav-user">Agent {user.username}</span>
              <Button variant="ghost" onClick={handleLogout} aria-label="Log out">
                <LogOut size={16} /> Log out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">
                Log in
              </Link>
              <Link to="/register" className="btn btn-primary">
                Join free
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
