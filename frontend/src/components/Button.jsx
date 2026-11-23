// variant: "primary" | "secondary" | "ghost"
function Button({ variant = "primary", block = false, className = "", children, ...props }) {
  const cls = `btn btn-${variant}${block ? " btn-block" : ""} ${className}`.trim();
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

export default Button;
