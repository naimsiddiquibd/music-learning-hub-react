import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role
  const [instrument, setInstrument] = useState(""); // Selected instrument for instructors
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const instrumentMapping = {
    Guitar: 1,
    Piano: 2,
    Drums: 3,
  };

  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    const registrationData = {
      name,
      email,
      password,
      role,
      instrument_id: role === "instructor" ? instrumentMapping[instrument] : null,
    };
  
    try {
      const response = await axios.post(
        "https://musichub.fatmonk.studio/api/register",
        registrationData
      );
  
      if (response.status === 200) {
        const token = response.data.token;
  
        // Save token in localStorage
        localStorage.setItem("accessToken", token);
  
        alert("Registration successful! Redirecting to login page...");
        navigate("/login");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during registration.");
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-100 mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:border-[#B63FA1]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:border-[#B63FA1]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:border-[#B63FA1]"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-400"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:border-[#B63FA1]"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-400">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:border-[#B63FA1]"
            >
              <option value="student">student</option>
              <option value="instructor">instructor</option>
            </select>
          </div>
          {/* Show Instrument Selection if Role is instructor */}
          {role === "instructor" && (
            <div>
              <label htmlFor="instrument" className="block text-sm font-medium text-gray-400">
                Select Instrument
              </label>
              <select
                id="instrument"
                value={instrument}
                onChange={(e) => setInstrument(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:border-[#B63FA1]"
              >
                <option value="">Select an instrument</option>
                <option value="Guitar">Guitar</option>
                <option value="Piano">Piano</option>
                <option value="Drums">Drums</option>
              </select>
            </div>
          )}
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#B63FA1] rounded-md hover:bg-[#80246f] focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:ring-offset-2"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-[#B63FA1] hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
