import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import AchievementCard from "../components/aditi/AchievementCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { getStats } from "../lib/gameState.js";
import { evaluateBadges } from "../lib/badges.js";

function BadgesAchievements() {
  const { user } = useAuth();
  const badges = evaluateBadges(getStats(user?.id));
  const unlocked = badges.filter((b) => b.unlocked).length;

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="container">
          <div className="page-head">
            <h1>Badges & Achievements</h1>
            <p className="muted">Complete lessons and challenges to unlock badges.</p>
          </div>

          <Card className="overall">
            <div>
              <strong>
                {unlocked}/{badges.length}
              </strong>{" "}
              <span className="muted">badges unlocked</span>
            </div>
            <ProgressBar value={(unlocked / badges.length) * 100} label="Badges unlocked" />
          </Card>

          <div className="ach-grid">
            {badges.map((b) => (
              <AchievementCard key={b.id} badge={b} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default BadgesAchievements;
