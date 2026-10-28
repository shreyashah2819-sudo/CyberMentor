
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SimulationManagement.css";

function SimulationManagement() {
  const navigate = useNavigate();

  const [simulations, setSimulations] = useState([
    { id: 1, title: "Phishing Email Attack", category: "Phishing", difficulty: "Beginner", duration: "10 min", status: "Active" },
    { id: 2, title: "Password Security Challenge", category: "Password Security", difficulty: "Beginner", duration: "5 min", status: "Active" },
    { id: 3, title: "Malware Awareness Lab", category: "Malware", difficulty: "Intermediate", duration: "15 min", status: "Inactive" },
    { id: 4, title: "Social Engineering Scenario", category: "Social Engineering", difficulty: "Advanced", duration: "20 min", status: "Active" },
    { id: 5, title: "Suspicious URL Detection", category: "URL Safety", difficulty: "Intermediate", duration: "10 min", status: "Active" },
  ]);

  const initialForm = {
    title: "",
    category: "Phishing",
    difficulty: "Beginner",
    duration: "10 min",
    status: "Active",
    description: "",
  };

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(initialForm);

  const categories = [
    "Phishing",
    "Password Security",
    "Malware",
    "Social Engineering",
    "URL Safety",
    "Network Security",
  ];

  const filteredSimulations = simulations.filter((simulation) => {
    const matchesSearch =
      `${simulation.title} ${simulation.category}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" ||
      simulation.category === categoryFilter;

    const matchesStatus =
      statusFilter === "All" || simulation.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const activeCount = simulations.filter(
    (simulation) => simulation.status === "Active"
  ).length;

  const inactiveCount = simulations.filter(
    (simulation) => simulation.status === "Inactive"
  ).length;

  const openAddForm = () => {
    setEditingId(null);
    setFormData(initialForm);
    setShowForm(true);
  };

  const openEditForm = (simulation) => {
    setEditingId(simulation.id);
    setFormData({
      title: simulation.title,
      category: simulation.category,
      difficulty: simulation.difficulty,
      duration: simulation.duration,
      status: simulation.status,
      description: simulation.description || "",
    });
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) return;

    if (editingId !== null) {
      setSimulations((previous) =>
        previous.map((simulation) =>
          simulation.id === editingId
            ? { ...simulation, ...formData, title: formData.title.trim() }
            : simulation
        )
      );
    } else {
      setSimulations((previous) => [
        ...previous,
        {
          id: Date.now(),
          ...formData,
          title: formData.title.trim(),
        },
      ]);
    }

    setFormData(initialForm);
    setEditingId(null);
    setShowForm(false);
  };

  const toggleStatus = (id) => {
    setSimulations((previous) =>
      previous.map((simulation) =>
        simulation.id === id
          ? {
              ...simulation,
              status:
                simulation.status === "Active" ? "Inactive" : "Active",
            }
          : simulation
      )
    );
  };

  const deleteSimulation = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this demo simulation?"
    );

    if (confirmed) {
      setSimulations((previous) =>
        previous.filter((simulation) => simulation.id !== id)
      );
    }
  };

  return (
    <div className="sm-page">
      <header className="sm-header">
        <div className="sm-brand">
          <div className="sm-logo">🛡️</div>
          <div>
            <h2>CyberMentor</h2>
            <span>SIMULATION MANAGEMENT</span>
          </div>
        </div>

        <button
          className="sm-back-button"
          onClick={() => navigate("/admin")}
        >
          ← Admin Dashboard
        </button>
      </header>

      <main className="sm-main">
        <section className="sm-heading">
          <div>
            <p className="sm-breadcrumb">
              Admin / Simulation Management
            </p>
            <h1>Simulation Management</h1>
            <p className="sm-description">
              Create and manage interactive cybersecurity practice scenarios.
            </p>
          </div>

          <button className="sm-primary-button" onClick={openAddForm}>
            + Add Simulation
          </button>
        </section>

        <section className="sm-banner">
          <div>
            <span className="sm-banner-label">CYBERSECURITY TRAINING LAB</span>
            <h2>Practice. Learn. Stay Protected. 🔐</h2>
            <p>
              Manage simulations that help users build real-world cyber safety skills.
            </p>
          </div>
          <div className="sm-banner-icon">🎯</div>
        </section>

        <section className="sm-stats">
          <div className="sm-stat-card">
            <div className="sm-stat-icon purple">◈</div>
            <p>Total Simulations</p>
            <h2>{simulations.length}</h2>
          </div>

          <div className="sm-stat-card">
            <div className="sm-stat-icon green">✓</div>
            <p>Active Simulations</p>
            <h2>{activeCount}</h2>
          </div>

          <div className="sm-stat-card">
            <div className="sm-stat-icon pink">Ⅱ</div>
            <p>Inactive Simulations</p>
            <h2>{inactiveCount}</h2>
          </div>

          <div className="sm-stat-card">
            <div className="sm-stat-icon orange">⚡</div>
            <p>Training Categories</p>
            <h2>
              {new Set(simulations.map((item) => item.category)).size}
            </h2>
          </div>
        </section>

        {showForm && (
          <section className="sm-form-panel">
            <div className="sm-form-heading">
              <div>
                <h3>
                  {editingId !== null ? "Edit Simulation" : "Add New Simulation"}
                </h3>
                <p>Enter the simulation details.</p>
              </div>

              <button
                type="button"
                className="sm-close-button"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="sm-form-grid">
                <label>
                  Simulation Title
                  <input
                    type="text"
                    placeholder="Enter simulation title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </label>

                <label>
                  Category
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Difficulty Level
                  <select
                    value={formData.difficulty}
                    onChange={(e) =>
                      setFormData({ ...formData, difficulty: e.target.value })
                    }
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </label>

                <label>
                  Duration
                  <select
                    value={formData.duration}
                    onChange={(e) =>
                      setFormData({ ...formData, duration: e.target.value })
                    }
                  >
                    <option>5 min</option>
                    <option>10 min</option>
                    <option>15 min</option>
                    <option>20 min</option>
                    <option>30 min</option>
                  </select>
                </label>

                <label>
                  Status
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </label>
              </div>

              <label className="sm-description-field">
                Description
                <textarea
                  rows="3"
                  placeholder="Describe the purpose of this simulation..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                />
              </label>

              <div className="sm-form-actions">
                <button
                  type="button"
                  className="sm-cancel-button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                  }}
                >
                  Cancel
                </button>

                <button type="submit" className="sm-primary-button">
                  {editingId !== null ? "Save Changes" : "Create Simulation"}
                </button>
              </div>
            </form>
          </section>
        )}

        <section className="sm-table-panel">
          <div className="sm-panel-heading">
            <div>
              <h3>All Simulations</h3>
              <p>View and manage your training scenarios.</p>
            </div>
            <span className="sm-count-badge">
              {filteredSimulations.length} items
            </span>
          </div>

          <div className="sm-toolbar">
            <input
              className="sm-search"
              type="search"
              placeholder="🔍 Search simulations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="sm-filter"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              className="sm-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="sm-table-wrapper">
            <table className="sm-table">
              <thead>
                <tr>
                  <th>Simulation</th>
                  <th>Category</th>
                  <th>Difficulty</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredSimulations.map((simulation) => (
                  <tr key={simulation.id}>
                    <td>
                      <div className="sm-title-cell">
                        <div className="sm-item-icon">🎯</div>
                        <div>
                          <strong>{simulation.title}</strong>
                          <span>
                            {simulation.description || "Cybersecurity practice scenario"}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="sm-category">
                        {simulation.category}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`sm-difficulty ${simulation.difficulty.toLowerCase()}`}
                      >
                        {simulation.difficulty}
                      </span>
                    </td>

                    <td>{simulation.duration}</td>

                    <td>
                      <span
                        className={`sm-status ${simulation.status.toLowerCase()}`}
                      >
                        {simulation.status}
                      </span>
                    </td>

                    <td>
                      <div className="sm-actions">
                        <button
                          className="sm-edit-button"
                          onClick={() => openEditForm(simulation)}
                        >
                          Edit
                        </button>

                        <button
                          className="sm-toggle-button"
                          onClick={() => toggleStatus(simulation.id)}
                        >
                          {simulation.status === "Active" ? "Disable" : "Enable"}
                        </button>

                        <button
                          className="sm-delete-button"
                          onClick={() => deleteSimulation(simulation.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredSimulations.length === 0 && (
                  <tr>
                    <td colSpan="6" className="sm-empty">
                      No simulations found. Try another search or add a simulation.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="sm-footer">
          © 2026 CyberMentor · Stay safe. Stay cyber smart. 💜
        </footer>
      </main>
    </div>
  );
}

export default SimulationManagement;
