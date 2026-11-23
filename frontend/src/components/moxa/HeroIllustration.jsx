import { ShieldHalf, Lock, ShieldCheck, Skull, Flame } from "lucide-react";

// Landing hero artwork built from CSS + icons (swap for the Figma image later).
function HeroIllustration() {
  return (
    <div className="hero2-art" aria-hidden="true">
      <div className="orb">
        <div className="orb-ring" />
        <div className="shield-big">
          <ShieldHalf size={150} strokeWidth={1.2} />
          <span className="lock-badge">
            <Lock size={44} />
          </span>
        </div>
        <div className="platform" />
      </div>
      <div className="float-card fc-1">
        <ShieldCheck size={26} color="var(--green)" />
        <div><b>Data Protected</b><small>Your data is safe</small></div>
      </div>
      <div className="float-card fc-2">
        <Skull size={26} color="var(--violet)" />
        <div><b>Threat Detection</b><small>Learn to spot attacks</small></div>
      </div>
      <div className="float-card fc-3">
        <ShieldCheck size={26} color="var(--cyan)" />
        <div><b>System Secure</b><small>No threats found</small></div>
      </div>
      <div className="float-card fc-4">
        <Flame size={26} color="var(--orange)" />
        <div><b>Firewall Active</b><small>Monitoring 24/7</small></div>
      </div>
    </div>
  );
}

export default HeroIllustration;
