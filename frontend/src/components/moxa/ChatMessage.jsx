import { Link } from "react-router-dom";
import { getLesson } from "../../data/lessons.js";

// message: { role: "user" | "bot", text, topic?, lesson?, error? }
function ChatMessage({ message }) {
  const lesson = message.lesson ? getLesson(message.lesson) : null;
  const cls = `msg ${message.role === "user" ? "msg-user" : "msg-bot"}${message.error ? " msg-err" : ""}`;

  return (
    <div className={cls}>
      {message.role === "bot" && message.topic && !message.error && (
        <span className="msg-topic">{message.topic}</span>
      )}
      {message.text}
      {lesson && (
        <div>
          <Link to={`/academy/${lesson.id}`} className="msg-link">
            Learn more: {lesson.title}
          </Link>
        </div>
      )}
    </div>
  );
}

export default ChatMessage;
