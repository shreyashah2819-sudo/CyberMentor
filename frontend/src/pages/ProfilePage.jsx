
import React from "react";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";

const achievements = [
  { icon: "🛡️", name: "Phishing Hunter", status: "Earned" },
  { icon: "🔐", name: "Secure Starter", status: "Earned" },
  { icon: "⭐", name: "Threat Defender", status: "Earned" },
  { icon: "🪙", name: "Crypto Explorer", status: "Earned" },
  { icon: "🌐", name: "Cyber Rookie", status: "Locked" },
  
];

const stats = [
  { icon: "⚑", label: "Missions Completed", value: "42" },
  { icon: "🏅", label: "XP Earned", value: "2,450" },
  { icon: "◎", label: "Accuracy", value: "91%" },
  { icon: "🔥", label: "Current Streak", value: "7 Days" },
  { icon: "🔒", label: "Threats Identified", value: "36" },
  { icon: "◷", label: "Learning Hours", value: "18h" },
];

const learning = [
  { name: "Cyber Academy", value: 75 },
  { name: "Cyber Simulations", value: 60 },
  { name: "Challenge Arena", value: 68 },
  { name: "Cyber Lab", value: 50 },
];

const recentAchievements = [
  { icon: "🛡️", title: "Threat Defender", detail: "Completed a threat mission", xp: "+100 XP" },
  { icon: "🎯", title: "Phishing Hunter", detail: "Identified a phishing email", xp: "+150 XP" },
  { icon: "🔐", title: "Secure Survivor", detail: "Completed a security challenge", xp: "+100 XP" },
  { icon: "🌐", title: "Cyber Rookie", detail: "Completed your first mission", xp: "+50 XP" },
];

export default function ProfilePage() 
{ const navigate = useNavigate();
    
  return (
    
    <main className="agent-profile">
      <section className="agent-hero">
        <div className="agent-identity">
          <div className="agent-avatar">
            <span>AS</span>
            <i />
          </div>

          <div className="agent-intro">
            <div className="agent-name-row">
              <h1>Aastha</h1>
              <span className="agent-role">🛡️ Cyber Defender</span>
            </div>

            <span className="agent-level">Level 12</span>

            <div className="xp-label">
              <span>2,450 / 5,000 XP</span>
              <span>49%</span>
            </div>

            <div className="xp-track">
              <div className="xp-fill" />
            </div>
          </div>
        </div>

        <div className="agent-hero-art">
          <span className="hero-spark">✦</span>
          <div className="hero-shield">✦</div>
          <p>Your next level awaits!</p>
        </div>
      </section>

      <section className="agent-stats">
        {stats.map((item) => (
          <article className="agent-stat-card" key={item.label}>
            <span className="stat-icon">{item.icon}</span>
            <div>
              <p>{item.label}</p>
              <h2>{item.value}</h2>
            </div>
          </article>
        ))}
      </section>

      <section className="profile-grid">
        <article className="profile-panel achievements-panel">
          <div className="panel-heading">
            <h2>🏆 Achievements</h2>
            <button type="button" className="view-all-btn" onClick={()=> navigate("/badges")}></button>
            <span>View all →</span>
          </div>

          <div className="achievement-list">
            {achievements.map((item) => (
              <div className="achievement-item" key={item.name}>
                <div className="achievement-icon">{item.icon}</div>
                <p>{item.name}</p>
                <span className={item.status === "Locked" ? "locked" : "earned"}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="profile-panel learning-panel">
          <div className="panel-heading">
            <h2>📊 Progress</h2>
          </div>

          {learning.map((item) => (
            <div className="learning-item" key={item.name}>
              <div className="learning-label">
                <span>{item.name}</span>
                <strong>{item.value}%</strong>
              </div>
              <div className="learning-track">
                <div
                  className="learning-fill"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </article>

        <article className="profile-panel recent-panel">
          <div className="panel-heading">
            <button type="button" className="view-all-btn" onClick={()=> navigate("/academy")}></button>
            <h2>✨ Recent Achievements</h2>
            <span>View all →</span>
          </div>

          {recentAchievements.map((item) => (
            <div className="recent-item" key={item.title}>
              <span className="recent-icon">{item.icon}</span>
              <div className="recent-copy">
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </div>
              <span className="recent-xp">{item.xp}</span>
            </div>
          ))}
        </article>
      </section>

      <section className="profile-bottom">
        <article className="profile-panel journey-panel">
          <div className="panel-heading">
            <h2>🛤️ Profile Level Journey</h2>
          </div>

          <div className="journey-levels">
            {[10, 11, 12, 13].map((level) => (
              <div
                className={`journey-level ${level === 12 ? "current" : ""}`}
                key={level}
              >
                <div className="journey-badge">
                  {level === 13 ? "🔒" : level}
                </div>
                <strong>Level {level}</strong>
                <span>
                  {level < 12
                    ? "Completed"
                    : level === 12
                    ? "Cyber Defender"
                    : "Next Level"}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="ai-profile-card">
          <div className="ai-robot">🤖</div>
          <div>
            <h2>CyberMentor AI</h2>
            <p>
              You're getting stronger every mission!
              Keep building your cyber skills. 💜
            </p>
          </div>
        </article>
      </section>

      <div className="profile-actions">
        <button className="secondary-action" type="button" onClick={()=> navigate("/achievements")}>
          View All Achievements
        </button>
        <button className="primary-action" type="button"onClick={()=> navigate("/challenges")}>
          ✨ Continue Learning
        </button>
      </div>
    </main>
  );
}
