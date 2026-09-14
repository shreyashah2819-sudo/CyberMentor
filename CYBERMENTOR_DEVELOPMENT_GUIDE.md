# CyberMentor Development Guide

## 1. Project Overview

CyberMentor is a gamified cybersecurity education web application.

The goal is to make cybersecurity learning:
- Fun
- Interactive
- Game-like
- Easy for beginners
- Modern and mature
- Not childish
- Not overly corporate

---

# 2. Tech Stack

## Frontend
- React
- JavaScript
- HTML
- CSS
- Vite
- React Router
- lucide-react

## Backend
- Python
- FastAPI

## Database
- SQLite

## AI
- Python + AI API

## Version Control
- Git
- GitHub

---

# 3. Important Rule: This Is ONE Project

Everyone works on the same CyberMentor repository.

Do NOT:
- Create another Vite project
- Create another GitHub repository
- Create another frontend
- Create another database for your own page
- Delete another person's work
- Copy the whole project into another folder

The repository is the shared source of truth.

---

# 4. Project Structure

Current structure:

CyberMentor/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── backend/
├── database/
├── CYBERMENTOR_DEVELOPMENT_GUIDE.md
└── README.md

---

# 5. Design System

CyberMentor uses a light-first design.

## Colors

Background:
#F8FAFF

Cards:
#FFFFFF

Primary:
#7C3AED

Secondary:
#EC4899

Success:
#22C55E

Warning:
#F59E0B

Danger:
#EF4444

Primary text:
#171725

Secondary text:
#66667A

Border:
#E9ECF6

---

# 6. Design Rules

Use:

- Sora for headings
- Inter for body text
- Rounded cards
- Soft shadows
- Thin borders
- Clean spacing
- Lucide-style icons
- Subtle gradients only when useful
- Purple as the main brand color

Cards generally use:
- 20px border radius
- 24px padding
- White background
- Thin border
- Soft shadow

Buttons generally use:
- 14px border radius
- Medium/bold text
- Purple primary action
- Clear hover state

Do NOT make the UI:
- Too dark
- Too colorful
- Childish
- Overly corporate
- Visually crowded

---

# 7. SHARED COMPONENTS

IMPORTANT:

Before creating a new UI component, ALWAYS check:

frontend/src/components/

If an existing component can do the job, REUSE IT.

Do NOT create duplicate components such as:
- LoginButton
- DashboardButton
- ProfileButton
- LoginCard
- DashboardCard

when the existing shared components can be used.

---

# 8. Current Shared Components

The following components already exist:

- Button
- Card
- Input
- Badge
- ProgressBar
- XPBar
- LevelBadge
- Navbar
- Sidebar
- Modal
- Toast

---

# 9. How to Use Button

Import:

import Button from "../components/Button";

Basic:

<Button>Get Started</Button>

Variants:

<Button variant="primary">Continue</Button>

<Button variant="secondary">Cancel</Button>

<Button variant="danger">Delete</Button>

Use Button instead of creating your own styled button whenever possible.

---

# 10. How to Use Card

Import:

import Card from "../components/Card";

Example:

<Card>
  <h2>Welcome</h2>
  <p>Start your cybersecurity journey.</p>
</Card>

Card supports an optional className:

<Card className="my-card">
  ...
</Card>

Use Card for:
- Dashboard sections
- Lesson cards
- Quiz cards
- Tool cards
- Profile sections
- Information panels

---

# 11. How to Use Input

Import:

import Input from "../components/Input";

Example:

<Input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

Other examples:

<Input
  type="password"
  placeholder="Enter your password"
/>

<Input
  type="text"
  placeholder="Search"
/>

Use Input instead of creating a duplicate styled input.

---

# 12. How to Use Badge

Import:

import Badge from "../components/Badge";

Examples:

<Badge>New</Badge>

<Badge variant="success">
  Completed
</Badge>

<Badge variant="warning">
  Medium
</Badge>

<Badge variant="danger">
  High Risk
</Badge>

<Badge variant="primary">
  Beginner
</Badge>

Available variants:

- default
- success
- warning
- danger
- primary

---

# 13. How to Use ProgressBar

Import:

import ProgressBar from "../components/ProgressBar";

Example:

<ProgressBar value={70} />

For custom maximum:

<ProgressBar
  value={7}
  max={10}
/>

Use it for:
- Lesson progress
- Academy progress
- Mission progress
- Weekly progress
- Quiz progress

---

# 14. How to Use XPBar

Import:

import XPBar from "../components/XPBar";

Example:

<XPBar
  currentXP={750}
  requiredXP={1000}
/>

Use it anywhere the user's XP progress needs to be displayed.

XPBar internally uses ProgressBar.

Do NOT create another XP progress component.

---

# 15. How to Use LevelBadge

Import:

import LevelBadge from "../components/LevelBadge";

Example:

<LevelBadge level={5} />

Use it for:
- Dashboard
- Profile
- Mission Complete
- Other places showing the user's level

---

# 16. How to Use Navbar

Import:

import Navbar from "../components/Navbar";

Example:

<Navbar />

Navbar is shared across logged-in pages.

Do not create separate:
- DashboardNavbar
- ProfileNavbar
- AcademyNavbar

unless there is a genuine structural requirement approved by the team.

---

# 17. How to Use Sidebar

Import:

import Sidebar from "../components/Sidebar";

Example:

<Sidebar />

Sidebar is the shared navigation for the logged-in application.

Its navigation behavior will be connected to React Router later.

Do not create a separate sidebar for every page.

---

# 18. How to Use Modal

Import:

import Modal from "../components/Modal";

Example:

<Modal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Confirm Logout"
>
  <p>Are you sure you want to logout?</p>
</Modal>

Use Modal for:
- Confirmations
- Warnings
- Instructions
- Quiz explanations
- Delete confirmations

---

# 19. How to Use Toast

Import:

import Toast from "../components/Toast";

Example:

<Toast
  message="You earned 50 XP!"
  type="success"
  onClose={() => setShowToast(false)}
/>

Available types:

- default
- success
- warning
- danger

Use Toast for short feedback messages.

---

# 20. Shared CSS

Global design variables are stored in:

frontend/src/index.css

Do NOT create random colors when an existing CyberMentor color variable can be used.

Prefer:

var(--primary)

var(--text-primary)

var(--text-secondary)

var(--bg-primary)

var(--bg-card)

var(--border)

var(--success)

var(--warning)

var(--danger)

---

# 21. Page Ownership

## Moxa

Responsible for:

1. Landing Page
2. Login Page
3. Register Page
5. Cyber Academy
6. Lesson Detail
7. AI Mentor

---

## Aditi

Responsible for:

4. Home Base / Dashboard
8. Challenge Arena
9. Quiz Result
18. Progress Dashboard
19. Badges & Achievements

---

## Shreya

Responsible for:

10. Cyber Lab Home
11. URL Safety Checker
12. Password Strength Analyzer
13. Phishing Email Analyzer
14. Cyber Attack Identifier
15. Cyber Simulations

---

## Aastha

Responsible for:

16. Mission Complete
17. Agent Profile
20. Settings
21. Admin Dashboard
22. User Management
23. Content Management
24. Simulation Management
25. Analytics

---

# 22. Git Branches

Main branch:

main

Team branches:

moxa
aditi
shreya
aastha

Each person works on their own branch.

NEVER directly develop features on main.

---

# 23. Before Starting Work

First make sure you are on your own branch.

Example:

git checkout shreya

Then update your branch:

git pull origin main

Always work with the latest version of main.

---

# 24. Saving Your Work

After completing a meaningful piece of work:

git status

Then:

git add .

git commit -m "Describe your change"

Then:

git push

---

# 25. Pull Requests

After pushing your branch:

Create a Pull Request on GitHub.

Target:

main

Do not force push.

Do not use:

git push --force

unless the team leader explicitly asks you to.

---

# 26. Before Editing Another Person's Files

If you need to modify a file that another teammate owns:

ASK THEM FIRST.

Especially avoid modifying:
- Their page files
- Their feature logic
- Their components
- Their API code

Shared files such as:
- index.css
- routing
- shared components

should be changed carefully and communicated to the team.

---

# 27. Figma → React Workflow

When implementing a Figma page:

1. Open the assigned Figma page.
2. Identify the sections.
3. Check whether existing shared components can be reused.
4. Create the page inside:

frontend/src/pages/

5. Build the structure first.
6. Match spacing, typography and layout.
7. Reuse shared colors and components.
8. Make the page responsive.
9. Test it in the browser.
10. Commit and push.

Do NOT blindly copy Figma styling if it conflicts with the CyberMentor design system.

---

# 28. Creating New Components

Before creating a component:

1. Check src/components/
2. Check whether an existing component can be reused.
3. If yes, reuse it.
4. If no, create a new reusable component.
5. If the component could be useful on multiple pages, put it in src/components/.
6. If it is specific to one page only, keep it near that page.

Example:

A generic card:

src/components/Card.jsx

A component used only inside the Quiz Result page:

src/pages/QuizResult/

may contain page-specific components.

---

# 29. Beginner Development Rule

Do not make large changes without understanding what they do.

If you do not understand a piece of code:

STOP and ask.

Do not randomly:
- Delete files
- Reinstall packages
- Change package.json
- Change Vite configuration
- Change routing
- Delete node_modules
- Change database structure

---

# 30. Important npm Rule

The main frontend project already exists.

Do NOT create another Vite application.

Work inside:

frontend/

When installing a frontend package, make sure the terminal is inside:

frontend/

---

# 31. Current Frontend

The frontend currently uses:

React
Vite
JavaScript
React Router
lucide-react

The application should run using:

npm run dev

---

# 32. Current Development Stage

Shared foundation has been created.

Completed:

- Git setup
- GitHub repository
- React/Vite frontend
- Global light-mode design system
- Shared Button
- Shared Card
- Shared Input
- Shared Badge
- Shared ProgressBar
- Shared XPBar
- Shared LevelBadge
- Shared Navbar
- Shared Sidebar
- Shared Modal
- Shared Toast

---

# 33. Development Order

Follow this general order:

1. Shared components
2. Development guide
3. Page structure
4. React Router
5. Page UI
6. Login/Register
7. Database
8. User system
9. XP and levels
10. Progress tracking
11. Quizzes
12. Cyber Lab tools
13. AI Mentor
14. Admin features
15. Testing
16. Deployment

Do not jump directly into AI or complicated backend features before the basic frontend structure is stable.

---

# 34. Main Rule

CyberMentor is a TEAM project.

The goal is not for every person to build their own separate version.

Everyone must contribute to ONE shared application.

Reuse existing components.

Follow the design system.

Respect other teammates' work.

Commit meaningful changes.

Keep main stable.

When unsure, ask before changing shared files.

---

# 35. Golden Rule

CHECK BEFORE YOU CREATE.

Before creating a new component, style, utility, or structure:

1. Search the existing project.
2. Reuse what already exists.
3. Only create something new when necessary.

This keeps CyberMentor consistent.
