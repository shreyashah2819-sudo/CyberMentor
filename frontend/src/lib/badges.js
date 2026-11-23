import { BookOpen, GraduationCap, Target, Star, Trophy, Flame, Crown, Rocket } from "lucide-react";

// Each badge is unlocked by a rule on the player's stats (see lib/gameState.js getStats).
export const BADGES = [
  { id: "first-lesson", title: "First Steps", icon: BookOpen, description: "Complete your first lesson.", goal: 1, value: (s) => s.lessonsDone },
  { id: "all-lessons", title: "Academy Graduate", icon: GraduationCap, description: "Complete every Academy lesson.", goal: (s) => s.lessonsTotal, value: (s) => s.lessonsDone },
  { id: "first-challenge", title: "Challenger", icon: Target, description: "Finish your first challenge.", goal: 1, value: (s) => s.attempts.length },
  { id: "perfect", title: "Perfect Score", icon: Star, description: "Get every question right in a challenge.", goal: 1, value: (s) => s.perfectCount },
  { id: "arena-regular", title: "Arena Regular", icon: Trophy, description: "Finish 5 challenge attempts.", goal: 5, value: (s) => s.attempts.length },
  { id: "streak-3", title: "On Fire", icon: Flame, description: "Reach a 3-day challenge streak.", goal: 3, value: (s) => s.streak },
  { id: "xp-300", title: "Rising Agent", icon: Rocket, description: "Earn 300 XP.", goal: 300, value: (s) => s.xp },
  { id: "level-5", title: "Cyber Guardian", icon: Crown, description: "Reach level 5.", goal: 5, value: (s) => s.level },
];

export function evaluateBadges(stats) {
  return BADGES.map((b) => {
    const goal = typeof b.goal === "function" ? b.goal(stats) : b.goal;
    const value = Math.min(b.value(stats), goal);
    return { ...b, goal, current: value, unlocked: value >= goal };
  });
}
