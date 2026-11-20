// tone: "cyan" | "green" | "amber" | "violet" | "gray"
function Badge({ tone = "cyan", children }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export default Badge;
