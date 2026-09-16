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
  AlertTriangle,
  Link,
  UserX,
  Clock,
  CheckCircle,
  ArrowLeft,
  Sparkles,
  Eye,
  ExternalLink,
} from "lucide-react";

import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";


function PhishingEmailAnalyzerPage() {
  const [emailText, setEmailText] = useState("");
  const [analyzed, setAnalyzed] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [viewMode, setViewMode] = useState("highlighted");

  const sampleEmail = `From: security@amaz0n-support.com
To: aditi.shah@gmail.com
Date: May 20, 2025, 10:32 AM
Subject: Urgent: Verify your account to avoid suspension

Dear Customer,

We noticed unusual activity in your account. For your security, we have temporarily suspended your account.

Please click the link below to verify your account and restore access immediately.

http://amaz0n-secure-login.net/verify?sessionid=38492

This link will expire in 24 hours.

If you do not verify, your account will be permanently locked.

Thank you,
Amazon Security Team`;

 const analyzeEmail = async () => {
  if (!emailText.trim()) {
    return;
  }

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/phishing/check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_text: emailText,
        }),
      }
    );

    const data = await response.json();

    setAnalysisResult(data);
    console.log("Phishing API result:", data);
    setAnalyzed(true);
  } catch (error) {
    console.error("Phishing analysis failed:", error);
  }
};
  const loadSampleEmail = () => {
    setEmailText(sampleEmail);
    setAnalyzed(true);
  };

  const getRiskScore = () => {
  if (!analyzed || !analysisResult) {
    return 0;
  }

  return analysisResult.riskScore;
};
  const riskScore = getRiskScore();

 const riskLevel = analysisResult
  ? `${analysisResult.riskLevel} Risk`
  : "Low Risk";
  const indicators = [
    {
      icon: AlertTriangle,
      title: "Suspicious sender address",
      detail: "security@amaz0n-support.com",
      level: "High",
    },
    {
      icon: AlertTriangle,
      title: "Suspicious domain in link",
      detail: "amaz0n-secure-login.net",
      level: "High",
    },
    {
      icon: AlertTriangle,
      title: "Urgent and threatening language detected",
      detail: "Creates fear of account suspension",
      level: "Medium",
    },
    {
      icon: AlertTriangle,
      title: "Requesting account verification via external link",
      detail: "Asks the user to verify account access",
      level: "Medium",
    },
    {
      icon: AlertTriangle,
      title: "Link uses HTTP instead of HTTPS",
      detail: "Connection is not encrypted",
      level: "Low",
    },
    {
      icon: AlertTriangle,
      title: "Generic greeting (Dear Customer)",
      detail: "Does not address the recipient by name",
      level: "Low",
    },
  ];

  const highlightEmail = () => {
    if (!emailText) {
      return (
        <p className="phishing-empty-preview">
          Paste an email above to preview it here.
        </p>
      );
    }

    const lines = emailText.split("\n");

    return lines.map((line, index) => {
      const lower = line.toLowerCase();

      let className = "";

      if (
        lower.includes("amaz0n") ||
        lower.includes("urgent") ||
        lower.includes("suspended") ||
        lower.includes("permanently locked")
      ) {
        className = "phishing-high-highlight";
      } else if (
        lower.includes("http://") ||
        lower.includes("verify") ||
        lower.includes("expire")
      ) {
        className = "phishing-link-highlight";
      } else if (lower.includes("dear customer")) {
        className = "phishing-medium-highlight";
      }

      return (
        <div
          className={`phishing-email-line ${className}`}
          key={`${line}-${index}`}
        >
          {line || "\u00A0"}
        </div>
      );
    });
  };


  return (
    <div className="phishing-page">

      {/* SIDEBAR */}
      <aside className="phishing-sidebar">

        <div className="phishing-logo">
          <div className="phishing-logo-icon">
            <Shield size={23} />
          </div>

          <div>
            <h2>CYBERMENTOR</h2>
            <p>LEARN. DEFEND. LEVEL UP.</p>
          </div>
        </div>


        <nav className="phishing-nav">

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


        <div className="phishing-profile">

          <div className="phishing-profile-info">

            <div className="phishing-avatar">
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


        <div className="phishing-upgrade">

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


      {/* MAIN */}
      <main className="phishing-main">

        {/* HEADER */}
        <header className="phishing-header">

          <div className="phishing-breadcrumb">

            <ArrowLeft size={15} />

            <span>Cyber Lab</span>

            <span>›</span>

            <strong>Phishing Email Analyzer</strong>

          </div>


          <div className="phishing-header-right">

            <div className="phishing-header-stat">
              ⚡ <strong>2,450 XP</strong>
            </div>

            <div className="phishing-header-stat">
              🛡️ <strong>Level 12</strong>
            </div>

            <div className="phishing-header-stat">
              🔥 <strong>7 Day Streak</strong>
            </div>

            <button className="phishing-notification">
              <Bell size={18} />
              <span>3</span>
            </button>

            <div className="phishing-user">

              <div className="phishing-user-avatar">
                👩🏻
              </div>

              <strong>Aditi</strong>

              <ChevronDown size={15} />

            </div>

          </div>

        </header>


        {/* PAGE TITLE */}
        <section className="phishing-title">

          <div className="phishing-title-icon">
            <AlertTriangle size={23} />
          </div>

          <div>
            <h1>Phishing Email Analyzer</h1>

            <p>
              Analyze suspicious emails and stay safe from phishing attacks.
            </p>
          </div>

        </section>


        {/* CONTENT GRID */}
        <div className="phishing-content-grid">


          {/* LEFT COLUMN */}
          <section className="phishing-left">


            {/* PASTE EMAIL */}
            <div className="phishing-input-card">

              <div className="phishing-card-heading">

                <div>
                  <h2>1. Paste the Email to Analyze</h2>

                  <p>
                    Paste the full email content including headers if possible.
                  </p>
                </div>


                <button
                  className="phishing-sample-button"
                  onClick={loadSampleEmail}
                >
                  Load Sample Email
                  <ChevronDown size={15} />
                </button>

              </div>


              <textarea
                value={emailText}
                onChange={(e) => {
                  setEmailText(e.target.value);
                  setAnalyzed(false);
                }}
                placeholder="Paste email content here..."
              />


              <div className="phishing-input-footer">

                <span>
                  Supports plain text email content
                </span>

                <span>
                  {emailText.length} characters
                </span>

              </div>


              <div className="phishing-analyze-row">

                <button
                  className="phishing-analyze-button"
                  onClick={analyzeEmail}
                  disabled={!emailText.trim()}
                >
                  <Sparkles size={16} />
                  Analyze Email
                </button>

              </div>

            </div>


            {/* EMAIL PREVIEW */}
            <div className="phishing-preview-card">

              <div className="phishing-section-header">

                <div className="phishing-section-title">

                  <Eye size={18} />

                  <h2>2. Email Preview</h2>

                </div>


                <div className="phishing-view-toggle">

                  <button
                    className={
                      viewMode === "highlighted"
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setViewMode("highlighted")
                    }
                  >
                    Highlighted View
                  </button>

                  <button
                    className={
                      viewMode === "plain"
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setViewMode("plain")
                    }
                  >
                    Plain Text View
                  </button>

                </div>

              </div>


              <div className="phishing-email-preview">

                {viewMode === "highlighted"
                  ? highlightEmail()
                  : (
                    <pre className="phishing-plain-text">
                      {emailText ||
                        "Paste an email above to preview it here."}
                    </pre>
                  )}

              </div>


              <div className="phishing-legend">

                <span>
                  <i className="legend-high"></i>
                  High Risk
                </span>

                <span>
                  <i className="legend-medium"></i>
                  Medium Risk
                </span>

                <span>
                  <i className="legend-link"></i>
                  Suspicious Link
                </span>

              </div>

            </div>


            {/* INDICATORS */}
            <div className="phishing-indicators-card">

              <div className="phishing-indicators-header">

                <div>
                  <h2>
                    4. Suspicious Indicators Found
                    <span>6</span>
                  </h2>
                </div>

              </div>


              <div className="phishing-indicator-list">

                {indicators.map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      className="phishing-indicator-row"
                      key={item.title}
                    >

                      <div className="indicator-name">

                        <Icon size={15} />

                        <span>{item.title}</span>

                      </div>


                      <span className="indicator-detail">
                        {item.detail}
                      </span>


                      <span
                        className={`indicator-level ${item.level.toLowerCase()}`}
                      >
                        {item.level}
                      </span>

                    </div>
                  );

                })}

              </div>


              <button className="phishing-learn-link">
                Learn more about phishing
                <ExternalLink size={14} />
              </button>

            </div>

          </section>


          {/* RIGHT COLUMN */}
          <aside className="phishing-right">


            {/* RISK SCORE */}
            <div className="phishing-risk-card">

              <div className="phishing-risk-heading">

                <h2>3. Risk Level</h2>

                <span>ⓘ</span>

              </div>


              <div className="phishing-score">

                <div className="score-ring">

                  <svg
                    viewBox="0 0 160 100"
                    className="risk-gauge"
                  >

                    <path
                      d="M 20 80 A 60 60 0 0 1 140 80"
                      fill="none"
                      stroke="#E8EAF2"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />

                    <path
                      d="M 20 80 A 60 60 0 0 1 140 80"
                      fill="none"
                      stroke="#EF3340"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={
                        analyzed
                          ? `${riskScore * 1.88} 300`
                          : "0 300"
                      }
                    />

                  </svg>


                  <div className="score-number">

                    <strong>
                      {analyzed ? riskScore : 0}
                    </strong>

                    <span>/100</span>

                  </div>

                </div>


                <h3>
                  {analyzed ? riskLevel : "Not Analyzed"}
                </h3>

                <p>
                  {analyzed
                    ? "This email is likely a phishing attempt."
                    : "Analyze an email to see its risk level."}
                </p>

              </div>

            </div>


            {/* AI EXPLANATION */}
            <div className="phishing-ai-card">

              <div className="phishing-ai-heading">

                <div className="phishing-ai-icon">
                  <Bot size={17} />
                </div>

                <h2>5. AI Explanation</h2>

              </div>


              <p className="phishing-ai-intro">
                {analyzed && analysisResult
  ? analysisResult.signals.length > 0
    ? `Detected signals: ${analysisResult.signals.join(", ")}`
    : "No suspicious signals were detected."
  : "Analyze an email to receive an AI-style explanation of suspicious signals."}
              </p>


              <div className="phishing-ai-point">

                <div className="ai-point-icon">
                  <UserX size={16} />
                </div>

                <div>
                  <strong>Fake sender address</strong>

                  <p>
                    The sender uses a misspelled domain to
                    impersonate a trusted brand.
                  </p>
                </div>

              </div>


              <div className="phishing-ai-point">

                <div className="ai-point-icon">
                  <Link size={16} />
                </div>

                <div>
                  <strong>Suspicious link detected</strong>

                  <p>
                    The link points to an unofficial domain
                    and uses HTTP instead of HTTPS.
                  </p>
                </div>

              </div>


              <div className="phishing-ai-point">

                <div className="ai-point-icon">
                  <AlertTriangle size={16} />
                </div>

                <div>
                  <strong>Urgent & threatening tone</strong>

                  <p>
                    Phishers use urgency and fear to trick
                    users into acting quickly.
                  </p>
                </div>

              </div>


              <div className="phishing-ai-point">

                <div className="ai-point-icon">
                  <User size={16} />
                </div>

                <div>
                  <strong>Generic greeting</strong>

                  <p>
                    Legitimate companies usually address
                    customers by name.
                  </p>
                </div>

              </div>


              <div className="phishing-ai-tip">

                <Shield size={17} />

                <span>
                  Always verify before you click! When in doubt,
                  visit the official website manually.
                </span>

              </div>

            </div>


            {/* RECOMMENDATIONS */}
            <div className="phishing-recommendations-card">

              <div className="phishing-recommendations-heading">

                <div>
                  <CheckCircle size={18} />
                </div>

                <h2>6. Recommendations</h2>

              </div>


              <div className="recommendation-item">
                <CheckCircle size={15} />
                <span>Do not click on any links in this email</span>
              </div>

              <div className="recommendation-item">
                <CheckCircle size={15} />
                <span>Do not share personal or login information</span>
              </div>

              <div className="recommendation-item">
                <CheckCircle size={15} />
                <span>Report this email to your IT department or email provider</span>
              </div>

              <div className="recommendation-item">
                <CheckCircle size={15} />
                <span>Delete this email from your inbox</span>
              </div>

              <div className="recommendation-item">
                <CheckCircle size={15} />
                <span>Enable two-factor authentication for your accounts</span>
              </div>

            </div>

          </aside>

        </div>


        {/* BOTTOM BANNER */}
        <div className="phishing-bottom-banner">

          <div className="phishing-bot-avatar">
            🤖
          </div>

          <div>

            <h3>
              Stay vigilant, Cyber Guardian!
            </h3>

            <p>
              Phishers are clever, but so are you.
              Keep learning and stay safe!
            </p>

          </div>


          <button
            onClick={() =>
              window.location.href = "/cyber-lab"
            }
          >
            <Sparkles size={16} />
            Try Another Email
          </button>

        </div>

      </main>

    </div>
  );
}


export default PhishingEmailAnalyzerPage;