import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: !!localStorage.getItem("authToken"),
    token: localStorage.getItem("authToken"),
  });
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // Check if a token exists when the app loads
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setUser({ token });
    }
  }, []);

  // const login = (token) => {
  //   localStorage.setItem("authToken", token);
  //   setAuth({ isAuthenticated: true, token });
  //   navigate("/"); // Redirect to home
  // };
  const login = (token, role) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userRole", role); // Save the role in localStorage
    setAuth({ isAuthenticated: true, token, role });
    navigate("/"); // Redirect to home
  };

  // Update the initial auth state to include the role
useEffect(() => {
  const token = localStorage.getItem("authToken");
  const role = localStorage.getItem("userRole");
  if (token) {
    setAuth({ isAuthenticated: true, token, role });
  }
}, []);

const logout = async () => {
  try {
    // Call the logout API (GET request)
    await axiosInstance.get("/logout");

    // Clear localStorage and auth state
    localStorage.removeItem("authToken");
    localStorage.removeItem("authRole"); // Clear role from localStorage
    setAuth({ isAuthenticated: false, token: null, role: null }); // Reset auth state

    // Redirect to login
    navigate("/login");
  } catch (error) {
    console.error("Logout failed:", error);
    // Optionally handle the error
  }
};

  

  return (
    <AuthContext.Provider value={{ auth, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
