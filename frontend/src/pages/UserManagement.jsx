
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserManagement.css";

function UserManagement() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    { id: 1, name: "Aastha Suthar", email: "aastha@example.com", role: "Student", status: "Active" },
    { id: 2, name: "Rahul Patel", email: "rahul@example.com", role: "Student", status: "Active" },
    { id: 3, name: "Priya Shah", email: "priya@example.com", role: "Student", status: "Pending" },
    { id: 4, name: "Dev Mehta", email: "dev@example.com", role: "Student", status: "Inactive" },
    { id: 5, name: "Neha Joshi", email: "neha@example.com", role: "Admin", status: "Active" },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState("Student");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const addUser = (e) => {
    e.preventDefault();

    if (!newName.trim() || !newEmail.trim()) return;

    const alreadyExists = users.some(
      (user) => user.email.toLowerCase() === newEmail.trim().toLowerCase()
    );

    if (alreadyExists) {
      alert("This email already exists!");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: newName.trim(),
      email: newEmail.trim(),
      role: newRole,
      status: "Active",
    };

    setUsers((previousUsers) => [...previousUsers, newUser]);
    setNewName("");
    setNewEmail("");
    setNewRole("Student");
    setShowForm(false);
  };

  const toggleStatus = (id) => {
    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  const deleteUser = (id) => {
    const confirmed = window.confirm("Are you sure you want to remove this demo user?");
    if (!confirmed) return;

    setUsers((previousUsers) =>
      previousUsers.filter((user) => user.id !== id)
    );
  };

  const activeCount = users.filter((user) => user.status === "Active").length;
  const pendingCount = users.filter((user) => user.status === "Pending").length;
  const inactiveCount = users.filter((user) => user.status === "Inactive").length;

  return (
    <div className="um-page">
      <header className="um-header">
        <div className="um-brand">
          <div className="um-brand-icon">🛡️</div>
          <div>
            <h2>CyberMentor</h2>
            <span>USER MANAGEMENT</span>
          </div>
        </div>

        <button className="um-back-button" onClick={() => navigate("/admin")}>
          ← Admin Dashboard
        </button>
      </header>

      <main className="um-main">
        <div className="um-heading">
          <div>
            <p className="um-breadcrumb">Admin / User Management</p>
            <h1>User Management</h1>
            <p className="um-description">
              View, search and manage CyberMentor user accounts.
            </p>
          </div>

          <button
            className="um-primary-button"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "✕ Cancel" : "+ Add User"}
          </button>
        </div>

        {showForm && (
          <form className="um-form" onSubmit={addUser}>
            <h3>Add New User</h3>

            <div className="um-form-grid">
              <label>
                Full Name
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  required
                />
              </label>

              <label>
                User Role
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                >
                  <option value="Student">Student</option>
                  <option value="Admin">Admin</option>
                </select>
              </label>

              <button className="um-primary-button" type="submit">
                Save User
              </button>
            </div>
          </form>
        )}

        <section className="um-stats">
          <div className="um-stat-card">
            <div className="um-stat-icon purple">♙</div>
            <p>Total Users</p>
            <h2>{users.length}</h2>
          </div>

          <div className="um-stat-card">
            <div className="um-stat-icon green">✓</div>
            <p>Active Users</p>
            <h2>{activeCount}</h2>
          </div>

          <div className="um-stat-card">
            <div className="um-stat-icon orange">◷</div>
            <p>Pending Users</p>
            <h2>{pendingCount}</h2>
          </div>

          <div className="um-stat-card">
            <div className="um-stat-icon pink">⊘</div>
            <p>Inactive Users</p>
            <h2>{inactiveCount}</h2>
          </div>
        </section>

        <section className="um-table-panel">
          <div className="um-table-heading">
            <div>
              <h3>All Users</h3>
              <p>Manage registered accounts and their status.</p>
            </div>
            <span className="um-total-badge">
              {filteredUsers.length} users
            </span>
          </div>

          <div className="um-toolbar">
            <input
              type="search"
              className="um-search"
              placeholder="🔍 Search name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="um-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="um-table-wrapper">
            <table className="um-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="um-user">
                        <div className="um-avatar">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <strong>{user.name}</strong>
                          <span>{user.email}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className={`um-role ${user.role.toLowerCase()}`}>
                        {user.role}
                      </span>
                    </td>

                    <td>
                      <span className={`um-status ${user.status.toLowerCase()}`}>
                        {user.status}
                      </span>
                    </td>

                    <td>
                      <div className="um-actions">
                        <button
                          className="um-action-button"
                          onClick={() => toggleStatus(user.id)}
                          title="Toggle user status"
                        >
                          {user.status === "Active" ? "Deactivate" : "Activate"}
                        </button>

                        <button
                          className="um-delete-button"
                          onClick={() => deleteUser(user.id)}
                          title="Remove demo user"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan="4" className="um-empty">
                      No users found. Try another search or filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <p className="um-footer">
          © 2026 CyberMentor · Stay safe. Stay cyber smart. 💜
        </p>
      </main>
    </div>
  );
}

export default UserManagement;
