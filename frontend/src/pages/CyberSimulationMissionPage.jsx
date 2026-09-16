import { useState } from "react";

import {
  Shield,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Zap,
} from "lucide-react";

function CyberSimulationMissionPage() {
  const currentPath = window.location.pathname;

  const isOTPMission =
    currentPath === "/cyber-simulations/otp-scam";

  const mission = isOTPMission
    ? {
        title: "OTP Scam",
        missionNumber: "MISSION 02",
        description:
          "Can you identify the safest response to an OTP scam?",
        reward: "+100 XP",
        completionKey: "otpScamCompleted",

        scenarioTitle:
          "You've received a message asking for your OTP.",

        from: "BANK-ALERT",
        subject: "URGENT: OTP Verification Required",

        emailBody: (
          <>
            <p>Dear Customer,</p>

            <p>
              We noticed a problem with your recent
              transaction.
            </p>

            <p>
              To cancel the transaction, please share the OTP
              you receive on your registered mobile number.
            </p>

            <button
              type="button"
              className="simulation-email-link"
            >
              Verify Transaction
            </button>

            <p>
              Thank you,
              <br />
              Bank Security Team
            </p>
          </>
        ),

        question:
          "What should you do if someone asks for your OTP?",

        answers: [
          {
            id: "A",
            text: "Share the OTP because the message looks urgent.",
          },
          {
            id: "B",
            text: "Call the person and tell them the OTP.",
          },
          {
            id: "C",
            text: "Never share the OTP and contact your bank through an official channel.",
          },
          {
            id: "D",
            text: "Forward the OTP message to someone you trust.",
          },
        ],

        correctAnswer: "C",

        correctMessage:
          "Excellent! You protected your OTP.",

        correctExplanation:
          "Never share an OTP with anyone. Banks and legitimate services do not need you to tell them your OTP. If you are concerned about a transaction, contact the bank using an official channel.",

        wrongMessage:
          "Not quite! Think about why OTPs should stay private.",

        wrongExplanation:
          "An OTP is meant to be used only by the account holder. Never share it with callers, messages, or people claiming to be from your bank.",
      }
    : {
        title: "Fake Bank Email",
        missionNumber: "MISSION 01",
        description:
          "Can you identify the signs of a phishing email?",
        reward: "+100 XP",
        completionKey: "fakeBankEmailCompleted",

        scenarioTitle:
          "You've received an urgent bank email.",

        from: "security@yourbank-alert.com",
        subject:
          "URGENT: Your account will be suspended!",

        emailBody: (
          <>
            <p>Dear Customer,</p>

            <p>
              We detected unusual activity on your bank
              account. Your account will be suspended within
              24 hours.
            </p>

            <p>
              Click the link below immediately to verify your
              account and prevent suspension.
            </p>

            <button
              type="button"
              className="simulation-email-link"
            >
              Verify My Account
            </button>

            <p>
              Thank you,
              <br />
              Your Bank Security Team
            </p>
          </>
        ),

        question: "What should you do?",

        answers: [
          {
            id: "A",
            text: "Click the link and verify your account immediately.",
          },
          {
            id: "B",
            text: "Reply to the email and ask if it is genuine.",
          },
          {
            id: "C",
            text: "Ignore the email and independently contact your bank.",
          },
          {
            id: "D",
            text: "Forward the email to friends to warn them.",
          },
        ],

        correctAnswer: "C",

        correctMessage:
          "Excellent! You spotted the phishing attempt.",

        correctExplanation:
          "Never use a suspicious email link to access your bank account. Instead, contact your bank using an official website, app, or phone number.",

        wrongMessage:
          "Not quite! Think about the safest response.",

        wrongExplanation:
          "The email creates urgency and asks you to use a link. A safer approach is to avoid the link and contact your bank through an official channel.",
      };

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect =
    selectedAnswer === mission.correctAnswer;

  function handleSubmit() {
    if (!selectedAnswer) {
      return;
    }

    setSubmitted(true);

    if (isCorrect) {
      localStorage.setItem(
        mission.completionKey,
        "true"
      );
    }
  }

  function handleRetry() {
    setSelectedAnswer(null);
    setSubmitted(false);
  }

  return (
    <div className="simulation-mission-page">

      {/* HEADER */}
      <header className="simulation-mission-header">

        <button
          type="button"
          onClick={() =>
            (window.location.href =
              "/cyber-simulations")
          }
        >
          <ArrowLeft size={18} />
          Back to Simulations
        </button>

        <div className="simulation-mission-logo">
          <Shield size={20} />
          <strong>CYBERMENTOR</strong>
        </div>

        <div className="simulation-mission-xp">
          ⚡ 2,450 XP
        </div>

      </header>


      {/* MAIN */}
      <main className="simulation-mission-content">

        <div className="simulation-mission-badge">
          Beginner Mission
        </div>

        <h1>{mission.title}</h1>

        <p className="simulation-mission-subtitle">
          {mission.description}
        </p>


        {/* SCENARIO */}
        <section className="simulation-scenario-card">

          <div className="simulation-scenario-header">

            <div>

              <span>
                {mission.missionNumber}
              </span>

              <h2>
                {mission.scenarioTitle}
              </h2>

            </div>

            <div className="simulation-mission-reward">
              ⚡ {mission.reward}
            </div>

          </div>


          {/* EMAIL / MESSAGE */}
          <div className="simulation-email">

            <div className="simulation-email-header">
              <strong>From:</strong>

              <span>
                {mission.from}
              </span>
            </div>


            <div className="simulation-email-header">
              <strong>Subject:</strong>

              <span>
                {mission.subject}
              </span>
            </div>


            <div className="simulation-email-body">

              {mission.emailBody}

            </div>

          </div>


          {/* QUESTION */}
          {!submitted && (
            <div className="simulation-question">

              <h2>
                {mission.question}
              </h2>

              <p>
                Choose the safest action for this
                situation.
              </p>


              <div className="simulation-choice-list">

                {mission.answers.map((answer) => (

                  <button
                    key={answer.id}
                    type="button"
                    className={
                      selectedAnswer === answer.id
                        ? "selected"
                        : ""
                    }
                    onClick={() =>
                      setSelectedAnswer(answer.id)
                    }
                  >

                    <span>
                      {answer.id}
                    </span>

                    {answer.text}

                  </button>

                ))}

              </div>

            </div>
          )}


          {/* SUBMIT */}
          {!submitted && (
            <div className="simulation-mission-footer">

              <div>

                <CheckCircle size={17} />

                <span>
                  {selectedAnswer
                    ? `Answer ${selectedAnswer} selected`
                    : "Choose one answer to continue"}
                </span>

              </div>


              <button
                type="button"
                className="simulation-submit-button"
                disabled={!selectedAnswer}
                onClick={handleSubmit}
              >
                Submit Answer
              </button>

            </div>
          )}


          {/* RESULT */}
          {submitted && (
            <div
              className={`simulation-result ${
                isCorrect
                  ? "simulation-result-correct"
                  : "simulation-result-wrong"
              }`}
            >

              <div className="simulation-result-icon">

                {isCorrect ? (
                  <CheckCircle size={28} />
                ) : (
                  <XCircle size={28} />
                )}

              </div>


              <div className="simulation-result-content">

                <h2>
                  {isCorrect
                    ? mission.correctMessage
                    : mission.wrongMessage}
                </h2>


                <p>
                  {isCorrect
                    ? mission.correctExplanation
                    : mission.wrongExplanation}
                </p>


                {isCorrect && (
                  <div className="simulation-earned-xp">

                    <Zap size={17} />

                    {mission.reward} earned

                  </div>
                )}

              </div>


              <div className="simulation-result-actions">

                {isCorrect ? (

                  <button
                    type="button"
                    onClick={() =>
                      (window.location.href =
                        "/cyber-simulations")
                    }
                  >
                    Back to Missions
                  </button>

                ) : (

                  <button
                    type="button"
                    onClick={handleRetry}
                  >
                    Try Again
                  </button>

                )}

              </div>

            </div>
          )}

        </section>

      </main>

    </div>
  );
}

export default CyberSimulationMissionPage;