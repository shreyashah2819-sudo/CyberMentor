// stats: [{ icon, tone, value, label }]
function StatsBar({ stats }) {
  return (
    <div className="statbar">
      {stats.map(({ icon: Icon, tone, value, label }) => (
        <div key={label} className="statitem">
          <div className={`sicon tone-${tone}`}>
            <Icon size={26} />
          </div>
          <div>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsBar;
