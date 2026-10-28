import { Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CyberLabPage from "./pages/CyberLabPage";
import URLSafetyCheckerPage from "./pages/URLSafetyCheckerPage";
import PasswordStrengthPage from "./pages/PasswordStrengthPage";
import PhishingEmailAnalyzerPage from "./pages/PhishingAnalyzerPage";
import CyberAttackIdentifierPage from "./pages/CyberAttackIdentifierPage";
import CyberSimulationsPage from "./pages/CyberSimulationsPage";
import CyberSimulationMissionPage from "./pages/CyberSimulationMissionPage";
import MalwareAnalyzerPage from "./pages/MalwareAnalyzerPage";
import ProfilePage from "./pages/ProfilePage";
import Achievements from "./pages/Achievements";
import Challenges from "./pages/Challenges";
import Leaderboard from "./pages/Leaderboard";
import AdminDashboard from "./pages/AdminDashboard";
import UserManagement from "./pages/UserManagement";
import ContentManagement from "./pages/ContentManagement";
import SimulationManagement from "./pages/SimulationManagement";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      {/* Landing and Authentication */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Cyber Lab */}
      <Route path="/cyber-lab" element={<CyberLabPage />} />

      <Route
        path="/url-safety-checker"
        element={<URLSafetyCheckerPage />}
      />

      <Route
        path="/password-strength"
        element={<PasswordStrengthPage />}
      />

      <Route
        path="/phishing-email-analyzer"
        element={<PhishingEmailAnalyzerPage />}
      />

      <Route
        path="/cyber-attack-identifier"
        element={<CyberAttackIdentifierPage />}
      />

      <Route
        path="/malware-analyzer"
        element={<MalwareAnalyzerPage />}
      />

      {/* Cyber Simulations */}
      <Route
        path="/cyber-simulations"
        element={<CyberSimulationsPage />}
      />

      <Route
        path="/cyber-simulations/fake-bank-email"
        element={<CyberSimulationMissionPage />}
      />

      <Route
        path="/cyber-simulations/otp-scam"
        element={<CyberSimulationMissionPage />}
      />

      <Route
        path="/cyber-simulations/fake-whatsapp"
        element={<CyberSimulationMissionPage />}
      />

      <Route
        path="/cyber-simulations/fake-job-offer"
        element={<CyberSimulationMissionPage />}
      />

      <Route
        path="/cyber-simulations/usb-attack"
        element={<CyberSimulationMissionPage />}
      />

      <Route
        path="/cyber-simulations/qr-scam"
        element={<CyberSimulationMissionPage />}
      />

      {/* Aastha's Profile Page */}
      <Route
        path="/profile"
        element={<ProfilePage />}
      />

      <Route
  path="/achievements"
  element={<Achievements />}
/>
<Route path="/challenges" element={<Challenges />} />

<Route path="/leaderboard" element={<Leaderboard />} />

<Route path="/admin" element={<AdminDashboard />} />

<Route path="/admin/users" element={<UserManagement />} />
<Route path="/admin/content" element={<ContentManagement />} />
<Route path="/admin/analytics" element={<Analytics />} />
<Route path="/settings" element={<Settings />} />

<Route
  path="/admin/simulations"
  element={<SimulationManagement />
    
  }
  
/>
    </Routes>
  );
}

export default App;