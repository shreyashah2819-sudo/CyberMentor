import Card from "../Card.jsx";
import ProgressBar from "../ProgressBar.jsx";

// Shows one question. `checked` reveals right/wrong and the explanation.
function QuestionCard({ question, index, total, selected, checked, onSelect }) {
  const cls = (oi) => {
    if (!checked) return selected === oi ? "option selected" : "option";
    if (oi === question.answer) return "option correct";
    if (selected === oi) return "option wrong";
    return "option";
  };

  return (
    <Card>
      <div className="q-head">
        <span className="muted">
          Question {index + 1} of {total}
        </span>
      </div>
      <ProgressBar value={((index + (checked ? 1 : 0)) / total) * 100} label="Challenge progress" />
      <h2 style={{ margin: "18px 0 14px", fontSize: "1.25rem" }}>{question.q}</h2>
      {question.options.map((opt, oi) => (
        <button key={opt} type="button" className={cls(oi)} onClick={() => onSelect(oi)} disabled={checked}>
          {opt}
        </button>
      ))}
      {checked && (
        <p className="explain">
          <b>{selected === question.answer ? "Correct! " : "Not quite. "}</b>
          {question.explain}
        </p>
      )}
    </Card>
  );
}

export default QuestionCard;
