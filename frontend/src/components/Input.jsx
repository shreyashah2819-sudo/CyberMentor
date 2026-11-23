import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Labelled input. Pass `icon` (a lucide component) for a leading icon.
// type="password" automatically gets a show/hide toggle.
function Input({ label, id, icon: Icon, type = "text", error, ...props }) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="field">
      {label && <label htmlFor={inputId}>{label}</label>}
      <div className={`input-wrap${error ? " has-error" : ""}`}>
        {Icon && <Icon size={18} className="input-icon" />}
        <input id={inputId} type={isPassword && show ? "text" : type} {...props} />
        {isPassword && (
          <button
            type="button"
            className="input-toggle"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}

export default Input;
