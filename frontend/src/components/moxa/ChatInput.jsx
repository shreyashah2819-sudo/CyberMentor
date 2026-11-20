import { Send } from "lucide-react";
import Button from "../Button.jsx";

function ChatInput({ value, onChange, onSubmit, disabled }) {
  return (
    <form
      className="chat-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="input-wrap">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your question..."
          aria-label="Your question"
          maxLength={500}
        />
      </div>
      <Button type="submit" disabled={disabled || !value.trim()} aria-label="Send">
        <Send size={16} /> Send
      </Button>
    </form>
  );
}

export default ChatInput;
