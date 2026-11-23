import { useEffect, useRef, useState } from "react";
import { Bot } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import ChatMessage from "../components/moxa/ChatMessage.jsx";
import ChatInput from "../components/moxa/ChatInput.jsx";
import { apiPost } from "../lib/api.js";

const SUGGESTIONS = [
  "What is phishing?",
  "How do I make a strong password?",
  "What is 2FA?",
  "Is public Wi-Fi safe?",
  "What is ransomware?",
  "What is SQL injection?",
];

const WELCOME = {
  role: "bot",
  topic: "CyberMentor",
  text: "Hi, agent! Ask me anything about staying safe online: phishing, passwords, malware, Wi-Fi, encryption and more.",
};

function AIMentor() {
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView?.({ behavior: "smooth", block: "end" });
  }, [messages, loading]);

  const ask = async (text) => {
    const question = text.trim();
    if (!question || loading) return;
    setMessages((m) => [...m, { role: "user", text: question }]);
    setInput("");
    setLoading(true);
    try {
      const data = await apiPost("/api/mentor/ask", { message: question });
      setMessages((m) => [...m, { role: "bot", topic: data.topic, text: data.answer, lesson: data.lesson }]);
    } catch (err) {
      setMessages((m) => [...m, { role: "bot", error: true, text: err.message }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="page-head">
            <h1>AI Mentor</h1>
            <p className="muted">Ask a cybersecurity question and get a beginner-friendly answer.</p>
          </div>

          <Card className="chat-card">
            <div className="chat-log" aria-live="polite">
              {messages.map((m, i) => (
                <ChatMessage key={i} message={m} />
              ))}
              {loading && (
                <div className="msg msg-bot">
                  <Bot size={16} style={{ verticalAlign: "-3px" }} /> Thinking...
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="suggest">
              <div className="chips">
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" className="chip" onClick={() => ask(s)} disabled={loading}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <ChatInput value={input} onChange={setInput} onSubmit={() => ask(input)} disabled={loading} />
          </Card>

          <p className="note">
            The AI Mentor is an educational helper that matches your question to prepared answers. It is not a
            real security expert, so double-check important decisions with a trusted adult or professional.
          </p>
        </div>
      </main>
    </>
  );
}

export default AIMentor;
