// Simple educational strength meter: 1 (weak) to 3 (strong).
export function strengthOf(pw) {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12 || (/[a-z]/.test(pw) && /[A-Z]/.test(pw) && /\d/.test(pw))) score++;
  if (pw.length >= 12 && /[^A-Za-z0-9]/.test(pw)) score++;
  return Math.max(1, score);
}

const LABELS = ["", "Weak: try a longer passphrase", "Okay", "Strong"];

function PasswordStrength({ password }) {
  if (!password) return null;
  const strength = strengthOf(password);
  return (
    <>
      <div className="strength" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <i key={n} className={strength >= n ? `on-${strength}` : ""} />
        ))}
      </div>
      <p className="strength-label">{LABELS[strength]}</p>
    </>
  );
}

export default PasswordStrength;
