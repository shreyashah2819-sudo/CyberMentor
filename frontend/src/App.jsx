import { Routes, Route, Navigate } from "react-router-dom";

// ---- Moxa's pages ----
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Academy from "./pages/Academy.jsx";
import LessonDetail from "./pages/LessonDetail.jsx";
import AIMentor from "./pages/AIMentor.jsx";

// ---- Aditi's pages (frontend-only versions; Aditi can replace the files) ----
import Dashboard from "./pages/Dashboard.jsx";
import ChallengeArena from "./pages/ChallengeArena.jsx";
import QuizResult from "./pages/QuizResult.jsx";
import ProgressDashboard from "./pages/ProgressDashboard.jsx";
import BadgesAchievements from "./pages/BadgesAchievements.jsx";
import RequireAuth from "./components/RequireAuth.jsx";

// Teammates: add your imports and routes below your section.
// Never delete another member's route.

function App() {
  return (
    <Routes>
      {/* Moxa */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="/academy/:lessonId" element={<LessonDetail />} />
      <Route path="/mentor" element={<AIMentor />} />

      {/* Aditi (login required) */}
      <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
      <Route path="/challenges" element={<RequireAuth><ChallengeArena /></RequireAuth>} />
      <Route path="/challenges/:challengeId" element={<RequireAuth><ChallengeArena /></RequireAuth>} />
      <Route path="/quiz-result" element={<RequireAuth><QuizResult /></RequireAuth>} />
      <Route path="/progress" element={<RequireAuth><ProgressDashboard /></RequireAuth>} />
      <Route path="/badges" element={<RequireAuth><BadgesAchievements /></RequireAuth>} />
      {/* Shreya */}
      {/* Aastha */}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
