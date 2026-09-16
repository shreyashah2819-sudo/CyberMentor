import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Shield,
  ArrowLeft,
  CheckCircle,
  XCircle,
} from "lucide-react";

import "../App.css";

const missions = {
  "fake-bank-email": {
    title: "Fake Bank Email",
    missionNumber: "MISSION 01",
    description: "Identify a suspicious banking email.",
    reward: "+100 XP",
    completionKey: "fakeBankEmailCompleted",
    scenarioTitle: "You receive a suspicious banking email.",
    from: "Bank Security",
    subject: "Urgent: Verify your bank account",
    emailBody: (
      <>
        <p>Dear Customer,</p>
        <p>
          Your bank account requires immediate verification.
        </p>
        <p>
          Click the link below to verify your account.
        </p>
        <button type="button" className="simulation-email-link">
          Verify Account
        </button>
        <p>Bank Security Team</p>
      </>
    ),
    question: "What is the safest response to this email?",
    options: [
      "Click the verification link immediately.",
      "Reply with your banking password.",
      "Ignore the link and verify your account through the official bank website or app.",
      "Forward the email to your friends.",
    ],
    correctAnswer:
      "Ignore the link and verify your account through the official bank website or app.",
  },

  "otp-scam": {
    title: "OTP Scam",
    missionNumber: "MISSION 02",
    description: "Identify a suspicious OTP request.",
    reward: "+100 XP",
    completionKey: "otpScamCompleted",
    scenarioTitle: "You receive a message asking for your OTP.",
    from: "Bank Support",
    subject: "Your OTP is required",
    emailBody: (
      <>
        <p>Bank Support</p>
        <p>
          We detected unusual activity on your account.
        </p>
        <p>
          Send us the OTP you received to secure your account.
        </p>
        <p>Act immediately to avoid account suspension.</p>
      </>
    ),
    question: "What should you do?",
    options: [
      "Share the OTP with the support team.",
      "Send the OTP only if they know your name.",
      "Never share the OTP and contact the bank through an official channel.",
      "Post the OTP in the support chat.",
    ],
    correctAnswer:
      "Never share the OTP and contact the bank through an official channel.",
  },

  "fake-whatsapp": {
    title: "Fake WhatsApp",
    missionNumber: "MISSION 03",
    description: "Identify a fake WhatsApp security message.",
    reward: "+80 XP",
    completionKey: "fakeWhatsappCompleted",
    scenarioTitle:
      "You receive a suspicious WhatsApp security message.",
    from: "WhatsApp Security",
    subject: "Your WhatsApp account will be blocked!",
    emailBody: (
      <>
        <p>WhatsApp Security Team</p>

        <p>
          Your WhatsApp account has been selected for
          verification.
        </p>

        <p>
          Your account will be blocked within 24 hours
          unless you verify it immediately.
        </p>

        <button
          type="button"
          className="simulation-email-link"
        >
          Verify WhatsApp Account
        </button>

        <p>WhatsApp Support Team</p>
      </>
    ),
    question:
      "What is the safest response to this message?",
    options: [
      "Click the verification link immediately.",
      "Reply with your WhatsApp OTP.",
      "Ignore the link and verify your account only through the official WhatsApp app.",
      "Forward the message to your contacts.",
    ],
    correctAnswer:
      "Ignore the link and verify your account only through the official WhatsApp app.",
  },

  "qr-scam": {
  title: "QR Code Scam",
  missionNumber: "MISSION 04",
  description: "Identify a suspicious QR code message.",
  reward: "+80 XP",
  completionKey: "qrScamCompleted",

  scenarioTitle:
    "You receive a suspicious QR code message.",

  from: "Reward Center",
  subject: "Congratulations! Claim your reward",

  emailBody: (
    <>
      <p>Congratulations!</p>

      <p>
        You have been selected to receive a special reward.
      </p>

      <p>
        Scan the QR code below to claim your reward.
      </p>

      <div className="simulation-qr-placeholder">
        QR CODE
      </div>

      <p>
        Scan now before the reward expires.
      </p>
    </>
  ),

  question:
    "What is the safest action?",

  options: [
    "Scan the QR code immediately.",
    "Share the QR code with a friend.",
    "Avoid scanning it and verify the message independently.",
    "Enter your bank details after scanning.",
  ],

  correctAnswer:
    "Avoid scanning it and verify the message independently.",
},
  "fake-job-offer": {
    title: "Fake Job Offer",
    missionNumber: "MISSION 04",
    description: "Identify a suspicious job offer.",
    reward: "+80 XP",
    completionKey: "fakeJobOfferCompleted",
    scenarioTitle:
      "You receive an unexpected job offer message.",
    from: "HR Recruitment",
    subject: "Congratulations! You are selected",
    emailBody: (
      <>
        <p>Congratulations!</p>
        <p>
          You have been selected for an online job.
        </p>
        <p>
          Pay a small registration fee to continue.
        </p>
        <button
          type="button"
          className="simulation-email-link"
        >
          Complete Registration
        </button>
      </>
    ),
    question:
      "What is the safest response to this offer?",
    options: [
      "Pay the registration fee.",
      "Send your bank details.",
      "Verify the company independently before providing information or money.",
      "Forward your identity documents immediately.",
    ],
    correctAnswer:
      "Verify the company independently before providing information or money.",
  },

  

  "usb-attack": {
    title: "USB Attack",
    missionNumber: "MISSION 05",
    description:
      "Respond safely to an unknown USB device.",
    reward: "+80 XP",
    completionKey: "usbAttackCompleted",
    scenarioTitle:
      "You find an unknown USB device near your computer.",
    from: "Unknown Device",
    subject: "USB device found",
    emailBody: (
      <>
        <p>An unknown USB device has been found.</p>
        <p>
          It may contain files that automatically run
          when connected.
        </p>
        <p>
          Your computer is currently available.
        </p>
      </>
    ),
    question:
      "What is the safest action?",
    options: [
      "Plug it into your computer to identify the owner.",
      "Open the files on another computer.",
      "Do not connect it and report it to the appropriate person.",
      "Connect it after disabling antivirus.",
    ],
    correctAnswer:
      "Do not connect it and report it to the appropriate person.",
  },
};

function CyberSimulationMissionPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const missionId = location.pathname.split("/").pop();
  const mission = missions[missionId];

  const [selectedAnswer, setSelectedAnswer] =
    useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  if (!mission) {
    return (
      <div className="simulation-mission-page">
        <h1>Mission Not Found</h1>

        <button
          onClick={() =>
            navigate("/cyber-simulations")
          }
        >
          Back to Cyber Simulations
        </button>
      </div>
    );
  }

 const handleSubmit = async () => {
  if (!selectedAnswer) {
    return;
  }

  const correct =
    selectedAnswer === mission.correctAnswer;

  setIsCorrect(correct);
  setSubmitted(true);

  if (correct) {
    localStorage.setItem(
      mission.completionKey,
      "true"
    );

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/missions/complete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: 1,
            mission_key: missionId,
            completed: true,
          }),
        }
      );

      const data = await response.json();

      console.log("Mission completion saved:", data);
    } catch (error) {
      console.error(
        "Failed to save mission completion:",
        error
      );
    }
  }
};

  const handleRetry = () => {
    setSelectedAnswer("");
    setSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div className="simulation-mission-page">
      <header className="simulation-mission-topbar">
        <button
          className="simulation-mission-back"
          onClick={() =>
            navigate("/cyber-simulations")
          }
        >
          <ArrowLeft size={18} />
          Back to Missions
        </button>

        <div className="simulation-mission-logo">
          <Shield size={22} />
          <span>CyberMentor</span>
        </div>
      </header>

      <main className="simulation-mission-main">
        <section className="simulation-mission-header">
          <p className="simulation-mission-number">
            {mission.missionNumber}
          </p>

          <h1>{mission.title}</h1>

          <p>{mission.description}</p>

          <div className="simulation-mission-reward">
            {mission.reward}
          </div>
        </section>

        <section className="simulation-scenario">
          <h2>{mission.scenarioTitle}</h2>

          <div className="simulation-email-card">
            <div className="simulation-email-header">
              <strong>{mission.from}</strong>

              <span>{mission.subject}</span>
            </div>

            <div className="simulation-email-body">
              {mission.emailBody}
            </div>
          </div>
        </section>

        <section className="simulation-question">
          <h2>{mission.question}</h2>

          <div className="simulation-options">
            {mission.options.map((option) => (
              <button
                key={option}
                className={`simulation-option ${
                  selectedAnswer === option
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  !submitted &&
                  setSelectedAnswer(option)
                }
                disabled={submitted}
              >
                <span>{option}</span>
              </button>
            ))}
          </div>

          {!submitted && (
            <button
              className="simulation-submit-button"
              onClick={handleSubmit}
              disabled={!selectedAnswer}
            >
              Submit Answer
            </button>
          )}

          {submitted && (
            <div
              className={`simulation-result ${
                isCorrect ? "correct" : "wrong"
              }`}
            >
              {isCorrect ? (
                <>
                  <CheckCircle size={24} />
                  <div>
                    <h3>Mission Completed!</h3>
                    <p>
                      You identified the safe response.
                      You earned {mission.reward}.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <XCircle size={24} />
                  <div>
                    <h3>Not Quite</h3>
                    <p>
                      Review the scenario and try again.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          {submitted && !isCorrect && (
            <button
              className="simulation-retry-button"
              onClick={handleRetry}
            >
              Try Again
            </button>
          )}
        </section>
      </main>
    </div>
  );
}

export default CyberSimulationMissionPage;