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

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

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
  path="/malware-analyzer"
  element={<MalwareAnalyzerPage />}
/>
<Route
  path="/cyber-simulations/qr-scam"
  element={<CyberSimulationMissionPage />}
/>
    </Routes>
    
  );
}

export default App;