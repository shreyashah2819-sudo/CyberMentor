import ProgressBar from "./ProgressBar";

function XPBar({ currentXP = 0, requiredXP = 100 }) {
  return (
    <div className="xp-bar">
      <div className="xp-bar-header">
        <span>XP</span>
        <span>
          {currentXP} / {requiredXP}
        </span>
      </div>

      <ProgressBar
        value={currentXP}
        max={requiredXP}
      />
    </div>
  );
}

export default XPBar;