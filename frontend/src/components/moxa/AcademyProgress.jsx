import Card from "../Card.jsx";
import Badge from "../Badge.jsx";
import ProgressBar from "../ProgressBar.jsx";

function AcademyProgress({ done, total, xp }) {
  return (
    <Card className="overall">
      <div>
        <strong>
          {done}/{total}
        </strong>{" "}
        <span className="muted">lessons done</span>
      </div>
      <ProgressBar value={total ? (done / total) * 100 : 0} label="Overall lesson progress" />
      <Badge tone="amber">{xp} XP</Badge>
    </Card>
  );
}

export default AcademyProgress;
