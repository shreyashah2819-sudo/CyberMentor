import { Zap, Flame } from "lucide-react";
import Card from "../Card.jsx";
import ProgressBar from "../ProgressBar.jsx";
import { XP_PER_LEVEL } from "../../lib/gameState.js";

function XPCard({ xp, level, xpIntoLevel, streak }) {
  return (
    <Card>
      <div className="xp-head">
        <div>
          <span className="muted">Your level</span>
          <strong className="xp-level">Level {level}</strong>
        </div>
        <div className="xp-chips">
          <span className="xp-chip">
            <Zap size={16} color="var(--amber)" /> {xp} XP
          </span>
          <span className="xp-chip">
            <Flame size={16} color="var(--orange)" /> {streak} day{streak === 1 ? "" : "s"}
          </span>
        </div>
      </div>
      <ProgressBar value={(xpIntoLevel / XP_PER_LEVEL) * 100} label="XP to next level" />
      <p className="muted" style={{ margin: "8px 0 0", fontSize: "0.85rem" }}>
        {XP_PER_LEVEL - xpIntoLevel} XP to Level {level + 1}
      </p>
    </Card>
  );
}

export default XPCard;
