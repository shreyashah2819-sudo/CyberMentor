import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function WelcomeCard({ username, level, streak, nextLesson }) {
  return (
    <div className="welcome">
      <div>
        <p className="welcome-kicker">Home Base</p>
        <h1>Welcome back, {username}!</h1>
        <p className="welcome-sub">
          You're a <b>Level {level}</b> Cyber Guardian
          {streak > 0 ? ` on a ${streak}-day streak.` : ". Finish a challenge today to start a streak."}
        </p>
      </div>
      <Link to={nextLesson ? `/academy/${nextLesson.id}` : "/challenges"} className="btn btn-cta">
        {nextLesson ? "Continue learning" : "Enter the Arena"} <ArrowRight size={16} />
      </Link>
    </div>
  );
}

export default WelcomeCard;
