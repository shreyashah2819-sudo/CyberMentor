// Simple SVG bar chart. data: [{ label, value }] with value 0-100 (percent).
function ProgressChart({ data }) {
  const W = 560;
  const H = 200;
  const pad = { l: 34, r: 8, t: 10, b: 28 };
  const innerW = W - pad.l - pad.r;
  const innerH = H - pad.t - pad.b;
  const slot = innerW / Math.max(data.length, 1);
  const barW = Math.min(44, slot * 0.6);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="chart" role="img" aria-label="Challenge scores over time">
      {[0, 50, 100].map((g) => {
        const y = pad.t + innerH - (g / 100) * innerH;
        return (
          <g key={g}>
            <line x1={pad.l} x2={W - pad.r} y1={y} y2={y} stroke="var(--border)" strokeWidth="1" />
            <text x={pad.l - 6} y={y + 4} textAnchor="end" fontSize="10" fill="var(--muted)">
              {g}%
            </text>
          </g>
        );
      })}
      {data.map((d, i) => {
        const h = (d.value / 100) * innerH;
        const x = pad.l + slot * i + (slot - barW) / 2;
        const y = pad.t + innerH - h;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={Math.max(h, 2)} rx="6" fill="url(#bar-grad)">
              <title>{`${d.label}: ${d.value}%`}</title>
            </rect>
            <text x={x + barW / 2} y={H - 10} textAnchor="middle" fontSize="10" fill="var(--muted)">
              {d.label}
            </text>
          </g>
        );
      })}
      <defs>
        <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--violet)" />
          <stop offset="100%" stopColor="var(--cyan)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ProgressChart;
