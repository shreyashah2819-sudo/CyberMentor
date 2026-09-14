function LevelBadge({ level = 1 }) {
  return (
    <div className="level-badge">
      <span className="level-badge-label">LEVEL</span>
      <span className="level-badge-number">{level}</span>
    </div>
  );
}

export default LevelBadge;