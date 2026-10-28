
import React from "react";
import "./Analytics.css";

const weeklyActivity = [
  { day: "Mon", users: 32 },
  { day: "Tue", users: 45 },
  { day: "Wed", users: 38 },
  { day: "Thu", users: 58 },
  { day: "Fri", users: 49 },
  { day: "Sat", users: 72 },
  { day: "Sun", users: 61 },
];

const categories = [
  { name: "Phishing", score: 82, color: "#8b5cf6" },
  { name: "Password Safety", score: 68, color: "#06b6d4" },
  { name: "Malware", score: 54, color: "#f59e0b" },
  { name: "URL Safety", score: 74, color: "#10b981" },
];

const simulations = [
  {
    name: "Phishing Awareness",
    category: "Phishing",
    participants: 324,
    rate: "88%",
    status: "Completed",
  },
  {
    name: "Password Challenge",
    category: "Password Safety",
    participants: 286,
    rate: "76%",
    status: "Completed",
  },
  {
    name: "Suspicious URL Check",
    category: "URL Safety",
    participants: 198,
    rate: "81%",
    status: "Active",
  },
  {
    name: "Malware Awareness",
    category: "Malware",
    participants: 156,
    rate: "69%",
    status: "Completed",
  },
];

function Analytics() {
  const maxUsers = Math.max(...weeklyActivity.map((item) => item.users));

  return (
    <main className="analytics-page">
      <header className="analytics-header">
        <div>
          <p className="analytics-eyebrow">CYBERMENTOR / REPORTS</p>
          <h1>Analytics Dashboard</h1>
          <p className="analytics-subtitle">
            Track user activity, simulation performance, and cyber awareness.
          </p>
        </div>

        <span className="analytics-badge">
          <span className="analytics-dot"></span>
          Demo Overview
        </span>
      </header>

      <section className="analytics-stats">
        <article className="analytics-stat-card">
          <div className="analytics-stat-top">
            <span className="analytics-icon purple">♙</span>
            <span className="analytics-growth">+12%</span>
          </div>
          <p>Total Users</p>
          <h2>1,248</h2>
          <small>Compared with last month</small>
        </article>

        <article className="analytics-stat-card">
          <div className="analytics-stat-top">
            <span className="analytics-icon blue">◎</span>
            <span className="analytics-growth">+8%</span>
          </div>
          <p>Simulations Completed</p>
          <h2>3,864</h2>
          <small>Across all simulation types</small>
        </article>

        <article className="analytics-stat-card">
          <div className="analytics-stat-top">
            <span className="analytics-icon green">✓</span>
            <span className="analytics-growth">+5%</span>
          </div>
          <p>Completion Rate</p>
          <h2>86%</h2>
          <small>Of started simulations</small>
        </article>

        <article className="analytics-stat-card">
          <div className="analytics-stat-top">
            <span className="analytics-icon orange">盾</span>
            <span className="analytics-growth">+4%</span>
          </div>
          <p>Average Cyber Health</p>
          <h2>78<span className="analytics-out-of">/100</span></h2>
          <small>Average score across users</small>
        </article>
      </section>

      <section className="analytics-main-grid">
        <article className="analytics-panel">
          <div className="analytics-panel-heading">
            <div>
              <h2>Weekly User Activity</h2>
              <p>Daily active users over the last 7 days</p>
            </div>
            <span className="analytics-chip">This Week</span>
          </div>

          <div className="analytics-chart">
            <div className="analytics-y-labels">
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            <div className="analytics-chart-area">
              <div className="analytics-grid-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="analytics-bars">
                {weeklyActivity.map((item) => (
                  <div className="analytics-bar-column" key={item.day}>
                    <span className="analytics-bar-value">
                      {item.users}
                    </span>
                    <div
                      className="analytics-bar"
                      style={{
                        height: `${(item.users / maxUsers) * 100}%`,
                      }}
                      title={`${item.users} active users`}
                    ></div>
                    <span className="analytics-bar-day">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="analytics-panel">
          <div className="analytics-panel-heading">
            <div>
              <h2>Category Performance</h2>
              <p>Average score by learning category</p>
            </div>
          </div>

          <div className="analytics-category-list">
            {categories.map((item) => (
              <div className="analytics-category-item" key={item.name}>
                <div className="analytics-category-label">
                  <span>{item.name}</span>
                  <strong>{item.score}%</strong>
                </div>

                <div className="analytics-progress-track">
                  <div
                    className="analytics-progress-fill"
                    style={{
                      width: `${item.score}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="analytics-insight">
            <span className="analytics-insight-icon">✦</span>
            <div>
              <strong>Learning Insight</strong>
              <p>
                Phishing awareness has the highest demo score.
                More practice can improve password and malware safety.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="analytics-panel analytics-table-panel">
        <div className="analytics-panel-heading">
          <div>
            <h2>Recent Simulation Results</h2>
            <p>Overview of simulation performance</p>
          </div>
          <span className="analytics-chip">Sample Data</span>
        </div>

        <div className="analytics-table-wrap">
          <table className="analytics-table">
            <thead>
              <tr>
                <th>Simulation</th>
                <th>Category</th>
                <th>Participants</th>
                <th>Success Rate</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {simulations.map((item) => (
                <tr key={item.name}>
                  <td className="analytics-simulation-name">
                    {item.name}
                  </td>
                  <td>{item.category}</td>
                  <td>{item.participants}</td>
                  <td>
                    <strong>{item.rate}</strong>
                  </td>
                  <td>
                    <span
                      className={`analytics-status ${
                        item.status === "Active" ? "active" : "completed"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="analytics-footer">
        Note: This dashboard currently displays sample data.
        Connect FastAPI and SQLite to display actual project data.
      </p>
    </main>
  );
}

export default Analytics;
