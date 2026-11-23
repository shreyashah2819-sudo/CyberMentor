import { Link } from "react-router-dom";
import { Zap, GraduationCap, Target, Flame } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import XPCard from "../components/aditi/XPCard.jsx";
import ProgressChart from "../components/aditi/ProgressChart.jsx";
import StatsBar from "../components/moxa/StatsBar.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { LESSONS, CATEGORIES } from "../data/lessons.js";
import { getChallenge } from "../data/challenges.js";
import { getStats } from "../lib/gameState.js";

function ProgressDashboard() {
  const { user } = useAuth();
  const stats = getStats(user?.id);

  const recent = stats.attempts.slice(-8).map((a, i) => ({
    label: `#${stats.attempts.length - Math.min(8, stats.attempts.length) + i + 1}`,
    value: Math.round((a.score / a.total) * 100),
    title: getChallenge(a.challengeId)?.title,
  }));

  const avg = stats.attempts.length
    ? Math.round(stats.attempts.reduce((n, a) => n + (a.score / a.total) * 100, 0) / stats.attempts.length)
    : 0;

  const summary = [
    { icon: Zap, tone: "orange", value: stats.xp, label: "Total XP" },
    { icon: GraduationCap, tone: "purple", value: `${stats.lessonsDone}/${stats.lessonsTotal}`, label: "Lessons done" },
    { icon: Target, tone: "blue", value: stats.attempts.length, label: "Challenge attempts" },
    { icon: Flame, tone: "pink", value: stats.streak, label: "Day streak" },
  ];

  const categories = CATEGORIES.filter((c) => c !== "All").map((c) => {
    const inCat = LESSONS.filter((l) => l.category === c);
    const done = inCat.filter((l) => stats.doneLessonIds.includes(l.id)).length;
    return { name: c, done, total: inCat.length };
  });

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="container">
          <div className="page-head">
            <h1>Your Progress</h1>
            <p className="muted">See how far you've come, agent {user.username}.</p>
          </div>

          <StatsBar stats={summary} />

          <div className="dash-grid" style={{ marginTop: 24 }}>
            <XPCard xp={stats.xp} level={stats.level} xpIntoLevel={stats.xpIntoLevel} streak={stats.streak} />
            <Card>
              <h3 style={{ marginTop: 0 }}>Lesson progress by topic</h3>
              {categories.map((c) => (
                <div key={c.name} className="cat-row">
                  <span>{c.name}</span>
                  <ProgressBar value={c.total ? (c.done / c.total) * 100 : 0} label={`${c.name} progress`} />
                  <span className="muted">
                    {c.done}/{c.total}
                  </span>
                </div>
              ))}
            </Card>
          </div>

          <Card style={{ marginTop: 24 }}>
            <h3 style={{ marginTop: 0 }}>Recent challenge scores</h3>
            {recent.length === 0 ? (
              <p className="muted">
                No challenges yet. <Link to="/challenges">Try one in the Arena</Link> to see your scores here.
              </p>
            ) : (
              <>
                <ProgressChart data={recent} />
                <p className="muted" style={{ margin: "8px 0 0" }}>Average score: {avg}%</p>
              </>
            )}
          </Card>
        </div>
      </main>
    </>
  );
}

export default ProgressDashboard;
