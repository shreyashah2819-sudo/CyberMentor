import { Link } from "react-router-dom";
import { Zap, ListChecks, Trophy } from "lucide-react";
import Badge from "../Badge.jsx";
import { XP_PER_CORRECT, PERFECT_BONUS } from "../../data/challenges.js";

// best: best score so far for this challenge (number) or null
function ChallengeCard({ challenge, best }) {
  const total = challenge.questions.length;
  const maxXp = total * XP_PER_CORRECT + PERFECT_BONUS;
  return (
    <Link to={`/challenges/${challenge.id}`} className="card lesson-card">
      <div className="meta">
        <Badge tone={challenge.tone}>{challenge.difficulty}</Badge>
        {best !== null && (
          <Badge tone={best === total ? "green" : "gray"}>
            <Trophy size={12} style={{ verticalAlign: "-2px" }} /> Best {best}/{total}
          </Badge>
        )}
      </div>
      <h3>{challenge.title}</h3>
      <p>{challenge.description}</p>
      <div className="meta">
        <span>
          <ListChecks size={14} /> {total} questions
        </span>
        <span>
          <Zap size={14} color="var(--amber)" /> up to {maxXp} XP
        </span>
      </div>
    </Link>
  );
}

export default ChallengeCard;
