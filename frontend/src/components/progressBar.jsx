function ProgressBar({ value = 0, max = 100 }) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export default ProgressBar;