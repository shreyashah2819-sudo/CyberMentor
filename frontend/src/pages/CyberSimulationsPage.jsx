import {
  Home,
  BookOpen,
  Bot,
  Trophy,
  FlaskConical,
  User,
  Settings,
  Gamepad2,
  Shield,
  BarChart3,
  Lock,
  Flame,
  Zap,
  Target,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

import ProgressBar from "../components/ProgressBar";

function CyberSimulationsPage() {
  const fakeBankEmailCompleted =
    localStorage.getItem("fakeBankEmailCompleted") === "true";

  return (
    <div className="simulation-page">
      {/* Sidebar */}
      <aside className="simulation-sidebar">

        <div className="simulation-logo">
          <div className="simulation-logo-icon">
            <Shield size={22} />
          </div>

          <div>
            <strong>CYBERMENTOR</strong>
            <span>Learn. Defend. Level Up.</span>
          </div>
        </div>


        <nav className="simulation-nav">

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

          <button className="simulation-nav-active">
            <Gamepad2 size={18} />
            <span>Cyber Simulations</span>
          </button>

          <button>
            <FlaskConical size={18} />
            <span>Cyber Lab</span>
          </button>

          <button>
            <BookOpen size={18} />
            <span>Story Mode</span>
          </button>

          <button>
            <Shield size={18} />
            <span>Badges</span>
          </button>

          <button>
            <BarChart3 size={18} />
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
        <div className="simulation-profile">

          <div className="simulation-avatar">
            A
          </div>

          <div className="simulation-profile-info">
            <strong>Aditi!</strong>
            <span>Cyber Guardian</span>
            <small>Level 12</small>
          </div>

          <div className="simulation-profile-xp">
            <span>2,450 / 5,000 XP</span>

            <ProgressBar
              value={2450}
              max={5000}
            />
          </div>

        </div>


        {/* Upgrade */}
        <div className="simulation-upgrade">

          <div className="simulation-upgrade-icon">
            ♛
          </div>

          <strong>Upgrade to Pro</strong>

          <p>
            Unlock advanced missions,
            <br />
            premium rewards & more!
          </p>

          <button>
            Upgrade Now
          </button>

        </div>

      </aside>


      {/* Main */}
      <main className="simulation-main">

        {/* Top Bar */}
        <header className="simulation-topbar">

          <div className="simulation-search">
            <span>⌕</span>
            <input placeholder="Search simulations..." />
          </div>


          <div className="simulation-top-stats">

            <div className="simulation-top-stat">
              <Zap size={15} />
              <strong>2,450</strong>
              <span>XP</span>
            </div>

            <div className="simulation-top-stat">
              <Shield size={15} />
              <strong>Level 12</strong>
            </div>

            <div className="simulation-top-stat">
              <Flame size={16} />
              <strong>7 Day Streak</strong>
            </div>

            <button className="simulation-notification">
              🔔
              <span>3</span>
            </button>

            <div className="simulation-user">

              <div className="simulation-user-avatar">
                A
              </div>

              <strong>Aditi</strong>

              <span>⌄</span>

            </div>

          </div>

        </header>


        {/* Heading */}
        <section className="simulation-heading">

          <div>

            <div className="simulation-title-row">

              <Gamepad2 size={24} />

              <h1>
                Cyber Simulations
              </h1>

            </div>

            <p>
              Real-life scenarios. Real decisions. Real impact.
            </p>

          </div>


          <button className="simulation-how-button">
            <HelpCircle size={16} />
            How it Works
          </button>

        </section>


        {/* Stats */}
        <section className="simulation-stats">

          <div className="simulation-stat-card">

            <div className="simulation-stat-icon green">
              <Target size={20} />
            </div>

            <strong>28</strong>
            <span>Missions</span>
            <small>Completed</small>

          </div>


          <div className="simulation-stat-card">

            <div className="simulation-stat-icon yellow">
              <Zap size={20} />
            </div>

            <strong>7,850</strong>
            <span>Total XP</span>
            <small>Earned</small>

          </div>


          <div className="simulation-stat-card">

            <div className="simulation-stat-icon blue">
              ◷
            </div>

            <strong>95%</strong>
            <span>Accuracy</span>
            <small>Rate</small>

          </div>


          <div className="simulation-stat-card">

            <div className="simulation-stat-icon purple">
              <Shield size={20} />
            </div>

            <strong>12</strong>
            <span>Badges</span>
            <small>Earned</small>

          </div>


          <div className="simulation-stat-card">

            <div className="simulation-stat-icon pink">
              ♥
            </div>

            <strong>3</strong>
            <span>Lives Left</span>

            <small className="simulation-hearts">
              ♥ ♥ ♡
            </small>

          </div>

        </section>


        {/* Filters */}
        <div className="simulation-filters">

          <button className="simulation-filter-active">
            ▦ All Missions
          </button>

          <button>
            <span className="dot beginner-dot" />
            Beginner
          </button>

          <button>
            <span className="dot intermediate-dot" />
            Intermediate
          </button>

          <button>
            <span className="dot advanced-dot" />
            Advanced
          </button>

          <button>
            ♛ Boss Missions
          </button>

          <select defaultValue="progress">
            <option value="progress">
              Sort by: Progress
            </option>

            <option value="popular">
              Sort by: Popular
            </option>

            <option value="xp">
              Sort by: XP
            </option>
          </select>

        </div>


        {/* Beginner */}
        <MissionSection
          title="Beginner - Cyber Rookie"
          description="Learn the basics and build strong security habits."
          count="10 Missions"
          type="beginner"
          missions={[
            [
              "📨",
              "Fake Bank Email",
              fakeBankEmailCompleted
                ? "Completed"
                : "0/10",
              "+100 XP",
              "fake-bank-email",
            ],

          [
             "🔐",
            "OTP Scam",
             localStorage.getItem("otpScamCompleted") === "true"
            ? "Completed"
            : "0/10",
            "+100 XP",
            "otp-scam",
            ],

            [
              "💬",
              "Fake WhatsApp",
              "7/10",
              "+80 XP",
              "fake-whatsapp",
            ],

            [
              "▦",
              "QR Scam",
              "6/10",
              "+80 XP",
              "qr-scam",
            ],

            [
              "💾",
              "USB Attack",
              "3/10",
              "+80 XP",
              "usb-attack",
            ],
          ]}
        />


        {/* Intermediate */}
        <MissionSection
          title="Intermediate - Cyber Defender"
          description="Level up your skills with tricky situations."
          count="10 Missions"
          type="intermediate"
          missions={[
            [
              "💼",
              "Fake Job Offer",
              "Completed",
              "+120 XP",
              "fake-job-offer",
            ],

            [
              "🔗",
              "Suspicious Link",
              "8/10",
              "+120 XP",
              "suspicious-link",
            ],

            [
              "📦",
              "Fake Delivery SMS",
              "6/10",
              "+120 XP",
              "fake-delivery",
            ],

            [
              "👤",
              "Account Login Alert",
              "5/10",
              "+120 XP",
              "login-alert",
            ],

            [
              "📎",
              "Malicious Attachment",
              "4/10",
              "+120 XP",
              "malicious-attachment",
            ],
          ]}
        />


        {/* Advanced */}
        <MissionSection
          title="Advanced - Cyber Guardian"
          description="Handle complex threats like a pro."
          count="10 Missions"
          type="advanced"
          missions={[
            [
              "📶",
              "WiFi Attack",
              "7/10",
              "+200 XP",
              "wifi-attack",
            ],

            [
              "🔒",
              "Ransomware Incident",
              "4/10",
              "+200 XP",
              "ransomware",
            ],

            [
              "🗄️",
              "SQL Injection",
              "3/10",
              "+200 XP",
              "sql-injection",
            ],

            [
              "📱",
              "MFA Fatigue Attack",
              "2/10",
              "+200 XP",
              "mfa-fatigue",
            ],

            [
              "🖥️",
              "DDoS Attack",
              "1/10",
              "+200 XP",
              "ddos-attack",
            ],
          ]}
        />


        {/* Boss Missions */}
        <section className="boss-section">

          <div className="mission-section-header">

            <div>
              <h2>Boss Missions</h2>
              <p>
                High-stakes missions for ultimate champions.
              </p>
            </div>

            <span>
              3 Missions
            </span>

          </div>


          <div className="boss-grid">

            <BossCard
              icon="👹"
              title="The Perfect Phish"
              description="A highly convincing phishing campaign. Spot all the red flags."
              xp="+500 XP"
            />

            <BossCard
              icon="👹"
              title="Compromised Account"
              description="Your account is hacked. Take the right steps to recover."
              xp="+600 XP"
            />

            <BossCard
              icon="🛡️"
              title="The College Network"
              description="Investigate a network breach on the college system."
              xp="+600 XP"
            />

          </div>

        </section>


        {/* Bottom Progress */}
        <section className="simulation-bottom">

          <div className="bottom-progress-card">

            <div className="bottom-icon">
              <Shield size={20} />
            </div>

            <div>
              <strong>Your Progress</strong>
              <p>Cyber Guardian</p>
            </div>

            <div className="bottom-level">
              12
            </div>

            <div className="bottom-xp">
              <span>
                2,450 / 5,000 XP to next level
              </span>

              <ProgressBar
                value={2450}
                max={5000}
              />
            </div>

          </div>


          <div className="bottom-progress-card">

            <div className="bottom-icon reward">
              🎁
            </div>

            <div>
              <strong>Upcoming Reward</strong>
              <p>Cyber Mentor Badge</p>
            </div>

            <div className="bottom-xp">
              <span>
                Complete 2 more missions to unlock!
              </span>

              <ProgressBar
                value={28}
                max={30}
              />
            </div>

          </div>


          <div className="bottom-progress-card daily">

            <div className="bottom-icon target">
              🎯
            </div>

            <div>
              <strong>Daily Mission</strong>
              <p>
                Complete any mission today and earn extra XP!
              </p>
            </div>

            <button>
              View Daily Mission
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}


/* =========================================
   MISSION SECTION
   ========================================= */

function MissionSection({
  title,
  description,
  count,
  type,
  missions,
}) {
  return (
    <section className={`mission-section ${type}`}>

      <div className="mission-section-header">

        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <span>{count}</span>

      </div>


      <div className="mission-grid">

        {missions.map((mission, index) => (

          <MissionCard
            key={index}
            icon={mission[0]}
            title={mission[1]}
            progress={mission[2]}
            xp={mission[3]}
            type={type}
            missionId={mission[4]}
          />

        ))}


        <button className="mission-next">
          <ChevronRight size={22} />
        </button>

      </div>

    </section>
  );
}


/* =========================================
   MISSION CARD
   ========================================= */

function MissionCard({
  icon,
  title,
  progress,
  xp,
  type,
  missionId,
}) {
  const completed = progress === "Completed";

  return (
    <div
      className={`mission-card ${type}`}
      onClick={() => {

      if (missionId === "fake-bank-email") {
        window.location.href =
        "/cyber-simulations/fake-bank-email";
      }

      if (missionId === "otp-scam") {
        window.location.href =
       "/cyber-simulations/otp-scam";
      }

      }}
    >

      <div className="mission-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <span className="mission-level">

        {type === "beginner"
          ? "Beginner"
          : type === "intermediate"
            ? "Intermediate"
            : "Advanced"}

      </span>


      {completed ? (

        <div className="mission-completed">

          <span>Completed</span>

          <small>●</small>

        </div>

      ) : (

        <div className="mission-progress">

          <ProgressBar
            value={parseInt(progress, 10) || 0}
            max={10}
          />

          <span>
            {progress}
          </span>

        </div>

      )}


      <div className="mission-xp">
        {completed ? "✓" : "⚡"} {xp}
      </div>

    </div>
  );
}


/* =========================================
   BOSS CARD
   ========================================= */

function BossCard({
  icon,
  title,
  description,
  xp,
}) {
  return (
    <div className="boss-card">

      <div className="boss-icon">
        {icon}
      </div>

      <div className="boss-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <span className="boss-label">
          Boss
        </span>

      </div>

      <div className="boss-lock">
        <Lock size={14} />
      </div>

      <div className="boss-footer">

        <span>0/1</span>

        <strong>{xp}</strong>

      </div>

    </div>
  );
}

export default CyberSimulationsPage;