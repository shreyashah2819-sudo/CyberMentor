import { useState } from "react";

import {
  Shield,
  Home,
  BookOpen,
  Bot,
  Settings,
  FlaskConical,
  Trophy,
  User,
  Bell,
  ChevronDown,
  AlertTriangle,
  Upload,
  CheckCircle,
  XCircle,
  Info,
  Flag,
  Tag,
  BarChart3,
  Lightbulb,
  RefreshCw,
  ArrowLeft,
} from "lucide-react";

import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

function CyberAttackIdentifierPage() {
  const [incident, setIncident] = useState(
    "Our employee received an email that looked like it was from IT department asking to reset their password. The email had a link which redirected to a fake Microsoft login page. After entering credentials, the user couldn't access their account. Later we noticed unusual login from a different country."
  );

  const [analyzed, setAnalyzed] = useState(false);
  const [fileName, setFileName] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = async () => {
  if (incident.trim().length === 0) {
    return;
  }

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/attack/identify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          incident: incident,
        }),
      }
    );

    const data = await response.json();

    console.log("Attack identification result:", data);
    setAnalysisResult(data);
    setAnalyzed(true);
  } catch (error) {
    console.error(
      "Attack identification failed:",
      error
    );
  }
};

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      setFileName(file.name);
    }
  };

  const handleReset = () => {
    setAnalyzed(false);
    setFileName("");
  };

  return (
    <div className="attack-page">
      {/* Sidebar */}
      <aside className="attack-sidebar">
        <div className="attack-logo">
          <div className="attack-logo-icon">
            <Shield size={24} />
          </div>

          <div>
            <strong>CYBERMENTOR</strong>
            <span>LEARN. DEFEND. LEVEL UP.</span>
          </div>
        </div>

        <nav className="attack-nav">
          <button>
            <Home size={19} />
            <span>Home</span>
          </button>

          <button>
            <BookOpen size={19} />
            <span>Cyber Academy</span>
          </button>

          <button>
            <Bot size={19} />
            <span>AI Mentor</span>
          </button>

          <button>
            <Trophy size={19} />
            <span>Challenge Arena</span>
          </button>

          <button className="attack-nav-active">
            <FlaskConical size={19} />
            <span>Cyber Lab</span>
          </button>

          <button>
            <BookOpen size={19} />
            <span>Story Mode</span>
          </button>

          <button>
            <Shield size={19} />
            <span>Badges</span>
          </button>

          <button>
            <BarChart3 size={19} />
            <span>Leaderboards</span>
          </button>

          <button>
            <User size={19} />
            <span>Profile</span>
          </button>

          <button>
            <Settings size={19} />
            <span>Settings</span>
          </button>
        </nav>

        <div className="attack-profile">
          <div className="attack-avatar">A</div>

          <div className="attack-profile-info">
            <strong>Aditi!</strong>
            <span>Cyber Guardian</span>
            <small>Level 12</small>
          </div>

          <div className="attack-xp">
            <div>
              <span>2,450 / 5,000 XP</span>
            </div>

            <ProgressBar value={2450} max={5000} />
          </div>
        </div>

        <div className="attack-upgrade">
          <div className="attack-upgrade-icon">♛</div>

          <strong>Upgrade to Pro</strong>

          <p>
            Unlock advanced labs,
            <br />
            premium rewards & more!
          </p>

          <button>Upgrade Now</button>
        </div>
      </aside>

      {/* Main */}
      <main className="attack-main">
        {/* Top Bar */}
        <header className="attack-topbar">
          <div className="attack-search">
            <span>⌕</span>
            <input placeholder="Search tools, labs..." />
          </div>

          <div className="attack-top-actions">
            <div className="attack-stat">
              ⚡ <strong>2,450</strong> XP
            </div>

            <div className="attack-stat">
              💎 <strong>Level 12</strong>
            </div>

            <div className="attack-stat">
              🔥 <strong>7 Day Streak</strong>
            </div>

            <button className="attack-notification">
              <Bell size={19} />
              <span>3</span>
            </button>

            <div className="attack-user">
              <div className="attack-user-avatar">A</div>
              <strong>Aditi</strong>
              <ChevronDown size={16} />
            </div>
          </div>
        </header>

        {/* Page Heading */}
        <section className="attack-heading">
          <div className="attack-heading-icon">
            <Shield size={23} />
          </div>

          <div>
            <h1>Cyber Attack Identifier</h1>
            <p>
              Describe a security incident and let AI identify the possible
              attack.
            </p>
          </div>
        </section>

        <div className="attack-layout">
          {/* Left Content */}
          <div className="attack-left">
            {/* Incident Input */}
            <section className="attack-card">
              <div className="attack-card-title">
                <h2>1. Describe the Incident</h2>
                <p>
                  Provide as much detail as possible about the security
                  incident you observed.
                </p>
              </div>

              <textarea
                value={incident}
                onChange={(event) => setIncident(event.target.value)}
                placeholder="Describe the security incident..."
                maxLength={1000}
              />

              <div className="attack-character-count">
                {incident.length} / 1000 characters
              </div>

              <div className="attack-upload-row">
                <label className="attack-upload">
                  <Upload size={17} />
                  <span>
                    {fileName || "Drag & drop files here or browse"}
                  </span>

                  <input
                    type="file"
                    onChange={handleFileChange}
                    hidden
                  />
                </label>

                <Button onClick={handleAnalyze}>
                  <span>✦</span>
                  Analyze Incident
                </Button>
              </div>
            </section>

            {/* AI Analysis */}
            <section className="attack-card">
              <div className="attack-section-title">
                <span className="attack-number">2.</span>
                <h2>AI Analysis & Prediction</h2>
              </div>

              <div className="attack-ai-box">
                <div className="attack-ai-avatar">🤖</div>

                <div className="attack-ai-content">
                  <p>
                    Based on the information provided, our AI model has
                    analyzed the incident and identified the most likely
                    attack type.
                  </p>

                  <div className="attack-prediction">
                    <div>
                      <span>
                        This appears to be a{" "}
                        <strong>
  {analysisResult?.attackType || "Phishing Attack"}
</strong>
                      </span>

                     <small>
  {analysisResult
    ? `with ${analysisResult.severity.toLowerCase()} severity and ${analysisResult.confidence}% confidence.`
    : "with possible credential harvesting."}
</small>
                    </div>

                    <CheckCircle size={25} />
                  </div>
                </div>
              </div>
            </section>

            {/* Attack Details */}
            <section className="attack-card">
              <div className="attack-section-title">
                <span className="attack-number">3.</span>
                <h2>Attack Details</h2>
              </div>

              <div className="attack-details">
                <div className="attack-detail-row">
                  <div className="attack-detail-icon">
                    <Tag size={18} />
                  </div>

                  <div className="attack-detail-label">
                    Attack Type
                  </div>

                 

                  <strong>
  {analysisResult?.attackType || "Phishing Attack"}
</strong>
                </div>

                <div className="attack-detail-row">
                  <div className="attack-detail-icon">
                    <Info size={18} />
                  </div>

                  <div className="attack-detail-label">
                    Description
                  </div>

                  <p>
  {analysisResult?.description ||
    "Attackers impersonate a trusted entity to trick users into revealing sensitive information or credentials."}
</p>
                </div>

                <div className="attack-detail-row">
                  <div className="attack-detail-icon">
                    <Flag size={18} />
                  </div>

                  <div className="attack-detail-label">
                    Common Goal
                  </div>

                  <p>
  {analysisResult?.commonGoal ||
    "Steal credentials, gain unauthorized access to accounts or systems."}
</p>
                </div>

                <div className="attack-detail-row">
                  <div className="attack-detail-icon">
                    <Tag size={18} />
                  </div>

                  <div className="attack-detail-label">
                    MITRE ATT&CK ID
                  </div>

                  <strong>
  {analysisResult?.mitreId || "T1566 - Phishing"}
</strong>
                </div>

                <div className="attack-confidence-row">
                  <div className="attack-detail-icon">
                    <BarChart3 size={18} />
                  </div>

                  <div className="attack-detail-label">
                    Confidence Score
                  </div>

                  <div className="attack-confidence-bar">
                    <ProgressBar
  value={analysisResult?.confidence || 92}
  max={100}
/>
                  </div>

                  <strong>
  {analysisResult?.confidence || 92}%
</strong>
                </div>
              </div>
            </section>

            {/* Prevention */}
            <section className="attack-card">
              <div className="attack-section-title">
                <span className="attack-number">4.</span>
                <h2>Prevention & Immediate Actions</h2>
              </div>

              <div className="attack-actions-grid">
                <div className="attack-prevention">
                  <h3>Prevention (What You Can Do)</h3>

                  <p>
                    <CheckCircle size={16} />
                    Always verify the sender's email address.
                  </p>

                  <p>
                    <CheckCircle size={16} />
                    Do not click on links or download attachments from
                    unknown sources.
                  </p>

                  <p>
                    <CheckCircle size={16} />
                    Enable multi-factor authentication (MFA).
                  </p>

                  <p>
                    <CheckCircle size={16} />
                    Regular security awareness training for employees.
                  </p>

                  <p>
                    <CheckCircle size={16} />
                    Use email filtering and phishing protection tools.
                  </p>
                </div>

                <div className="attack-immediate">
                  <h3>Immediate Actions (What To Do Now)</h3>

                  <p>
                    <XCircle size={16} />
                    Reset affected user's password immediately.
                  </p>

                  <p>
                    <XCircle size={16} />
                    Revoke active sessions and sign out from all devices.
                  </p>

                  <p>
                    <XCircle size={16} />
                    Scan the system for malware or suspicious activity.
                  </p>

                  <p>
                    <XCircle size={16} />
                    Report the incident to your IT security team.
                  </p>

                  <p>
                    <XCircle size={16} />
                    Monitor account activity for any unusual behavior.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Content */}
          <aside className="attack-right">
            {/* Attack Summary */}
            <section className="attack-side-card">
              <h3>Attack Type Summary</h3>

              <div className="attack-summary-icon">🥷</div>

             <h2>
  {analysisResult?.attackType || "Phishing Attack"}
</h2>
              <div className="attack-tags">
                <span>Social Engineering</span>
                <span>Credential Theft</span>
                <span>Initial Access</span>
              </div>
            </section>

            {/* Confidence */}
            <section className="attack-side-card">
              <h3>Confidence Level</h3>

              <div className="attack-gauge">
                <div className="attack-gauge-number">
  {analysisResult?.confidence || 92}%
</div>
              </div>

              <strong className="attack-very-high">
  {analysisResult?.confidence >= 80
    ? "Very High"
    : analysisResult?.confidence >= 60
    ? "High"
    : "Moderate"}
</strong>

              <p>
                High confidence in this prediction based on the details
                you provided.
              </p>
            </section>

            {/* Why */}
            <section className="attack-side-card attack-why">
              <h3>🤖 Why this attack?</h3>

              <p>
  {analysisResult
    ? `The incident was identified as ${analysisResult.attackType}. ${analysisResult.description}`
    : "The incident involves a deceptive email impersonating a trusted entity, containing a malicious link to a fake login page, leading to credential theft and unauthorized access."}
</p>
            </section>

            {/* Security Tip */}
            <section className="attack-side-card attack-tip">
              <h3>
                <Lightbulb size={17} />
                Security Tip
              </h3>

              <p>
                Phishing is one of the most common attack vectors. Always
                think before you click!
              </p>
            </section>
          </aside>
        </div>

        {/* Bottom Banner */}
        <section className="attack-bottom-banner">
          <div className="attack-bottom-bot">🤖</div>

          <div>
            <h3>Stay Alert, Stay Secure!</h3>
            <p>
              Cyber attackers rely on human mistakes.
              <br />
              Awareness and vigilance are your best defense.
            </p>
          </div>

          <button onClick={handleReset}>
            <RefreshCw size={16} />
            Analyze Another Incident
          </button>
        </section>

        {analyzed && analysisResult && (
  <div className="attack-success-message">
    <CheckCircle size={18} />
    Analysis completed — {analysisResult.attackType} identified
    with {analysisResult.confidence}% confidence.
  </div>
)}
      </main>
    </div>
  );
}

export default CyberAttackIdentifierPage;