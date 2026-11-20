import { Link } from "react-router-dom";
import { BookOpen, Bot, Target, TrendingUp, Award } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import WelcomeCard from "../components/aditi/WelcomeCard.jsx";
import XPCard from "../components/aditi/XPCard.jsx";
import DailyMissionCard from "../components/aditi/DailyMissionCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { LESSONS } from "../data/lessons.js";
import { CHALLENGES } from "../data/challenges.js";
import { getStats } from "../lib/gameState.js";

const SHORTCUTS = [
  { to: "/academy", icon: BookOpen, label: "Academy", tone: "purple" },
  { to: "/mentor", icon: Bot, label: "AI Mentor", tone: "blue" },
  { to: "/challenges", icon: Target, label: "Challenge Arena", tone: "orange" },
  { to: "/progress", icon: TrendingUp, label: "Progress", tone: "green" },
  { to: "/badges", icon: Award, label: "Badges", tone: "pink" },
];

function Dashboard() {
  const { user } = useAuth();
  const stats = getStats(user?.id);

  const nextLesson = LESSONS.find((l) => !stats.doneLessonIds.includes(l.id));
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const mission = CHALLENGES[dayOfYear % CHALLENGES.length];

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="container">
          <WelcomeCard username={user.username} level={stats.level} streak={stats.streak} nextLesson={nextLesson} />

          <div className="dash-grid">
            <XPCard xp={stats.xp} level={stats.level} xpIntoLevel={stats.xpIntoLevel} streak={stats.streak} />
            <DailyMissionCard challenge={mission} done={stats.attemptedToday(mission.id)} />
          </div>

          <h2 className="section-h">Jump to</h2>
          <div className="feature-grid">
            {SHORTCUTS.map(({ to, icon: Icon, label, tone }) => (
              <Link key={to} to={to} className="fcard" style={{ textDecoration: "none", color: "inherit" }}>
                <div className={`ficon tone-${tone}`}>
                  <Icon size={28} />
                </div>
                <h3>{label}</h3>
              </Link>
            ))}
          </div>

          <Card style={{ marginTop: 24 }}>
            <strong>{stats.lessonsDone}</strong> of {stats.lessonsTotal} lessons done ·{" "}
            <strong>{stats.attempts.length}</strong> challenge attempt{stats.attempts.length === 1 ? "" : "s"}
          </Card>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
