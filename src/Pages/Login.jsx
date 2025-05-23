import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch("https://wealthx-backend.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', JSON.stringify(data.user));
        const role = data.user.role;

        if (role === 'Admin') {
          alert('Admin Login');
          navigate('/admin');
        } else if (role === 'user') {
          alert('user Login');
          navigate("/user");
        }
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-950 min-h-screen flex items-center justify-center text-white px-4 font-['Inter']">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-green-300 focus:outline-none focus:ring-2 focus:ring-[#9AD953]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-green-300 focus:outline-none focus:ring-2 focus:ring-[#9AD953]"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-2">{error}</p>
          )}

          <button
            type="submit"
            className="group w-full bg-[#9AD953] text-black font-bold py-3 rounded-md hover:bg-[#F5C96D] transition duration-300 hover:scale-105 hover:cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}{" "}
            <i className="fas fa-arrow-right ml-2 transition-transform duration-700 group-hover:rotate-[-70deg]"></i>
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="hover:text-[#9AD953] underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
