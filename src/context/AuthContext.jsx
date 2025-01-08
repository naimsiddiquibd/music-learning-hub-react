import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Automatically check for token on mount
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      axios
        .get("/api/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data.user))
        .catch(() => logout()); // Clear if token invalid
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/login", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("accessToken", token);
      setUser(user);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || "Login failed" };
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
