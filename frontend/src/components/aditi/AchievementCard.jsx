import { Lock } from "lucide-react";
import ProgressBar from "../ProgressBar.jsx";

// badge comes from evaluateBadges(): { title, description, icon, current, goal, unlocked }
function AchievementCard({ badge }) {
  const Icon = badge.icon;
  return (
    <div className={`ach${badge.unlocked ? " ach-on" : ""}`}>
      <div className="ach-icon">{badge.unlocked ? <Icon size={30} /> : <Lock size={26} />}</div>
      <h3>{badge.title}</h3>
      <p>{badge.description}</p>
      {badge.unlocked ? (
        <span className="ach-status">Unlocked</span>
      ) : (
        <>
          <ProgressBar value={(badge.current / badge.goal) * 100} label={`${badge.title} progress`} />
          <span className="ach-status muted">
            {badge.current}/{badge.goal}
          </span>
        </>
      )}
    </div>
  );
}

export default AchievementCard;
