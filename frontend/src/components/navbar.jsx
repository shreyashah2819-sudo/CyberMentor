import { Shield } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo">
          <Shield size={22} />
        </div>

        <span>CyberMentor</span>
      </div>

      <div className="navbar-actions">
        <button className="navbar-icon-button" aria-label="Notifications">
          🔔
        </button>

        <div className="navbar-avatar">
          S
        </div>
      </div>
    </nav>
  );
}

export default Navbar;