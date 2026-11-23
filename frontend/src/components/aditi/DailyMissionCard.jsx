import { Link } from "react-router-dom";
import { Target, CheckCircle2, ArrowRight } from "lucide-react";
import Card from "../Card.jsx";
import Badge from "../Badge.jsx";

function DailyMissionCard({ challenge, done }) {
  return (
    <Card>
      <div className="mission-head">
        <Target size={22} color="var(--cyan)" />
        <h3 style={{ margin: 0 }}>Daily Mission</h3>
        {done ? <Badge tone="green">Done today</Badge> : <Badge tone="amber">New</Badge>}
      </div>
      <p style={{ margin: "10px 0 4px", fontWeight: 600 }}>{challenge.title}</p>
      <p className="muted" style={{ marginTop: 0 }}>{challenge.description}</p>
      {done ? (
        <p className="mission-done">
          <CheckCircle2 size={18} /> Nice work! Come back tomorrow for a new mission.
        </p>
      ) : (
        <Link to={`/challenges/${challenge.id}`} className="btn btn-primary">
          Start mission <ArrowRight size={16} />
        </Link>
      )}
    </Card>
  );
}

export default DailyMissionCard;
