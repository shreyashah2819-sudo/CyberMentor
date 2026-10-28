
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Leaderboard.css";

const initialUsers = [
  { id: 1, name: "CyberNinja", points: 1250, challenges: 18, badge: "🏆" },
  { id: 2, name: "SecurityStar", points: 1100, challenges: 16, badge: "🥈" },
  { id: 3, name: "CyberExplorer", points: 980, challenges: 14, badge: "🥉" },
  { id: 4, name: "SafeSurfer", points: 850, challenges: 12, badge: "🛡️" },
  { id: 5, name: "DigitalGuardian", points: 720, challenges: 10, badge: "⭐" },
  { id: 6, name: "CyberLearner", points: 600, challenges: 8, badge: "💜" },
];

function Leaderboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState("All Time");

  const users = initialUsers
    .filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.points - a.points);

  return (
    <main className="leaderboard-page">
      <button className="leaderboard-back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <header className="leaderboard-header">
        <div className="leaderboard-trophy">🏆</div>
        <p className="leaderboard-eyebrow">CYBERMENTOR COMMUNITY</p>
        <h1>Leaderboard</h1>
        <p>Learn, improve, and celebrate your cyber safety progress.</p>
      </header>

      <section className="leaderboard-summary">
        <article className="leaderboard-summary-card">
          <span>👥</span>
          <div>
            <h2>{initialUsers.length}</h2>
            <p>Players</p>
          </div>
        </article>

        <article className="leaderboard-summary-card">
          <span>⭐</span>
          <div>
            <h2>{initialUsers.reduce((sum, user) => sum + user.points, 0).toLocaleString()}</h2>
            <p>Total Points</p>
          </div>
        </article>

        <article className="leaderboard-summary-card">
          <span>🎯</span>
          <div>
            <h2>{initialUsers.reduce((sum, user) => sum + user.challenges, 0)}</h2>
            <p>Challenges Completed</p>
          </div>
        </article>
      </section>

      <section className="leaderboard-content">
        <div className="leaderboard-toolbar">
          <div>
            <h2>Top Players</h2>
            <p>See who's leading the cyber safety journey.</p>
          </div>

          <select
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
            aria-label="Leaderboard period"
          >
            <option>All Time</option>
            <option>This Month</option>
            <option>This Week</option>
          </select>
        </div>

        <input
          className="leaderboard-search"
          type="search"
          placeholder="Search players..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search players"
        />

        <div className="leaderboard-table-wrap">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Challenges</th>
                <th>Points</th>
                <th>Achievement</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>
                    <span className={`leaderboard-rank rank-${index + 1}`}>
                      {index + 1}
                    </span>
                  </td>
                  <td>
                    <div className="leaderboard-player">
                      <span className="leaderboard-avatar">
                        {user.name.charAt(0)}
                      </span>
                      <strong>{user.name}</strong>
                    </div>
                  </td>
                  <td>{user.challenges}</td>
                  <td className="leaderboard-points">
                    ⭐ {user.points.toLocaleString()}
                  </td>
                  <td>{user.badge}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {users.length === 0 && (
            <p className="leaderboard-empty">No players found.</p>
          )}
        </div>

        <div className="leaderboard-note">
          💜 Keep learning and completing challenges to improve your rank!
        </div>
      </section>
    </main>
  );
}

export default Leaderboard;
