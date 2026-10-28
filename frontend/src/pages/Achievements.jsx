
import { useState } from "react";
import "./Achievements.css";

const achievements = [
  {
    id: 1,
    icon: "🛡️",
    title: "Cyber Beginner",
    description: "Learn the basics of cybersecurity.",
    category: "Learning",
    progress: 100,
    unlocked: true,
  },
  {
    id: 2,
    icon: "🎯",
    title: "Quiz Master",
    description: "Complete cybersecurity quizzes.",
    category: "Quiz",
    progress: 60,
    unlocked: false,
  },
  {
    id: 3,
    icon: "🔐",
    title: "Password Guardian",
    description: "Learn how to create strong passwords.",
    category: "Security",
    progress: 100,
    unlocked: true,
  },
  {
    id: 4,
    icon: "🎣",
    title: "Phishing Detective",
    description: "Learn to identify suspicious messages.",
    category: "Simulation",
    progress: 40,
    unlocked: false,
  },
  {
    id: 5,
    icon: "💻",
    title: "Cyber Explorer",
    description: "Explore cybersecurity topics and lessons.",
    category: "Learning",
    progress: 75,
    unlocked: false,
  },
  {
    id: 6,
    icon: "🏆",
    title: "Security Champion",
    description: "Complete all learning activities.",
    category: "Security",
    progress: 20,
    unlocked: false,
  },
];

export default function Achievements() {
  const [filter, setFilter] = useState("All");

  const filteredAchievements = achievements.filter((item) => {
    if (filter === "Unlocked") return item.unlocked;
    if (filter === "Locked") return !item.unlocked;
    return true;
  });

  const unlockedCount = achievements.filter(
    (item) => item.unlocked
  ).length;

  const averageProgress = Math.round(
    achievements.reduce((sum, item) => sum + item.progress, 0) /
      achievements.length
  );

  return (
    <main className="achievements-page">
      <header className="achievements-header">
        <div>
          <p className="achievements-label">
            CYBERMENTOR / REWARDS
          </p>
          <h1>My Achievements 🏆</h1>
          <p className="achievements-subtitle">
            Track your cybersecurity learning journey and unlock
            new badges as you progress.
          </p>
        </div>
        <div className="trophy-box">🏆</div>
      </header>

      <section className="achievement-stats">
        <div className="achievement-stat">
          <span>🏅</span>
          <div>
            <h2>{unlockedCount}</h2>
            <p>Unlocked Badges</p>
          </div>
        </div>

        <div className="achievement-stat">
          <span>🎯</span>
          <div>
            <h2>{achievements.length}</h2>
            <p>Total Achievements</p>
          </div>
        </div>

        <div className="achievement-stat">
          <span>📈</span>
          <div>
            <h2>{averageProgress}%</h2>
            <p>Average Progress</p>
          </div>
        </div>
      </section>

      <section className="achievement-toolbar">
        <div>
          <h2>All Badges</h2>
          <p>Keep learning to earn more rewards!</p>
        </div>

        <div className="achievement-filters">
          {["All", "Unlocked", "Locked"].map((option) => (
            <button
              type="button"
              key={option}
              className={filter === option ? "active" : ""}
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </section>

      <section className="achievement-grid">
        {filteredAchievements.map((item) => (
          <article
            className={`achievement-card ${
              item.unlocked ? "is-unlocked" : "is-locked"
            }`}
            key={item.id}
          >
            <div className="achievement-card-top">
              <div className="achievement-icon">{item.icon}</div>
              <span
                className={`achievement-status ${
                  item.unlocked ? "earned" : "pending"
                }`}
              >
                {item.unlocked ? "✓ Earned" : "🔒 Locked"}
              </span>
            </div>

            <span className="achievement-category">
              {item.category}
            </span>

            <h3>{item.title}</h3>
            <p className="achievement-description">
              {item.description}
            </p>

            <div className="achievement-progress-info">
              <span>Progress</span>
              <strong>{item.progress}%</strong>
            </div>

            <div
              className="achievement-progress-track"
              role="progressbar"
              aria-valuenow={item.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${item.title} progress`}
            >
              <div
                className="achievement-progress-fill"
                style={{ width: `${item.progress}%` }}
              />
            </div>

            <p className="achievement-footer">
              {item.unlocked
                ? "Achievement earned successfully!"
                : "Continue learning to unlock this badge."}
            </p>
          </article>
        ))}

        {filteredAchievements.length === 0 && (
          <p>No achievements found in this category.</p>
        )}
      </section>
    </main>
  );
}
