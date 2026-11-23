// Lesson progress for the Academy. Stored in the browser per user for now.
// TODO (after team discussion): move to the shared `progress` table via an API.
const keyFor = (userId) => `cybermentor_lessons_${userId || "guest"}`;

export function getCompleted(userId) {
  try {
    const v = JSON.parse(localStorage.getItem(keyFor(userId)));
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

export function markCompleted(userId, lessonId) {
  const done = getCompleted(userId);
  if (!done.includes(lessonId)) done.push(lessonId);
  try {
    localStorage.setItem(keyFor(userId), JSON.stringify(done));
  } catch {
    /* ignore */
  }
  return done;
}
