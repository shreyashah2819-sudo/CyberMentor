
import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  const [profile, setProfile] = useState({
    name: "Aastha Suthar",
    email: "aastha@example.com",
    bio: "Cybersecurity learner at CyberMentor.",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    challenges: true,
    achievements: false,
    security: true,
  });

  const [theme, setTheme] = useState("light");
  const [message, setMessage] = useState("");

  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  };

  const handleNotificationChange = (event) => {
    const { name, checked } = event.target;

    setNotifications((previous) => ({
      ...previous,
      [name]: checked,
    }));

    setMessage("");
  };

  const handleSave = (event) => {
    event.preventDefault();

    setMessage(
      "Settings saved for this session. Connect the backend to save changes permanently."
    );
  };

  return (
    <main className={`settings-page ${theme === "dark" ? "settings-dark" : ""}`}>
      <header className="settings-header">
        <div>
          <p className="settings-eyebrow">CYBERMENTOR / PREFERENCES</p>
          <h1>Settings</h1>
          <p className="settings-subtitle">
            Manage your profile, notifications, security, and preferences.
          </p>
        </div>

        <div className="settings-header-icon">⚙</div>
      </header>

      <form onSubmit={handleSave}>
        <section className="settings-card">
          <div className="settings-section-heading">
            <div className="settings-section-icon purple">♙</div>
            <div>
              <h2>Profile Settings</h2>
              <p>Update your personal information.</p>
            </div>
          </div>

          <div className="settings-form-grid">
            <div className="settings-field">
              <label htmlFor="settings-name">Full Name</label>
              <input
                id="settings-name"
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="settings-field">
              <label htmlFor="settings-email">Email Address</label>
              <input
                id="settings-email"
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="settings-field settings-full-width">
              <label htmlFor="settings-bio">About Me</label>
              <textarea
                id="settings-bio"
                name="bio"
                value={profile.bio}
                onChange={handleProfileChange}
                placeholder="Write a short introduction"
                rows="3"
              />
            </div>
          </div>
        </section>

        <section className="settings-card">
          <div className="settings-section-heading">
            <div className="settings-section-icon blue">♧</div>
            <div>
              <h2>Notification Preferences</h2>
              <p>Choose which updates you want to receive.</p>
            </div>
          </div>

          <div className="settings-options">
            <label className="settings-option">
              <div>
                <strong>Email Notifications</strong>
                <p>Receive important updates by email.</p>
              </div>
              <input
                type="checkbox"
                name="email"
                checked={notifications.email}
                onChange={handleNotificationChange}
              />
              <span className="settings-switch"></span>
            </label>

            <label className="settings-option">
              <div>
                <strong>Challenge Reminders</strong>
                <p>Get reminders about ongoing challenges.</p>
              </div>
              <input
                type="checkbox"
                name="challenges"
                checked={notifications.challenges}
                onChange={handleNotificationChange}
              />
              <span className="settings-switch"></span>
            </label>

            <label className="settings-option">
              <div>
                <strong>Achievement Updates</strong>
                <p>Get notified when you earn achievements.</p>
              </div>
              <input
                type="checkbox"
                name="achievements"
                checked={notifications.achievements}
                onChange={handleNotificationChange}
              />
              <span className="settings-switch"></span>
            </label>

            <label className="settings-option">
              <div>
                <strong>Security Alerts</strong>
                <p>Receive important account security alerts.</p>
              </div>
              <input
                type="checkbox"
                name="security"
                checked={notifications.security}
                onChange={handleNotificationChange}
              />
              <span className="settings-switch"></span>
            </label>
          </div>
        </section>

        <section className="settings-card">
          <div className="settings-section-heading">
            <div className="settings-section-icon orange">◐</div>
            <div>
              <h2>Appearance</h2>
              <p>Choose how CyberMentor looks on your screen.</p>
            </div>
          </div>

          <div className="settings-theme-options">
            <button
              type="button"
              className={`settings-theme-button ${
                theme === "light" ? "selected" : ""
              }`}
              onClick={() => {
                setTheme("light");
                setMessage("");
              }}
            >
              <span className="settings-theme-preview light-preview">☀</span>
              <span>
                <strong>Light Mode</strong>
                <small>Clean and bright</small>
              </span>
              <span className="settings-theme-check">
                {theme === "light" ? "✓" : ""}
              </span>
            </button>

            <button
              type="button"
              className={`settings-theme-button ${
                theme === "dark" ? "selected" : ""
              }`}
              onClick={() => {
                setTheme("dark");
                setMessage("");
              }}
            >
              <span className="settings-theme-preview dark-preview">☾</span>
              <span>
                <strong>Dark Mode</strong>
                <small>Comfortable in low light</small>
              </span>
              <span className="settings-theme-check">
                {theme === "dark" ? "✓" : ""}
              </span>
            </button>
          </div>
        </section>

        <section className="settings-card settings-security-card">
          <div className="settings-section-heading">
            <div className="settings-section-icon green">♢</div>
            <div>
              <h2>Account Security</h2>
              <p>Keep your account safe and protected.</p>
            </div>
          </div>

          <div className="settings-security-info">
            <div className="settings-security-symbol">✓</div>
            <div>
              <strong>Security reminders</strong>
              <p>
                Use a strong, unique password and never share it with anyone.
              </p>
            </div>
          </div>

          <p className="settings-security-note">
            Password changes and two-factor authentication are not connected
            yet. These features require backend authentication support.
          </p>
        </section>

        <div className="settings-actions">
          <button
            type="button"
            className="settings-reset-button"
            onClick={() => {
              setProfile({
                name: "Aastha Suthar",
                email: "aastha@example.com",
                bio: "Cybersecurity learner at CyberMentor.",
              });

              setNotifications({
                email: true,
                challenges: true,
                achievements: false,
                security: true,
              });

              setTheme("light");
              setMessage("");
            }}
          >
            Reset Changes
          </button>

          <button type="submit" className="settings-save-button">
            Save Changes
          </button>
        </div>

        {message && (
          <div className="settings-message" role="status">
            {message}
          </div>
        )}
      </form>

      <p className="settings-footer">
        CyberMentor · Account Preferences
      </p>
    </main>
  );
}

export default Settings;
