import { createContext, useContext, useState, useCallback } from "react";

const KEY = "cybermentor_user";
const AuthContext = createContext(null);

function readUser() {
  try {
    return JSON.parse(localStorage.getItem(KEY));
  } catch {
    return null;
  }
}

// Holds the REAL logged-in user (id, username, email, xp, level) returned by the backend.
// Teammates: use `const { user } = useAuth(); user.id` instead of the temporary user_id = 1.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(readUser);

  const login = useCallback((u) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(u));
    } catch {
      /* storage unavailable */
    }
    setUser(u);
  }, []);

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
    setUser(null);
  }, []);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
