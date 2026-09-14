import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  FlaskConical,
  User,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        <button className="sidebar-item active">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </button>

        <button className="sidebar-item">
          <BookOpen size={20} />
          <span>Cyber Academy</span>
        </button>

        <button className="sidebar-item">
          <Trophy size={20} />
          <span>Challenge Arena</span>
        </button>

        <button className="sidebar-item">
          <FlaskConical size={20} />
          <span>Cyber Lab</span>
        </button>

        <button className="sidebar-item">
          <User size={20} />
          <span>Profile</span>
        </button>

        <button className="sidebar-item">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;