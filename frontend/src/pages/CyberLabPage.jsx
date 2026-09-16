import {
  Search,
  ChevronDown,
  Grid2X2,
  List,
  FlaskConical,
  CheckCircle,
  Trophy,
  Target,
  Lock,
  ArrowRight,
} from "lucide-react";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

function CyberLabPage() {
  return (
    <div className="cyber-lab-page">
      {/* Sidebar */}
      <aside className="cyber-lab-sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <FlaskConical size={24} />
          </div>

          <div>
            <h2>CYBER MENTOR</h2>
            <p>Learn. Defend. Level Up.</p>
          </div>
        </div>

        <nav className="cyber-lab-nav">
          <button>⌂ <span>Home</span></button>
          <button>▣ <span>Cyber Academy</span></button>
          <button>🤖 <span>AI Mentor</span></button>
          <button>⚙ <span>Challenges</span></button>

          <button className="active">
            <FlaskConical size={18} />
            <span>Cyber Lab</span>
          </button>

          <button>▣ <span>Story Mode</span></button>
          <button>♢ <span>Badges</span></button>
          <button>♙ <span>Leaderboards</span></button>
          <button>♙ <span>Profile</span></button>
          <button>⚙ <span>Settings</span></button>
        </nav>

        <div className="sidebar-profile">
          <div className="profile-avatar">👩🏻</div>

          <div>
            <strong>Aditi</strong>
            <span>Cyber Guardian</span>
          </div>

          <div className="profile-level">Level 12</div>

          <ProgressBar value={2450} max={5000} />

          <p>2,450 / 5,000 XP</p>
        </div>

        <div className="sidebar-upgrade">
          <Trophy size={22} />

          <h3>Upgrade to Pro</h3>

          <p>
            Unlock advanced labs,
            premium content & more!
          </p>

          <Button>Upgrade Now</Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="cyber-lab-main">
        <div className="cyber-lab-header">
          <div>
            <h1>Cyber Lab</h1>
            <p>
              Practice real-world cybersecurity skills with
              interactive tools.
            </p>
          </div>

          <div className="cyber-lab-header-actions">
            <button className="icon-button">
              🔔
            </button>

            <div className="header-avatar">
              S
            </div>
          </div>
        </div>

        {/* Stats */}
        <section className="cyber-lab-stats">
          <div className="stat-card">
            <FlaskConical size={24} />

            <div>
              <span>Total Tools</span>
              <strong>6</strong>
            </div>
          </div>

          <div className="stat-card">
            <CheckCircle size={24} />

            <div>
              <span>Tools Unlocked</span>
              <strong>5</strong>
            </div>
          </div>

          <div className="stat-card">
            <Trophy size={24} />

            <div>
              <span>Lab XP Earned</span>
              <strong>2,450</strong>
            </div>
          </div>

          <div className="stat-card">
            <Target size={24} />

            <div>
              <span>Tools Mastered</span>
              <strong>4</strong>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="cyber-lab-controls">
          <div className="search-box">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search tools..."
            />
          </div>

          <button className="filter-button">
            All Categories
            <ChevronDown size={16} />
          </button>

          <button className="filter-button">
            All Levels
            <ChevronDown size={16} />
          </button>

          <button className="filter-button">
            Sort: Recommended
            <ChevronDown size={16} />
          </button>

          <div className="view-buttons">
            <button className="view-button active">
              <Grid2X2 size={18} />
            </button>

            <button className="view-button">
              <List size={18} />
            </button>
          </div>
        </section>

        {/* Cybersecurity Tools */}
        <section className="cyber-lab-tools">

          {/* Email Analyzer */}
          <div className="tool-card">
            <div className="tool-icon">✉️</div>

            <h3>Email Analyzer</h3>

            <p>
              Analyze email headers to detect phishing attempts.
            </p>

            <div className="tool-card-bottom">
              <span className="tool-level beginner">
                Beginner
              </span>

              <button
                onClick={() =>
                  (window.location.href =
                    "/phishing-email-analyzer")
                }
              >
                Open Lab
              </button>
            </div>
          </div>

          {/* Cyber Attack Identifier */}
          <div className="tool-card">
            <div className="tool-icon">🕵️</div>

            <h3>Cyber Attack Identifier</h3>

            <p>
              Describe a security incident and let AI identify
              the possible attack.
            </p>

            <div className="tool-card-bottom">
              <span className="tool-level beginner">
                Beginner
              </span>

              <button
                onClick={() =>
                  (window.location.href =
                    "/cyber-attack-identifier")
                }
              >
                Open Lab
              </button>
            </div>
          </div>

          {/* Cyber Simulations */}
          <div className="tool-card">
            <div className="tool-icon">🎮</div>

            <h3>Cyber Simulations</h3>

            <p>
              Practice real-world cybersecurity scenarios
              through interactive missions.
            </p>

            <div className="tool-card-bottom">
              <span className="tool-level beginner">
                Beginner
              </span>

              <button
                onClick={() =>
                  (window.location.href =
                    "/cyber-simulations")
                }
              >
                Open Lab
              </button>
            </div>
          </div>

          {/* URL Inspector */}
          <div className="tool-card">
            <div className="tool-icon">🌐</div>

            <h3>URL Inspector</h3>

            <p>
              Inspect URLs for safety and identify malicious
              links.
            </p>

            <div className="tool-card-bottom">
              <span className="tool-level beginner">
                Beginner
              </span>

              <button
                onClick={() =>
                  (window.location.href =
                    "/url-safety-checker")
                }
              >
                Open Lab
              </button>
            </div>
          </div>

          {/* Password Strength Checker */}
          <div className="tool-card">
            <div className="tool-icon">🔐</div>

            <h3>Password Strength Checker</h3>

            <p>
              Check password strength and learn how to create
              strong passwords.
            </p>

            <div className="tool-card-bottom">
              <span className="tool-level beginner">
                Beginner
              </span>

              <button
                onClick={() =>
                  (window.location.href =
                    "/password-strength")
                }
              >
                Open Lab
              </button>
            </div>
          </div>

          {/* Malware Analyzer */}
          <div className="tool-card locked">
            <div className="tool-icon">🦠</div>

            <h3>Malware Analyzer</h3>

            <p>
              Upload files and analyze potential malware
              behavior.
            </p>

            <Lock size={16} />

            <div className="tool-card-bottom">
              <span className="tool-level intermediate">
                Intermediate
              </span>

              <button
  onClick={() => {
    window.location.href = "/malware-analyzer";
  }}
>
  Open Lab
</button>
            </div>
          </div>

        </section>

        {/* Learning Banner */}
        <div className="cyber-lab-learning-banner">
          <div className="learning-banner-icon">
            🤖
          </div>

          <div className="learning-banner-text">
            <h3>New to Cyber Labs?</h3>

            <p>
              Practice in a safe environment and build
              real-world cybersecurity skills.
            </p>
          </div>

          <button className="learning-banner-button">
            View Learning Paths
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}

export default CyberLabPage;