import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Card from "../Card.jsx";
import Button from "../Button.jsx";

// Calls onPassed() once when the learner reaches the pass mark (60%).
function LessonQuiz({ lesson, onPassed }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const total = lesson.quiz.length;
  const passMark = Math.ceil(total * 0.6);
  const score = lesson.quiz.filter((q, i) => answers[i] === q.answer).length;
  const passed = score >= passMark;
  const allAnswered = lesson.quiz.every((_, i) => answers[i] !== undefined);

  const choose = (qi, oi) => {
    if (!submitted) setAnswers((a) => ({ ...a, [qi]: oi }));
  };

  const submit = () => {
    setSubmitted(true);
    if (passed && onPassed) onPassed();
  };

  const retry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const optionClass = (qi, oi, q) => {
    if (!submitted) return answers[qi] === oi ? "option selected" : "option";
    if (oi === q.answer) return "option correct";
    if (answers[qi] === oi) return "option wrong";
    return "option";
  };

  return (
    <Card className="lesson-section">
      <h2>Quick quiz</h2>
      <p className="muted">
        Get {passMark} of {total} right to complete the lesson.
      </p>

      {lesson.quiz.map((q, qi) => (
        <div key={q.q} className="quiz-q">
          <h3>
            {qi + 1}. {q.q}
          </h3>
          {q.options.map((opt, oi) => (
            <button
              key={opt}
              type="button"
              className={optionClass(qi, oi, q)}
              onClick={() => choose(qi, oi)}
              disabled={submitted}
            >
              {opt}
            </button>
          ))}
          {submitted && <p className="explain">{q.explain}</p>}
        </div>
      ))}

      {!submitted ? (
        <Button onClick={submit} disabled={!allAnswered}>
          Check answers
        </Button>
      ) : (
        <>
          <div className="result-banner" role="status">
            <CheckCircle2 color="var(--green)" />
            <div>
              <strong>
                You scored {score}/{total}.
              </strong>{" "}
              {passed ? `Lesson complete! +${lesson.xp} XP earned.` : "Review the lesson and try again."}
            </div>
          </div>
          {!passed && (
            <Button variant="secondary" onClick={retry}>
              Try again
            </Button>
          )}
        </>
      )}
    </Card>
  );
}

export default LessonQuiz;
