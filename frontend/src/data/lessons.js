// Academy lesson content. Kept in the frontend so no new database table is needed yet.
// The AI Mentor backend links to these ids.
export const CATEGORIES = ["All", "Basics", "Accounts", "Threats", "Network", "Web"];

export const LESSONS = [
  {
    id: "cyber-basics",
    title: "Cybersecurity Basics",
    category: "Basics",
    level: "Beginner",
    minutes: 8,
    xp: 50,
    summary: "What cybersecurity is, why it matters, and the CIA triad that guides every defence.",
    sections: [
      {
        heading: "What is cybersecurity?",
        body: "Cybersecurity is the practice of protecting devices, networks, accounts and data from people who want to steal, damage or lock them. It covers everything from a strong password on your phone to the systems that protect a bank.",
      },
      {
        heading: "The CIA triad",
        body: "Security professionals judge almost everything against three goals. Confidentiality means only the right people can see information. Integrity means information can't be changed without permission. Availability means systems and data are there when you need them. An attack usually breaks at least one of these.",
      },
      {
        heading: "Threats, vulnerabilities and risk",
        body: "A threat is something that could cause harm (a scammer). A vulnerability is a weakness it could use (a reused password). Risk is how likely and how damaging the problem would be. Good defence reduces vulnerabilities so threats have less to work with.",
      },
    ],
    takeaways: [
      "Cybersecurity protects people, devices, networks and data.",
      "The CIA triad: Confidentiality, Integrity, Availability.",
      "Reducing vulnerabilities reduces risk.",
    ],
    quiz: [
      {
        q: "Which part of the CIA triad means data is not changed without permission?",
        options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
        answer: 1,
        explain: "Integrity is about keeping data accurate and unaltered.",
      },
      {
        q: "A reused password is best described as a...",
        options: ["Threat", "Vulnerability", "Firewall", "Backup"],
        answer: 1,
        explain: "It is a weakness that a threat (an attacker) can exploit.",
      },
      {
        q: "A website going offline because of an attack mainly hurts which goal?",
        options: ["Availability", "Integrity", "Confidentiality", "Privacy"],
        answer: 0,
        explain: "Availability means systems are accessible when needed.",
      },
    ],
  },
  {
    id: "password-security",
    title: "Password Security & 2FA",
    category: "Accounts",
    level: "Beginner",
    minutes: 10,
    xp: 60,
    summary: "Build strong passphrases, use a password manager and turn on two-factor authentication.",
    sections: [
      {
        heading: "Why passwords get broken",
        body: "Attackers rarely guess one password by hand. They try huge lists of common passwords, reuse passwords leaked from other sites, or trick people into typing them on fake pages. Short, common or reused passwords fall quickly.",
      },
      {
        heading: "Make it long, not complicated",
        body: "Length beats cleverness. A passphrase of four or more random words, like 'orbit-lemon-tractor-quiet', is easier to remember and much harder to crack than 'P@ssw0rd1'. Avoid names, birthdays and anything people could find on your profile.",
      },
      {
        heading: "One password per account",
        body: "If you reuse a password, one leaked site can unlock all your accounts. A password manager creates and remembers a unique password for each site, so you only need to remember one strong master passphrase.",
      },
      {
        heading: "Two-factor authentication (2FA)",
        body: "2FA adds a second check, like a code from an authenticator app, after your password. Even if someone learns your password they still can't get in. Turn it on for your email first, since email can reset every other account.",
      },
    ],
    takeaways: [
      "Use long, random passphrases and never reuse them.",
      "A password manager removes the need to memorise many passwords.",
      "Enable 2FA, starting with email and banking.",
    ],
    quiz: [
      {
        q: "Which password is the strongest choice?",
        options: ["Summer2024!", "P@ssw0rd", "orbit-lemon-tractor-quiet", "qwerty123"],
        answer: 2,
        explain: "A long random passphrase is much harder to guess or crack.",
      },
      {
        q: "Why is reusing passwords dangerous?",
        options: [
          "It slows down your phone",
          "One leak can expose all accounts that share it",
          "Websites forbid it",
          "It makes passwords shorter",
        ],
        answer: 1,
        explain: "Attackers try leaked passwords on other sites (credential stuffing).",
      },
      {
        q: "What does 2FA add?",
        options: ["A faster login", "A second proof of identity", "A longer password", "A VPN"],
        answer: 1,
        explain: "It requires something more than just the password.",
      },
    ],
  },
  {
    id: "phishing-awareness",
    title: "Spotting Phishing & Scams",
    category: "Threats",
    level: "Beginner",
    minutes: 12,
    xp: 70,
    summary: "Learn the warning signs of phishing emails, fake links and social engineering tricks.",
    sections: [
      {
        heading: "What is phishing?",
        body: "Phishing is when an attacker pretends to be a trusted person or company to make you click a link, open a file or reveal a password. It arrives by email, SMS, chat or even phone calls.",
      },
      {
        heading: "Red flags to check",
        body: "Look at the real sender address, not just the display name. Watch for urgency ('Your account will be closed in 1 hour!'), spelling oddities, requests for passwords or codes, and unexpected attachments. Hover over links to see where they really go before you click.",
      },
      {
        heading: "Social engineering",
        body: "Phishing is one kind of social engineering: manipulating people instead of hacking machines. Attackers use urgency, authority, fear and friendliness to rush you. Slowing down is the best defence.",
      },
      {
        heading: "What to do",
        body: "Don't click or reply. Visit the official site by typing the address yourself, or call the organisation using a number you already trust. Report the message and delete it. If you already entered a password, change it immediately and enable 2FA.",
      },
    ],
    takeaways: [
      "Check the real sender and the real link destination.",
      "Urgency and fear are classic manipulation signals.",
      "Verify through a second channel you already trust.",
    ],
    quiz: [
      {
        q: "An email says 'Act in 30 minutes or your account is deleted'. This is most likely...",
        options: ["A normal notice", "A pressure tactic used in phishing", "A software update", "A newsletter"],
        answer: 1,
        explain: "Artificial urgency is a common phishing technique.",
      },
      {
        q: "What's the safest way to check a message from your bank?",
        options: [
          "Click the link in the message",
          "Reply with your details",
          "Open the bank's official site or app yourself",
          "Forward it to friends",
        ],
        answer: 2,
        explain: "Go to the official source on your own instead of using the supplied link.",
      },
      {
        q: "You typed your password on a suspicious page. What should you do first?",
        options: ["Nothing", "Change that password and enable 2FA", "Restart your phone", "Delete the browser"],
        answer: 1,
        explain: "Change the exposed password right away and add a second factor.",
      },
    ],
  },
  {
    id: "malware-basics",
    title: "Malware, Ransomware & Updates",
    category: "Threats",
    level: "Intermediate",
    minutes: 12,
    xp: 80,
    summary: "Understand viruses, trojans, spyware and ransomware, and how updates and backups protect you.",
    sections: [
      {
        heading: "Types of malware",
        body: "Malware is software designed to cause harm. A virus attaches itself to files, a worm spreads by itself across networks, a trojan pretends to be a useful program, spyware secretly watches you, and ransomware locks your files until a payment is made.",
      },
      {
        heading: "How it gets in",
        body: "Common routes are malicious attachments, pirated or unofficial apps, fake download buttons, infected USB drives and unpatched software. Most infections need a person to click something, which is why awareness matters.",
      },
      {
        heading: "Defences that work",
        body: "Install apps only from official stores, keep your operating system and apps updated, use a trusted security tool, and avoid enabling macros in unknown documents. Updates matter because they fix vulnerabilities that malware depends on.",
      },
      {
        heading: "Backups: your safety net",
        body: "Follow the 3-2-1 rule: keep 3 copies of important files, on 2 different types of storage, with 1 copy offsite or offline. If ransomware hits, a clean backup means you don't need to pay.",
      },
    ],
    takeaways: [
      "Malware includes viruses, worms, trojans, spyware and ransomware.",
      "Official sources and regular updates prevent most infections.",
      "3-2-1 backups beat ransomware.",
    ],
    quiz: [
      {
        q: "Which malware pretends to be a useful program?",
        options: ["Worm", "Trojan", "Firewall", "Patch"],
        answer: 1,
        explain: "Trojans hide inside software that looks legitimate.",
      },
      {
        q: "What is the best protection against losing files to ransomware?",
        options: ["Paying quickly", "Offline backups", "Bigger passwords", "Turning off Wi-Fi forever"],
        answer: 1,
        explain: "A clean, offline backup lets you restore without paying.",
      },
      {
        q: "Why should you install software updates?",
        options: [
          "They fix security holes",
          "They remove all passwords",
          "They make files bigger",
          "They are only cosmetic",
        ],
        answer: 0,
        explain: "Patches close vulnerabilities attackers rely on.",
      },
    ],
  },
  {
    id: "network-safety",
    title: "Network Safety, Wi-Fi & Privacy",
    category: "Network",
    level: "Intermediate",
    minutes: 11,
    xp: 80,
    summary: "Stay safe on public Wi-Fi, understand firewalls and VPNs, and protect your personal data.",
    sections: [
      {
        heading: "How data travels",
        body: "When you use the internet, data hops through your router and many other networks. On an unprotected network, someone nearby might be able to watch or tamper with that traffic.",
      },
      {
        heading: "Public Wi-Fi risks",
        body: "Open Wi-Fi can be monitored, and attackers can set up fake hotspots with believable names. Use HTTPS sites (the padlock), avoid banking on public Wi-Fi, and prefer mobile data for sensitive tasks.",
      },
      {
        heading: "Firewalls and VPNs",
        body: "A firewall allows expected network connections and blocks the rest, and your router and computer already include one. A VPN encrypts the connection between your device and the VPN server, which helps on untrusted networks. It does not make you anonymous and doesn't stop phishing.",
      },
      {
        heading: "Protecting your privacy",
        body: "Review app permissions, keep social media profiles private, and don't share your location, school or ID details publicly. If a service you use has a data breach, change that password and anywhere you reused it.",
      },
    ],
    takeaways: [
      "Prefer HTTPS and avoid sensitive logins on public Wi-Fi.",
      "Firewalls filter traffic; VPNs encrypt it on untrusted networks.",
      "Share less personal information online.",
    ],
    quiz: [
      {
        q: "What does a firewall do?",
        options: [
          "Filters network traffic using rules",
          "Speeds up downloads",
          "Stores passwords",
          "Removes spam",
        ],
        answer: 0,
        explain: "It allows or blocks connections based on rules.",
      },
      {
        q: "Which is safest for online banking when away from home?",
        options: ["Free cafe Wi-Fi", "Your mobile data", "Any open hotspot", "A friend's unknown hotspot"],
        answer: 1,
        explain: "Mobile data avoids untrusted shared networks.",
      },
      {
        q: "A VPN mainly...",
        options: [
          "Makes you completely anonymous",
          "Blocks all phishing",
          "Encrypts traffic between your device and the VPN server",
          "Replaces antivirus",
        ],
        answer: 2,
        explain: "It protects the connection, but isn't a cure-all.",
      },
    ],
  },
  {
    id: "web-security",
    title: "Web Security & Encryption",
    category: "Web",
    level: "Advanced",
    minutes: 14,
    xp: 100,
    summary: "How HTTPS, hashing and common web flaws like SQL injection and XSS work, at a beginner level.",
    sections: [
      {
        heading: "Encryption vs hashing",
        body: "Encryption scrambles data so only someone with the key can read it, and it can be reversed. Hashing turns data into a fixed-length fingerprint that can't be reversed. Websites should store hashed (and salted) passwords, never the passwords themselves.",
      },
      {
        heading: "HTTPS",
        body: "HTTPS uses TLS encryption so data between your browser and a website can't easily be read or changed on the way. The padlock means the connection is encrypted, not that the site is trustworthy.",
      },
      {
        heading: "SQL injection",
        body: "SQL injection happens when an app inserts user input directly into a database query, letting an attacker change what the query does. Developers prevent it with parameterised queries and input validation.",
      },
      {
        heading: "Cross-site scripting (XSS)",
        body: "XSS lets an attacker get their script to run in other users' browsers, often because a site displays user input without escaping it. Escaping output and using a content security policy reduce the risk. Practise these only in legal labs, never on systems you don't own.",
      },
    ],
    takeaways: [
      "Hashing is one-way; encryption can be reversed with a key.",
      "The HTTPS padlock means encrypted, not necessarily safe.",
      "Parameterised queries stop SQL injection; escaping output stops XSS.",
    ],
    quiz: [
      {
        q: "How should a website store passwords?",
        options: ["Plain text", "Encrypted with a shared key", "Salted hashes", "In the URL"],
        answer: 2,
        explain: "Salted hashes can't be reversed back into the password.",
      },
      {
        q: "Which defence best prevents SQL injection?",
        options: ["Parameterised queries", "A longer page title", "Bigger images", "Disabling HTTPS"],
        answer: 0,
        explain: "They keep user input separate from the query structure.",
      },
      {
        q: "A padlock in the browser means...",
        options: [
          "The site is guaranteed trustworthy",
          "The connection is encrypted",
          "The site has no malware",
          "The site is government approved",
        ],
        answer: 1,
        explain: "It shows encryption in transit, not that the site is honest.",
      },
    ],
  },
];

export function getLesson(id) {
  return LESSONS.find((l) => l.id === id);
}
