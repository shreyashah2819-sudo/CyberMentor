import { Link } from "react-router-dom";
import { Clock, Zap, CheckCircle2 } from "lucide-react";
import Badge from "../Badge.jsx";

const LEVEL_TONE = { Beginner: "green", Intermediate: "amber", Advanced: "violet" };

function LessonCard({ lesson, done }) {
  return (
    <Link to={`/academy/${lesson.id}`} className="card lesson-card">
      <div className="meta">
        <Badge tone={LEVEL_TONE[lesson.level]}>{lesson.level}</Badge>
        <Badge tone="gray">{lesson.category}</Badge>
        {done && (
          <Badge tone="green">
            <CheckCircle2 size={12} style={{ verticalAlign: "-2px" }} /> Done
          </Badge>
        )}
      </div>
      <h3>{lesson.title}</h3>
      <p>{lesson.summary}</p>
      <div className="meta">
        <span>
          <Clock size={14} /> {lesson.minutes} min
        </span>
        <span>
          <Zap size={14} color="var(--amber)" /> {lesson.xp} XP
        </span>
      </div>
    </Link>
  );
}

export default LessonCard;
