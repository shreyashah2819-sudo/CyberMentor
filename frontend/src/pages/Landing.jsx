import { Link } from "react-router-dom";
import {
  BookOpen, Bot, FlaskConical, Target, TrendingUp, ArrowRight, Sparkles,
  GraduationCap, HelpCircle, Layers,
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import HeroIllustration from "../components/moxa/HeroIllustration.jsx";
import FeatureCard from "../components/moxa/FeatureCard.jsx";
import StatsBar from "../components/moxa/StatsBar.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { LESSONS } from "../data/lessons.js";

const FEATURES = [
  { icon: BookOpen, tone: "purple", title: "Interactive Learning", text: "Learn cybersecurity with bite-sized lessons, quizzes and real-world examples.", to: "/academy" },
  { icon: Bot, tone: "blue", title: "AI Mentor", text: "Get instant help from your mentor and clear your doubts anytime, anywhere.", to: "/mentor" },
  { icon: FlaskConical, tone: "green", title: "Hands-on Labs", text: "Practise in safe, educational labs and simulations. Coming with the Cyber Lab.", to: "/register" },
  { icon: Target, tone: "orange", title: "Challenges", text: "Solve exciting challenges, earn XP and climb the leaderboards.", to: "/register" },
  { icon: TrendingUp, tone: "pink", title: "Track Progress", text: "Track your progress, earn badges and become a true Cyber Guardian.", to: "/academy" },
];

const STEPS = [
  { title: "Create your agent profile", text: "Sign up free in under a minute." },
  { title: "Learn in the Academy", text: "Work through short lessons and quizzes." },
  { title: "Test your skills", text: "Take on missions and earn XP." },
];

function Landing() {
  const { user } = useAuth();
  const quizCount = LESSONS.reduce((n, l) => n + l.quiz.length, 0);

  const stats = [
    { icon: GraduationCap, tone: "purple", value: LESSONS.length, label: "Academy Lessons" },
    { icon: HelpCircle, tone: "blue", value: quizCount, label: "Quiz Questions" },
    { icon: Layers, tone: "orange", value: "3", label: "Difficulty Levels" },
    { icon: Bot, tone: "green", value: "24/7", label: "AI Mentor Help" },
  ];

  return (
    <>
      <Navbar landing />
      <main id="top">
        <section className="hero2">
          <div className="container hero2-grid">
            <div className="hero2-copy">
              <span className="pill">
                <Sparkles size={14} /> AI-Powered Protection
              </span>
              <h1>
                AI-Powered Cybersecurity, <span className="grad">Invisible Protection</span>
              </h1>
              <p className="lead">
                CyberMentor helps you understand threats, protect your digital world and become a
                cybersecurity expert, one fun mission at a time.
              </p>
              <div className="hero-btns">
                <Link to={user ? "/academy" : "/register"} className="btn btn-cta btn-lg">
                  {user ? "Continue Learning" : "Start Your Journey"} <ArrowRight size={18} />
                </Link>
                <Link to="/academy" className="btn btn-secondary btn-lg">
                  <BookOpen size={18} color="var(--cyan)" /> Explore Academy
                </Link>
              </div>
            </div>
            <HeroIllustration />
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <h2 className="center-title">
              Everything You Need to <span className="grad-purple">Master</span>{" "}
              <span className="grad-pink">Cybersecurity</span>
            </h2>
            <div className="feature-grid">
              {FEATURES.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </section>

        <section className="container">
          <StatsBar stats={stats} />
        </section>

        <section className="section" id="how">
          <div className="container">
            <h2 className="center-title">How it works</h2>
            <div className="grid grid-3">
              {STEPS.map((s, i) => (
                <div key={s.title} className="fcard" style={{ textAlign: "left", alignItems: "flex-start" }}>
                  <div className="step-num">{i + 1}</div>
                  <h3>{s.title}</h3>
                  <p style={{ margin: 0 }}>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">CyberMentor · A college project for learning cybersecurity safely and legally.</div>
      </footer>
    </>
  );
}

export default Landing;
