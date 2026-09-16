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
  Search,
  ChevronDown,
  Bell,
  ExternalLink,
  CheckCircle,
  Globe,
  Calendar,
  MapPin,
  Code,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

import ProgressBar from "../components/progressBar";
import Button from "../components/Button";

function URLSafetyCheckerPage() {
    const [url, setUrl] = useState(
    "https://example-secure-login.com/verify-account"
  );
  const [checked, setChecked] = useState(false);

  const [analysisResult, setAnalysisResult] = useState(null);
async function analyzeURL() {
  if (!url.trim()) {
    return;
  }

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/url/check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    setChecked(true);
    setAnalysisResult(data);
    setChecked(true);
  } catch (error) {
    console.error("URL analysis failed:", error);
  }
}
  return (
    <div className="url-checker-page">

      {/* Sidebar */}
      <aside className="url-checker-sidebar">

        <div className="url-sidebar-logo">
          <div className="url-logo-icon">
            <Shield size={25} />
          </div>

          <div>
            <h2>CYBER MENTOR</h2>
            <p>Learn. Defend. Level Up.</p>
          </div>
        </div>

        <nav className="url-sidebar-nav">

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
            <Settings size={18} />
            <span>Challenges</span>
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
        <div className="url-sidebar-profile">

          <div className="url-profile-top">
            <div className="url-profile-avatar">
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
        <div className="url-upgrade-card">

          <Trophy size={22} />

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


      {/* Main */}
      <main className="url-checker-main">

        {/* Top Header */}
        <header className="url-checker-header">

          <div className="url-breadcrumb">
            <span>‹</span>
            <span>Cyber Lab</span>
            <span>›</span>
            <strong>URL Safety Checker</strong>
          </div>

          <div className="url-header-right">

            <div className="url-xp">
              ⚡ <strong>2,450 XP</strong>
            </div>

            <div className="url-level">
              🛡️ <strong>Level 12</strong>
            </div>

            <div className="url-streak">
              🔥 <strong>7 Day Streak</strong>
            </div>

            <button className="url-notification">
              <Bell size={19} />
              <span>3</span>
            </button>

            <div className="url-user">
              <div className="url-user-avatar">
                👩🏻
              </div>

              <strong>Shreya</strong>

              <ChevronDown size={16} />
            </div>

          </div>

        </header>


        {/* Content */}
        <div className="url-checker-content">

          <section className="url-checker-left">

            {/* Title */}
            <div className="url-page-title">
              <h1>
                URL Safety Checker
                <span>ⓘ</span>
              </h1>

              <p>Check if a link is safe to visit</p>
            </div>


            {/* URL Input */}
            <div className="url-input-card">

              <label>
                Paste or enter the URL to check
              </label>

              <div className="url-input-row">

           <input
                 type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
            />

                <button
                    className="check-safety-button"
                    onClick={analyzeURL}
>
                       <Shield size={17} />
                        Check Safety
                </button>

              </div>

              <small>
                Example: https://www.example.com
              </small>

            </div>


            {/* Quick Security Checks */}
            <div className="url-section-card">

              <h3>Quick Security Checks</h3>

              <div className="security-checks">

                <div className="security-check">
                  <div className="security-icon green">
                    🔒
                  </div>

                  <div>
                    <strong>HTTPS</strong>
                    <span>Secure Connection</span>
                    <b>
  {analysisResult
  ? analysisResult.https
    ? "Yes"
    : "No"
  : url.startsWith("https://")
    ? "Yes"
    : "No"}
</b>
                  </div>
                </div>


                <div className="security-check">
                  <div className="security-icon green">
                    <Shield size={19} />
                  </div>

                  <div>
                    <strong>SSL Certificate</strong>
                    <span>
  {url.startsWith("https://")
    ? "Valid"
    : "No secure connection"}
</span>
                    <b>
  {url.startsWith("https://")
    ? "Valid"
    : "Not Available"}
</b>
                  </div>
                </div>


                <div className="security-check">
                  <div className="security-icon blue">
                    <Globe size={19} />
                  </div>

                  <div>
                    <strong>Domain Age</strong>
                    <span>1.2 years</span>
                    <b>Created on 12 May 2023</b>
                  </div>
                </div>


                <div className="security-check">
                  <div className="security-icon purple">
                    <Globe size={19} />
                  </div>

                  <div>
                    <strong>Blacklist Status</strong>
                    <span>Not Listed</span>
                    <b>Clean</b>
                  </div>
                </div>

              </div>

            </div>


            {/* Domain Analysis */}
            <div className="url-section-card domain-analysis">

              <h3>Domain Analysis</h3>

              <div className="domain-grid">

                <div className="domain-item">
                  <div className="domain-item-icon purple">
                    <Globe size={17} />
                  </div>

                  <div>
                    <label>Domain</label>
                  <strong>
  {analysisResult
    ? analysisResult.domain
    : url.replace(/^https?:\/\//, "").split("/")[0]}
</strong>
                  </div>
                </div>


                <div className="domain-item">
                  <div className="domain-item-icon purple">
                    <Search size={17} />
                  </div>

                  <div>
                    <label>Registrar</label>
                    <strong>Cloudflare, Inc.</strong>
                  </div>
                </div>


                <div className="domain-item">
                  <div className="domain-item-icon blue">
                    <Calendar size={17} />
                  </div>

                  <div>
                    <label>Creation Date</label>
                    <strong>12 May 2023</strong>
                  </div>
                </div>


                <div className="domain-item">
                  <div className="domain-item-icon blue">
                    <Calendar size={17} />
                  </div>

                  <div>
                    <label>Expiration Date</label>
                    <strong>12 May 2025 (in 280 days)</strong>
                  </div>
                </div>


                <div className="domain-item">
                  <div className="domain-item-icon orange">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <label>IP Address</label>
                    <strong>172.67.160.1</strong>
                  </div>
                </div>


                <div className="domain-item">
                  <div className="domain-item-icon red">
                    🌎
                  </div>

                  <div>
                    <label>Server Location</label>
                    <strong>🇺🇸 United States</strong>
                  </div>
                </div>


                <div className="domain-item">
                  <div className="domain-item-icon purple">
                    <Code size={17} />
                  </div>

                  <div>
                    <label>URL Structure</label>
                    <strong>
                     {url.includes("?") || url.includes("=")
                           ? "Contains parameters"
                           : "Clean"}
                    </strong>
                  </div>
                </div>


                <div className="domain-item">
                  <div className="domain-item-icon purple">
                    <ExternalLink size={17} />
                  </div>

                  <div>
                    <label>Redirections</label>
                    <strong>No suspicious redirects found</strong>
                  </div>
                </div>


                <div className="domain-item">
                  <div className="domain-item-icon red">
                    <AlertTriangle size={17} />
                  </div>

                  <div>
                    <label>Suspicious Factors</label>
                    <strong>
  {analysisResult &&
  analysisResult.suspiciousFactors.length > 0
    ? analysisResult.suspiciousFactors.join(", ")
    : "None detected"}
</strong>
                  </div>
                </div>


                <div className="domain-item">
                  <div className="domain-item-icon red">
                    <AlertTriangle size={17} />
                  </div>

                  <div>
                    <label>Phishing Signals</label>
                   <strong>
  {analysisResult &&
  analysisResult.phishingSignals.length > 0
    ? analysisResult.phishingSignals.join(", ")
    : "None detected"}
</strong>
                  </div>
                </div>

              </div>

            </div>


            {/* Bottom Safety Banner */}
            <div className="url-safe-banner">

              <div className="url-safe-icon">
                <Shield size={21} />
              </div>

              <div>
                <strong>Stay Safe Online</strong>
                <p>
                  Always double-check URLs, avoid suspicious links,
                  and keep your data safe!
                </p>
              </div>

              <button>
                Learn More
                <ExternalLink size={14} />
              </button>

            </div>

          </section>


          {/* Right Panel */}
          <aside className="url-checker-right">

            {/* Risk Score */}
            <div className="risk-card">

              <h3>Risk Score ⓘ</h3>

              <div className="risk-circle">

                <div>
                 <strong>
  {analysisResult
    ? 100 - analysisResult.securityScore
    : 12}
</strong>
                  <span>/100</span>
                </div>

              </div>

              <h4>
  {analysisResult
    ? analysisResult.riskLevel
    : "Very Safe"}
</h4>

              <p>
  {analysisResult
    ? `This URL has a ${analysisResult.riskLevel.toLowerCase()} risk level.`
    : "This URL is very likely to be safe."}
</p>

              <div className="risk-levels">

                <div>
                  <span className="risk-dot very-safe"></span>
                  <strong>0 - 29</strong>
                  <span>Very Safe</span>
                </div>

                <div>
                  <span className="risk-dot low-risk"></span>
                  <strong>30 - 59</strong>
                  <span>Low Risk</span>
                </div>

                <div>
                  <span className="risk-dot medium-risk"></span>
                  <strong>60 - 79</strong>
                  <span>Medium Risk</span>
                </div>

                <div>
                  <span className="risk-dot high-risk"></span>
                  <strong>80 - 100</strong>
                  <span>High Risk</span>
                </div>

              </div>

            </div>


            {/* AI Recommendation */}
            <div className="ai-recommendation">

              <h3>
                <Lightbulb size={17} />
                AI Recommendation
              </h3>

              <p>
                This URL appears to be safe to visit.
                It uses HTTPS, has a valid SSL certificate,
                and shows no signs of phishing or malicious activity.
              </p>

              <div className="recommendation-box">
                <CheckCircle size={17} />
                <span>
                  Go ahead, this link seems safe.
                </span>
              </div>

            </div>


            {/* What Next */}
            <div className="what-next-card">

              <h3>
                <Shield size={17} />
                What to do next?
              </h3>

              <p>
                <span>◈</span>
                Do not share sensitive info
              </p>

              <p>
                <span>◈</span>
                Ensure the content is what you expect
              </p>

              <p>
                <span>ⓘ</span>
                Keep your browser up to date
              </p>

            </div>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default URLSafetyCheckerPage;
