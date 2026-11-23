import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Input from "../components/Input.jsx";
import LessonCard from "../components/moxa/LessonCard.jsx";
import AcademyProgress from "../components/moxa/AcademyProgress.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { LESSONS, CATEGORIES } from "../data/lessons.js";
import { getCompleted } from "../lib/progress.js";

function Academy() {
  const { user } = useAuth();
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const completed = getCompleted(user?.id);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LESSONS.filter(
      (l) =>
        (category === "All" || l.category === category) &&
        (!q || l.title.toLowerCase().includes(q) || l.summary.toLowerCase().includes(q))
    );
  }, [category, query]);

  const doneLessons = LESSONS.filter((l) => completed.includes(l.id));
  const earnedXp = doneLessons.reduce((n, l) => n + l.xp, 0);

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="container">
          <div className="page-head">
            <h1>Cyber Academy</h1>
            <p className="muted">Short lessons with a quiz at the end. Finish them to earn XP.</p>
          </div>

          <AcademyProgress done={doneLessons.length} total={LESSONS.length} xp={earnedXp} />

          <div className="toolbar">
            <Input
              id="lesson-search"
              icon={Search}
              placeholder="Search lessons..."
              aria-label="Search lessons"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="chips">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  className={`chip${category === c ? " active" : ""}`}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {visible.length === 0 ? (
            <p className="empty">No lessons match your search.</p>
          ) : (
            <div className="grid grid-3">
              {visible.map((l) => (
                <LessonCard key={l.id} lesson={l} done={completed.includes(l.id)} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Academy;
