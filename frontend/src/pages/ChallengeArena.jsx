import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import ChallengeCard from "../components/aditi/ChallengeCard.jsx";
import QuestionCard from "../components/aditi/QuestionCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { CHALLENGES, getChallenge, XP_PER_CORRECT, PERFECT_BONUS } from "../data/challenges.js";
import { getAttempts, saveAttempt } from "../lib/gameState.js";

// Handles both /challenges (list) and /challenges/:challengeId (play).
function ChallengeArena() {
  const { challengeId } = useParams();
  const challenge = challengeId ? getChallenge(challengeId) : null;

  if (challengeId && !challenge) {
    return (
      <>
        <Navbar />
        <main className="page">
          <div className="container lesson-layout">
            <Card>
              <h1>Challenge not found</h1>
              <Link to="/challenges" className="btn btn-primary">Back to the Arena</Link>
            </Card>
          </div>
        </main>
      </>
    );
  }
  return challenge ? <ChallengeRun key={challenge.id} challenge={challenge} /> : <ChallengeList />;
}

function ChallengeList() {
  const { user } = useAuth();
  const attempts = getAttempts(user?.id);
  const bestFor = (id) => {
    const mine = attempts.filter((a) => a.challengeId === id);
    return mine.length ? Math.max(...mine.map((a) => a.score)) : null;
  };

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="container">
          <div className="page-head">
            <h1>Challenge Arena</h1>
            <p className="muted">Test your skills, earn XP and climb the levels. XP is awarded when you beat your best score.</p>
          </div>
          <div className="grid grid-3">
            {CHALLENGES.map((c) => (
              <ChallengeCard key={c.id} challenge={c} best={bestFor(c.id)} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

function ChallengeRun({ challenge }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState([]); // chosen option per question

  const total = challenge.questions.length;
  const question = challenge.questions[index];
  const isLast = index === total - 1;

  const check = () => {
    setChecked(true);
    setAnswers((a) => [...a, selected]);
  };

  const finish = (finalAnswers) => {
    const score = challenge.questions.filter((q, i) => finalAnswers[i] === q.answer).length;
    const perfect = score === total;
    const earned = score * XP_PER_CORRECT + (perfect ? PERFECT_BONUS : 0);
    const attempt = saveAttempt(user?.id, { challengeId: challenge.id, score, total, earned });
    navigate("/quiz-result", {
      state: {
        result: {
          challengeId: challenge.id,
          title: challenge.title,
          score,
          total,
          awarded: attempt.xp,
          perfect,
          review: challenge.questions.map((q, i) => ({
            q: q.q,
            chosen: q.options[finalAnswers[i]],
            correct: q.options[q.answer],
            right: finalAnswers[i] === q.answer,
            explain: q.explain,
          })),
        },
      },
    });
  };

  const next = () => {
    if (isLast) {
      finish(answers);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
      setChecked(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="container lesson-layout">
          <Link to="/challenges" className="back-link">
            <ChevronLeft size={16} /> Leave challenge
          </Link>
          <div className="page-head">
            <h1>{challenge.title}</h1>
          </div>

          <QuestionCard
            question={question}
            index={index}
            total={total}
            selected={selected}
            checked={checked}
            onSelect={setSelected}
          />

          <div className="lesson-nav">
            <span />
            {!checked ? (
              <Button onClick={check} disabled={selected === null}>
                Check answer
              </Button>
            ) : (
              <Button onClick={next}>{isLast ? "See results" : "Next question"}</Button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default ChallengeArena;
