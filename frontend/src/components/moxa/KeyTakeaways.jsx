import { CheckCircle2 } from "lucide-react";
import Card from "../Card.jsx";

function KeyTakeaways({ takeaways }) {
  return (
    <Card className="lesson-section">
      <h2>Key takeaways</h2>
      <ul className="takeaways">
        {takeaways.map((t) => (
          <li key={t}>
            <CheckCircle2 size={18} />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default KeyTakeaways;
