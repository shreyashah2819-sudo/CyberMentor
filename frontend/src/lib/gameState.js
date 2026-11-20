// XP, level, streak and challenge attempts, stored in the browser per user.
// TODO (after team discussion): move to the shared `progress` / `mission_attempts` tables.
import { LESSONS } from "../data/lessons.js";
import { getCompleted } from "./progress.js";

export const XP_PER_LEVEL = 200;
const keyFor = (userId) => `cybermentor_attempts_${userId || "guest"}`;

export function getAttempts(userId) {
  try {
    const v = JSON.parse(localStorage.getItem(keyFor(userId)));
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

// XP is only awarded for improving on your best earlier result, so replaying can't farm XP.
export function saveAttempt(userId, { challengeId, score, total, earned }) {
  const attempts = getAttempts(userId);
  const bestBefore = attempts
    .filter((a) => a.challengeId === challengeId)
    .reduce((m, a) => Math.max(m, a.earned || 0), 0);
  const awarded = Math.max(0, earned - bestBefore);
  const attempt = { challengeId, score, total, earned, xp: awarded, date: new Date().toISOString() };
  attempts.push(attempt);
  try {
    localStorage.setItem(keyFor(userId), JSON.stringify(attempts.slice(-50)));
  } catch {
    /* storage unavailable */
  }
  return attempt;
}

const dayKey = (d) => new Date(d).toDateString();

// Number of consecutive days (ending today or yesterday) with at least one attempt.
function streakOf(attempts) {
  const days = new Set(attempts.map((a) => dayKey(a.date)));
  let streak = 0;
  const d = new Date();
  if (!days.has(dayKey(d))) d.setDate(d.getDate() - 1);
  while (days.has(dayKey(d))) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

export function getStats(userId) {
  const done = getCompleted(userId);
  const doneLessons = LESSONS.filter((l) => done.includes(l.id));
  const attempts = getAttempts(userId);
  const lessonXp = doneLessons.reduce((n, l) => n + l.xp, 0);
  const challengeXp = attempts.reduce((n, a) => n + (a.xp || 0), 0);
  const xp = lessonXp + challengeXp;
  return {
    xp,
    lessonXp,
    challengeXp,
    level: Math.floor(xp / XP_PER_LEVEL) + 1,
    xpIntoLevel: xp % XP_PER_LEVEL,
    lessonsDone: doneLessons.length,
    lessonsTotal: LESSONS.length,
    doneLessonIds: done,
    attempts,
    perfectCount: attempts.filter((a) => a.score === a.total).length,
    streak: streakOf(attempts),
    attemptedToday: (challengeId) =>
      attempts.some((a) => a.challengeId === challengeId && dayKey(a.date) === dayKey(new Date())),
  };
}
