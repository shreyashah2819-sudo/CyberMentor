import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Clock, Zap, Bot } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import Badge from "../components/Badge.jsx";
import KeyTakeaways from "../components/moxa/KeyTakeaways.jsx";
import LessonQuiz from "../components/moxa/LessonQuiz.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { LESSONS, getLesson } from "../data/lessons.js";
import { getCompleted, markCompleted } from "../lib/progress.js";

function LessonDetail() {
  const { lessonId } = useParams();
  const lesson = getLesson(lessonId);

  if (!lesson) {
    return (
      <>
        <Navbar />
        <main className="page">
          <div className="container lesson-layout">
            <Card>
              <h1>Lesson not found</h1>
              <p className="muted">That lesson doesn't exist.</p>
              <Link to="/academy" className="btn btn-primary">Back to the Academy</Link>
            </Card>
          </div>
        </main>
      </>
    );
  }

  // key on lesson id so the quiz resets when moving to another lesson
  return <LessonContent key={lesson.id} lesson={lesson} />;
}

function LessonContent({ lesson }) {
  const { user } = useAuth();
  const [completed, setCompleted] = useState(() => getCompleted(user?.id).includes(lesson.id));

  const index = LESSONS.findIndex((l) => l.id === lesson.id);
  const prev = LESSONS[index - 1];
  const next = LESSONS[index + 1];

  const handlePassed = () => {
    markCompleted(user?.id, lesson.id);
    setCompleted(true);
  };

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="container lesson-layout">
          <Link to="/academy" className="back-link">
            <ChevronLeft size={16} /> Back to Academy
          </Link>

          <div className="page-head">
            <div className="meta" style={{ marginBottom: 10 }}>
              <Badge tone="violet">{lesson.level}</Badge>
              <Badge tone="gray">{lesson.category}</Badge>
              <span><Clock size={14} /> {lesson.minutes} min</span>
              <span><Zap size={14} color="var(--amber)" /> {lesson.xp} XP</span>
              {completed && <Badge tone="green">Completed</Badge>}
            </div>
            <h1>{lesson.title}</h1>
            <p className="muted">{lesson.summary}</p>
          </div>

          {lesson.sections.map((s) => (
            <section key={s.heading} className="lesson-section">
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}

          <KeyTakeaways takeaways={lesson.takeaways} />
          <LessonQuiz lesson={lesson} onPassed={handlePassed} />

          <Card>
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <Bot color="var(--cyan)" />
              <span style={{ flex: 1 }}>Stuck on something? Ask the AI Mentor.</span>
              <Link to="/mentor" className="btn btn-secondary">
                Open AI Mentor
              </Link>
            </div>
          </Card>

          <div className="lesson-nav">
            {prev ? (
              <Link to={`/academy/${prev.id}`} className="btn btn-secondary">
                <ChevronLeft size={16} /> {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link to={`/academy/${next.id}`} className="btn btn-primary">
                {next.title} <ChevronRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default LessonDetail;
