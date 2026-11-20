import { Link, useLocation } from "react-router-dom";
import { CheckCircle2, XCircle } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import ScoreCard from "../components/aditi/ScoreCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { getChallenge } from "../data/challenges.js";
import { getAttempts } from "../lib/gameState.js";

// Opened right after a challenge (result comes via router state).
// If opened directly, it falls back to the latest saved attempt (without the answer review).
function QuizResult() {
  const { user } = useAuth();
  const location = useLocation();
  let result = location.state?.result;

  if (!result) {
    const last = getAttempts(user?.id).slice(-1)[0];
    if (last) {
      result = {
        challengeId: last.challengeId,
        title: getChallenge(last.challengeId)?.title || "Challenge",
        score: last.score,
        total: last.total,
        awarded: last.xp,
        perfect: last.score === last.total,
        review: [],
      };
    }
  }

  if (!result) {
    return (
      <>
        <Navbar />
        <main className="page">
          <div className="container lesson-layout">
            <Card>
              <h1>No result yet</h1>
              <p className="muted">Finish a challenge to see your score here.</p>
              <Link to="/challenges" className="btn btn-primary">Go to the Arena</Link>
            </Card>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="container lesson-layout">
          <ScoreCard
            title={result.title}
            score={result.score}
            total={result.total}
            awarded={result.awarded}
            perfect={result.perfect}
          />

          <div className="result-actions">
            <Link to={`/challenges/${result.challengeId}`} className="btn btn-primary">
              Try again
            </Link>
            <Link to="/challenges" className="btn btn-secondary">
              More challenges
            </Link>
            <Link to="/progress" className="btn btn-secondary">
              View progress
            </Link>
          </div>

          {result.review.length > 0 && (
            <>
              <h2 className="section-h">Review</h2>
              {result.review.map((r, i) => (
                <Card key={i} style={{ marginBottom: 12 }}>
                  <div className="review-row">
                    {r.right ? (
                      <CheckCircle2 color="var(--green)" size={22} />
                    ) : (
                      <XCircle color="var(--red)" size={22} />
                    )}
                    <div>
                      <strong>{r.q}</strong>
                      <p className="muted" style={{ margin: "6px 0 0" }}>
                        Your answer: {r.chosen}
                        {!r.right && <> · Correct: <b>{r.correct}</b></>}
                      </p>
                      <p className="explain" style={{ margin: "4px 0 0" }}>{r.explain}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default QuizResult;
