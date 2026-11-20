import { Zap } from "lucide-react";
import Card from "../Card.jsx";

function ScoreCard({ score, total, awarded, perfect, title }) {
  const pct = Math.round((score / total) * 100);
  const message = perfect
    ? "Flawless! Perfect score."
    : pct >= 60
    ? "Great job, agent!"
    : "Keep practising, you'll get there.";
  return (
    <Card className="score-card">
      <p className="muted" style={{ margin: 0 }}>{title}</p>
      <div className="score-ring" style={{ "--pct": `${pct}%` }}>
        <div className="score-ring-inner">
          <strong>
            {score}/{total}
          </strong>
          <span>{pct}%</span>
        </div>
      </div>
      <h2 style={{ margin: "6px 0" }}>{message}</h2>
      <p className="xp-chip" style={{ display: "inline-flex" }}>
        <Zap size={16} color="var(--amber)" /> {awarded > 0 ? `+${awarded} XP earned` : "No new XP (beat your best to earn more)"}
      </p>
    </Card>
  );
}

export default ScoreCard;
