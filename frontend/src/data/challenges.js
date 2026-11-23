// Challenge Arena content (frontend-only for now).
export const CHALLENGES = [
  {
    id: "phishing-patrol",
    title: "Phishing Patrol",
    difficulty: "Easy",
    tone: "green",
    description: "Spot the scam before it spots you. Check emails, links and requests.",
    questions: [
      {
        q: "An email from 'support@paypa1-security.com' asks you to verify your account now. What is the biggest red flag?",
        options: ["It mentions your account", "The sender domain is a lookalike (paypa1)", "It was sent today", "It has a logo"],
        answer: 1,
        explain: "Lookalike domains swap characters (l for 1) to imitate a real company.",
      },
      {
        q: "A text says 'Your parcel is held. Pay a fee at this link.' You weren't expecting a parcel. What do you do?",
        options: ["Click quickly", "Reply with your card details", "Ignore it and check the courier's official app/site", "Forward it to friends"],
        answer: 2,
        explain: "Go to the official source yourself instead of using the supplied link.",
      },
      {
        q: "Which link is most likely safe for your bank?",
        options: ["http://bank-login.example-help.net", "https://www.yourbank.com", "https://yourbank.com.verify-now.xyz", "https://yourbank-secure-login.info"],
        answer: 1,
        explain: "The real domain is the part right before the first single slash, here yourbank.com.",
      },
      {
        q: "You clicked a suspicious link and typed your password. First action?",
        options: ["Do nothing", "Change that password and turn on 2FA", "Delete your email", "Restart the router"],
        answer: 1,
        explain: "Change the exposed password immediately and add a second factor.",
      },
    ],
  },
  {
    id: "password-defender",
    title: "Password Defender",
    difficulty: "Easy",
    tone: "green",
    description: "Build unbreakable habits: passphrases, managers and two-factor.",
    questions: [
      {
        q: "Which is the strongest password?",
        options: ["Password123!", "Tr0ub4dor&3", "river-candle-orbit-maple-seven", "qwertyuiop"],
        answer: 2,
        explain: "A long random passphrase beats short 'clever' substitutions.",
      },
      {
        q: "Why should every account have a different password?",
        options: ["It looks neat", "A leak on one site can't unlock the others", "Sites require it", "It makes logins faster"],
        answer: 1,
        explain: "Reuse lets attackers try one leaked password everywhere.",
      },
      {
        q: "Which second factor is generally the strongest?",
        options: ["SMS code", "Security question", "Hardware key or authenticator app", "Your birthday"],
        answer: 2,
        explain: "Authenticator apps and hardware keys resist SIM-swap and phishing better than SMS.",
      },
      {
        q: "A password manager mainly helps you...",
        options: ["Hide your IP", "Create and store unique passwords", "Speed up Wi-Fi", "Block malware"],
        answer: 1,
        explain: "It generates and remembers a unique password for each site.",
      },
    ],
  },
  {
    id: "network-ninja",
    title: "Network Ninja",
    difficulty: "Medium",
    tone: "amber",
    description: "Wi-Fi, firewalls, VPNs and the web: test your network know-how.",
    questions: [
      {
        q: "You're at a cafe and need to check your bank. Safest option?",
        options: ["Free cafe Wi-Fi", "Your mobile data", "Any open hotspot", "A stranger's hotspot"],
        answer: 1,
        explain: "Mobile data avoids untrusted shared networks.",
      },
      {
        q: "What does a firewall do?",
        options: ["Encrypts all files", "Filters network traffic by rules", "Finds typos", "Stores passwords"],
        answer: 1,
        explain: "It allows expected connections and blocks the rest.",
      },
      {
        q: "A browser padlock (HTTPS) means...",
        options: ["The site is guaranteed honest", "The connection is encrypted", "The site has no malware", "The site is government approved"],
        answer: 1,
        explain: "It protects data in transit; it does not vouch for the site's intentions.",
      },
      {
        q: "Which defence best prevents SQL injection?",
        options: ["Parameterised queries", "Longer page titles", "Bigger images", "Turning off HTTPS"],
        answer: 0,
        explain: "They keep user input separate from the query structure.",
      },
    ],
  },
];

export function getChallenge(id) {
  return CHALLENGES.find((c) => c.id === id);
}

export const XP_PER_CORRECT = 10;
export const PERFECT_BONUS = 20;
