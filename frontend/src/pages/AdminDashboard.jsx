
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Dashboard");
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Aastha Suthar", email: "aastha@example.com", role: "Student", status: "Active" },
    { id: 2, name: "Rahul Patel", email: "rahul@example.com", role: "Student", status: "Active" },
    { id: 3, name: "Priya Shah", email: "priya@example.com", role: "Student", status: "Pending" },
    { id: 4, name: "Dev Mehta", email: "dev@example.com", role: "Student", status: "Active" },
  ];

  const menuItems = [
    { name: "Dashboard", icon: "▦", path: "/admin" },
    { name: "User Management", icon: "♙", path: "/admin/users" },
    { name: "Content Management", icon: "▤", path: "/admin/content" },
    { name: "Simulation Management", icon: "◈", path: "/admin/simulations" },
    { name: "Analytics", icon: "▥", path: "/analytics" },
    { name: "Settings", icon: "⚙", path: "/settings" },
  ];

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <div className="admin-brand-icon">🛡️</div>
          <div>
            <h2>CyberMentor</h2>
            <span>ADMIN PANEL</span>
          </div>
        </div>

        <p className="admin-menu-label">MAIN MENU</p>

        <nav className="admin-nav">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`admin-nav-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => {
                setActivePage(item.name);
                if (item.path !== "/admin") navigate(item.path);
              }}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-mini-avatar">A</div>
          <div className="admin-mini-info">
            <strong>Administrator</strong>
            <span>Admin Account</span>
          </div>
          <button
            className="admin-logout"
            onClick={() => navigate("/")}
            title="Go to home"
          >
            ↗
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <p className="admin-breadcrumb">CyberMentor / Admin</p>
            <h1>Admin Dashboard</h1>
            <p className="admin-subtitle">
              Monitor users, learning activities and platform performance.
            </p>
          </div>
          <div className="admin-top-actions">
            <span className="admin-online-dot"></span>
            <span>System Online</span>
            <div className="admin-top-avatar">A</div>
          </div>
        </header>

        <section className="admin-welcome">
          <div>
            <span className="admin-welcome-tag">ADMIN OVERVIEW</span>
            <h2>Welcome back, Admin! 👋</h2>
            <p>Here is what's happening on your CyberMentor platform.</p>
          </div>
          <div className="admin-welcome-shield">🛡️</div>
        </section>

        <section className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="admin-stat-top">
              <span>Total Users</span><span className="admin-stat-icon purple">♙</span>
            </div>
            <h2>1,248</h2>
            <p><span className="admin-growth">↑ 12%</span> from last month</p>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-top">
              <span>Active Users</span><span className="admin-stat-icon pink">◎</span>
            </div>
            <h2>986</h2>
            <p><span className="admin-growth">↑ 8%</span> from last month</p>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-top">
              <span>Simulations</span><span className="admin-stat-icon blue">◈</span>
            </div>
            <h2>3,572</h2>
            <p><span className="admin-growth">↑ 18%</span> from last month</p>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-top">
              <span>Challenges Completed</span><span className="admin-stat-icon orange">✓</span>
            </div>
            <h2>2,846</h2>
            <p><span className="admin-growth">↑ 15%</span> from last month</p>
          </div>
        </section>

        <section className="admin-content-grid">
          <div className="admin-panel admin-users-panel">
            <div className="admin-panel-heading">
              <div>
                <h3>Recent Users</h3>
                <p>Manage recently registered users</p>
              </div>
              <button
                className="admin-outline-button"
                onClick={() => navigate("/admin/users")}
              >
                View All →
              </button>
            </div>

            <input
              className="admin-search"
              type="search"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <div className="admin-user-cell">
                          <div className="admin-user-avatar">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <strong>{user.name}</strong>
                            <span>{user.email}</span>
                          </div>
                        </div>
                      </td>
                      <td>{user.role}</td>
                      <td>
                        <span className={`admin-status ${user.status.toLowerCase()}`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {filteredUsers.length === 0 && (
                    <tr>
                      <td colSpan="3" className="admin-empty">
                        No matching users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="admin-panel admin-quick-panel">
            <div className="admin-panel-heading">
              <div>
                <h3>Quick Actions</h3>
                <p>Manage your platform</p>
              </div>
            </div>

            <button
              className="admin-action-card"
              onClick={() => navigate("/admin/users")}
            >
              <span className="admin-action-icon purple">♙</span>
              <span><strong>Manage Users</strong><small>View and manage accounts</small></span>
              <span className="admin-action-arrow">→</span>
            </button>

            <button
              className="admin-action-card"
              onClick={() => navigate("/admin/content")}
            >
              <span className="admin-action-icon pink">▤</span>
              <span><strong>Manage Content</strong><small>Learning materials and quizzes</small></span>
              <span className="admin-action-arrow">→</span>
            </button>

            <button
              className="admin-action-card"
              onClick={() => navigate("/admin/simulations")}
            >
              <span className="admin-action-icon blue">◈</span>
              <span><strong>Manage Simulations</strong><small>Cyber attack practice modules</small></span>
              <span className="admin-action-arrow">→</span>
            </button>

            <button
              className="admin-action-card"
              onClick={() => navigate("/analytics")}
            >
              <span className="admin-action-icon orange">▥</span>
              <span><strong>View Analytics</strong><small>Track platform performance</small></span>
              <span className="admin-action-arrow">→</span>
            </button>
          </div>
        </section>

        <footer className="admin-footer">
          © 2026 CyberMentor · Admin Dashboard
          <span>Stay safe. Stay cyber smart. 💜</span>
        </footer>
      </main>
    </div>
  );
}

export default AdminDashboard;
