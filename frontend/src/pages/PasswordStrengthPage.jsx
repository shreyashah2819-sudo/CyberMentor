import { useState } from "react";

import {
  Shield,
  Home,
  BookOpen,
  Bot,
  Settings,
  FlaskConical,
  BadgeCheck,
  Trophy,
  User,
  Bell,
  ChevronDown,
  Eye,
  EyeOff,
  RefreshCw,
  CheckCircle,
  XCircle,
  Lock,
  Lightbulb,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";


function PasswordStrengthPage() {

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  /* ---------------- PASSWORD ANALYSIS ---------------- */

  


const [analysis, setAnalysis] = useState({
  score: 0,
  level: "Very Weak",
});

console.log("Password analysis state:", analysis);

  /* ---------------- REQUIREMENTS ---------------- */

  const requirements = [
    {
      label: "At least 8 characters",
      passed: password.length >= 8,
    },
    {
      label: "At least 12 characters recommended",
      passed: password.length >= 12,
    },
    {
      label: "Contains uppercase letters",
      passed: /[A-Z]/.test(password),
    },
    {
      label: "Contains lowercase letters",
      passed: /[a-z]/.test(password),
    },
    {
      label: "Contains numbers",
      passed: /[0-9]/.test(password),
    },
    {
      label: "Contains special characters",
      passed: /[^A-Za-z0-9]/.test(password),
    },
  ];


  /* ---------------- CRACK TIME ---------------- */

  const getCrackTime = () => {

    if (!password) {
      return "—";
    }

    if (analysis.score < 20) {
      return "Instantly";
    }

    if (analysis.score < 40) {
      return "A few seconds";
    }

    if (analysis.score < 60) {
      return "A few hours";
    }

    if (analysis.score < 80) {
      return "Several years";
    }

    return "Centuries";
  };


  /* ---------------- GENERATE PASSWORD ---------------- */

  const generatePassword = () => {

    const characters =
      "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*";

    let generated = "";

    for (let i = 0; i < 16; i++) {
      generated +=
        characters[Math.floor(Math.random() * characters.length)];
    }

    setPassword(generated);
    setShowPassword(true);
  };


  return (

    <div className="password-page">


      {/* =====================================================
          SIDEBAR
         ===================================================== */}

      <aside className="password-sidebar">

        <div className="password-logo">

          <div className="password-logo-icon">
            <Shield size={24} />
          </div>

          <div>
            <h2>CYBER MENTOR</h2>
            <p>Learn. Defend. Level Up.</p>
          </div>

        </div>


        <nav className="password-nav">

          <button>
            <Home size={18} />
            <span>Home</span>
          </button>

          <button>
            <BookOpen size={18} />
            <span>Cyber Academy</span>
          </button>

          <button>
            <Bot size={18} />
            <span>AI Mentor</span>
          </button>

          <button>
            <Trophy size={18} />
            <span>Challenge Arena</span>
          </button>

          <button className="active">
            <FlaskConical size={18} />
            <span>Cyber Lab</span>
          </button>

          <button>
            <BookOpen size={18} />
            <span>Story Mode</span>
          </button>

          <button>
            <BadgeCheck size={18} />
            <span>Badges</span>
          </button>

          <button>
            <Trophy size={18} />
            <span>Leaderboards</span>
          </button>

          <button>
            <User size={18} />
            <span>Profile</span>
          </button>

          <button>
            <Settings size={18} />
            <span>Settings</span>
          </button>

        </nav>


        {/* Profile */}

        <div className="password-profile">

          <div className="password-profile-top">

            <div className="password-avatar">
              👩🏻
            </div>

            <div>
              <strong>Aditi!</strong>
              <span>Cyber Guardian</span>
              <small>Level 12</small>
            </div>

          </div>

          <ProgressBar
            value={2450}
            max={5000}
          />

          <p>2,450 / 5,000 XP</p>

        </div>


        {/* Upgrade */}

        <div className="password-upgrade">

          <Trophy size={21} />

          <h3>Upgrade to Pro</h3>

          <p>
            Unlock advanced labs,
            premium content & more!
          </p>

          <Button>
            Upgrade Now
          </Button>

        </div>

      </aside>



      {/* =====================================================
          MAIN CONTENT
         ===================================================== */}

      <main className="password-main">


        {/* HEADER */}

        <header className="password-header">

          <div className="password-breadcrumb">

            <ArrowLeft size={15} />

            <span>Cyber Lab</span>

            <span>/</span>

            <strong>Password Strength Analyzer</strong>

          </div>


          <div className="password-header-right">

            <div className="password-xp">
              ⚡ <strong>2,450 XP</strong>
            </div>

            <div className="password-level">
              🛡️ <strong>Level 12</strong>
            </div>

            <div className="password-streak">
              🔥 <strong>7 Day Streak</strong>
            </div>

            <button className="password-notification">
              <Bell size={18} />
              <span>3</span>
            </button>

            <div className="password-user">

              <div className="password-user-avatar">
                👩🏻
              </div>

              <strong>Aditi</strong>

              <ChevronDown size={15} />

            </div>

          </div>

        </header>



        {/* PAGE TITLE */}

        <section className="password-title">

          <div className="password-title-icon">
            <Lock size={25} />
          </div>

          <div>

            <h1>Password Strength Analyzer</h1>

            <p>
              Check your password strength and learn how to make
              your passwords more secure.
            </p>

          </div>

        </section>



        {/* =====================================================
            MAIN GRID
           ===================================================== */}

        <div className="password-grid">


          {/* LEFT SIDE */}

          <section className="password-left">


            {/* INPUT CARD */}

            <div className="password-input-card">

              <div className="password-card-heading">

                <div>
                  <h2>Check Your Password</h2>
                  <p>
                    Your password is analyzed locally.
                    We never store your password.
                  </p>
                </div>

                <Shield size={22} />

              </div>


              <label>
                Enter password
              </label>


              <div className="password-input-wrapper">

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={async (e) => {
  const value = e.target.value;

  setPassword(value);

  if (!value) {
    setAnalysis({
      score: 0,
      level: "Very Weak",
    });
    return;
  }

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/password/check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: value,
        }),
      }
    );

    const data = await response.json();

    setAnalysis({
      score: data.score,
      level: data.strength,
    });
  } catch (error) {
    console.error("Password analysis failed:", error);
  }
}}
                  placeholder="Enter your password..."
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label="Show password"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>


              <div className="password-input-actions">

                <button
                  className="generate-password"
                  onClick={generatePassword}
                >
                  <Sparkles size={16} />
                  Generate Strong Password
                </button>

              </div>

            </div>



            {/* STRENGTH RESULT */}

            <div className="password-strength-card">

              <div className="strength-header">

                <div>

                  <span>Password Strength</span>

                  <h2 className={`strength-${analysis.level
                    .toLowerCase()
                    .replace(" ", "-")}`}>
                    {password
                      ? analysis.level
                      : "Enter a password"}
                  </h2>

                </div>

                <div className="strength-score">

                  <strong>
                    {password ? analysis.score : 0}
                  </strong>

                  <span>/100</span>

                </div>

              </div>


              <div className="strength-progress">

                <div
                  className={`strength-progress-fill strength-${analysis.level
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  style={{
                    width: `${password ? analysis.score : 0}%`,
                  }}
                />

              </div>


              <div className="strength-scale">

                <span>Very Weak</span>
                <span>Weak</span>
                <span>Medium</span>
                <span>Strong</span>
                <span>Very Strong</span>

              </div>

            </div>



            {/* REQUIREMENTS */}

            <div className="password-requirements-card">

              <div className="card-title-row">

                <div>

                  <h2>Password Requirements</h2>

                  <p>
                    Follow these recommendations for a stronger password.
                  </p>

                </div>

                <CheckCircle size={21} />

              </div>


              <div className="requirements-grid">

                {requirements.map((item) => (

                  <div
                    className={`requirement ${
                      item.passed ? "passed" : ""
                    }`}
                    key={item.label}
                  >

                    {item.passed ? (
                      <CheckCircle size={17} />
                    ) : (
                      <XCircle size={17} />
                    )}

                    <span>
                      {item.label}
                    </span>

                  </div>

                ))}

              </div>

            </div>



            {/* SECURITY DETAILS */}

            <div className="security-details-card">

              <h2>Security Details</h2>

              <div className="security-detail-grid">

                <div className="security-detail">

                  <span>Estimated crack time</span>

                  <strong>
                    {getCrackTime()}
                  </strong>

                </div>


                <div className="security-detail">

                  <span>Password length</span>

                  <strong>
                    {password.length} characters
                  </strong>

                </div>


                <div className="security-detail">

                  <span>Character variety</span>

                  <strong>
                    {requirements.filter(
                      (item) => item.passed
                    ).length} / 6
                  </strong>

                </div>


                <div className="security-detail">

                  <span>Security status</span>

                  <strong className={
                    analysis.score >= 60
                      ? "secure-text"
                      : "warning-text"
                  }>
                    {analysis.score >= 60
                      ? "Protected"
                      : "Needs improvement"}
                  </strong>

                </div>

              </div>

            </div>

          </section>



          {/* =====================================================
              RIGHT SIDE
             ===================================================== */}

          <aside className="password-right">


            {/* SCORE */}

            <div className="password-score-card">

              <div className="score-card-header">

                <h3>Security Score</h3>

                <span>ⓘ</span>

              </div>


              <div className="score-circle">

                <div>

                  <strong>
                    {password ? analysis.score : 0}
                  </strong>

                  <span>/100</span>

                </div>

              </div>


              <h4>
                {password
                  ? analysis.level
                  : "Waiting for password"}
              </h4>

              <p>
                {password
                  ? "Your password has been analyzed."
                  : "Enter a password to see your security score."}
              </p>

            </div>



            {/* AI RECOMMENDATION */}

            <div className="password-ai-card">

              <div className="ai-heading">

                <div className="ai-icon">
                  <Lightbulb size={17} />
                </div>

                <h3>CyberMentor Recommendation</h3>

              </div>


              <p>

                {analysis.score >= 80
                  ? "Excellent! Your password has strong security characteristics. Keep it unique and never reuse it."
                  : analysis.score >= 60
                  ? "Good password! Adding more length and character variety can make it even stronger."
                  : "Your password could be stronger. Increase its length and combine uppercase, lowercase, numbers, and special characters."}

              </p>


              <div className="ai-tip">

                <CheckCircle size={16} />

                <span>
                  Never reuse important passwords across different accounts.
                </span>

              </div>

            </div>



            {/* QUICK TIPS */}

            <div className="password-tips-card">

              <div className="tips-heading">

                <Shield size={18} />

                <h3>Quick Security Tips</h3>

              </div>


              <div className="tip-item">
                <span>01</span>
                <p>Use at least 12–16 characters.</p>
              </div>

              <div className="tip-item">
                <span>02</span>
                <p>Use a mix of different character types.</p>
              </div>

              <div className="tip-item">
                <span>03</span>
                <p>Avoid names, birthdays and common words.</p>
              </div>

              <div className="tip-item">
                <span>04</span>
                <p>Use a unique password for every account.</p>
              </div>

            </div>



            {/* SAFE BANNER */}

            <div className="password-safe-card">

              <div className="safe-card-icon">
                🛡️
              </div>

              <div>

                <strong>
                  Your password stays private
                </strong>

                <p>
                  This analyzer runs in your browser.
                </p>

              </div>

            </div>

          </aside>

        </div>



        {/* BOTTOM BANNER */}

        <div className="password-bottom-banner">

          <div className="bottom-banner-icon">
            🤖
          </div>

          <div>

            <h3>
              Build stronger digital defenses!
            </h3>

            <p>
              A strong password is your first line of defense.
              Keep learning and stay secure.
            </p>

          </div>

          <button
            onClick={() =>
              window.location.href = "/cyber-lab"
            }
          >
            <ArrowLeft size={16} />
            Back to Cyber Lab
          </button>

        </div>


      </main>

    </div>
  );
}


export default PasswordStrengthPage;