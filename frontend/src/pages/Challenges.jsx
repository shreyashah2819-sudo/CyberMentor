
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Challenges.css";

const initialChallenges = [
  {
    id: 1,
    title: "Spot the Phishing",
    category: "Email Security",
    difficulty: "Easy",
    points: 50,
    description: "Identify warning signs in a suspicious email.",
    icon: "📧",
  },
  {
    id: 2,
    title: "Password Protector",
    category: "Password Safety",
    difficulty: "Easy",
    points: 40,
    description: "Learn how to recognize strong and weak passwords.",
    icon: "🔐",
  },
  {
    id: 3,
    title: "Safe URL Detective",
    category: "Web Security",
    difficulty: "Medium",
    points: 75,
    description: "Recognize suspicious links before opening them.",
    icon: "🔎",
  },
  {
    id: 4,
    title: "Social Engineering Alert",
    category: "Online Safety",
    difficulty: "Medium",
    points: 100,
    description: "Recognize common online manipulation tactics.",
    icon: "🛡️",
  },
  {
    id: 5,
    title: "Cyber Safety Expert",
    category: "Cyber Awareness",
    difficulty: "Hard",
    points: 150,
    description: "Test your knowledge of everyday cyber safety.",
    icon: "🏆",
  },
  {
    id: 6,
    title: "Privacy Guardian",
    category: "Privacy",
    difficulty: "Hard",
    points: 125,
    description: "Choose safer privacy settings for online accounts.",
    icon: "🔒",
  },
];

function Challenges() {
  const navigate = useNavigate();
  const [challenges, setChallenges] = useState(initialChallenges);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const completed = challenges.filter(
    (challenge) => challenge.completed
  ).length;

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesFilter =
      filter === "All" ||
      (filter === "Completed" && challenge.completed) ||
      (filter === "Pending" && !challenge.completed);

    const matchesSearch =
      challenge.title.toLowerCase().includes(search.toLowerCase()) ||
      challenge.category.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  function toggleChallenge(id) {
    setChallenges((current) =>
      current.map((challenge) =>
        challenge.id === id
          ? { ...challenge, completed: !challenge.completed }
          : challenge
      )
    );
  }

  return (
    <main className="challenges-page">
      <header className="challenges-header">
        <button className="challenges-back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div>
          <p className="challenges-eyebrow">CYBERMENTOR LEARNING</p>
          <h1>Cyber Challenges</h1>
          <p>Build safer online habits, one challenge at a time.</p>
        </div>
      </header>

      <section className="challenges-stats">
        <article className="challenge-stat">
          <span>🎯</span>
          <div>
            <h2>{challenges.length}</h2>
            <p>Total Challenges</p>
          </div>
        </article>

        <article className="challenge-stat">
          <span>✅</span>
          <div>
            <h2>{completed}</h2>
            <p>Completed</p>
          </div>
        </article>

        <article className="challenge-stat">
          <span>⭐</span>
          <div>
            <h2>
              {challenges
                .filter((challenge) => challenge.completed)
                .reduce((total, challenge) => total + challenge.points, 0)}
            </h2>
            <p>Points Earned</p>
          </div>
        </article>
      </section>

      <section className="challenges-controls">
        <input
          type="search"
          placeholder="Search challenges..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search challenges"
        />

        <div className="challenge-filters">
          {["All", "Pending", "Completed"].map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="challenges-grid">
        {filteredChallenges.map((challenge) => (
          <article className="challenge-card" key={challenge.id}>
            <div className="challenge-card-top">
              <span className="challenge-icon">{challenge.icon}</span>
              <span className={`difficulty ${challenge.difficulty.toLowerCase()}`}>
                {challenge.difficulty}
              </span>
            </div>

            <p className="challenge-category">{challenge.category}</p>
            <h2>{challenge.title}</h2>
            <p className="challenge-description">{challenge.description}</p>

            <div className="challenge-card-bottom">
              <span className="challenge-points">
                ⭐ {challenge.points} points
              </span>

              <button
                className={challenge.completed ? "completed-button" : "start-button"}
                onClick={() => toggleChallenge(challenge.id)}
              >
                {challenge.completed ? "✓ Completed" : "Start Challenge"}
              </button>
            </div>
          </article>
        ))}
      </section>

      {filteredChallenges.length === 0 && (
        <p className="challenges-empty">No matching challenges found.</p>
      )}
    </main>
  );
}

export default Challenges;
