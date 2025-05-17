import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const signup = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Something went wrong');
        setLoading(false);
        return;
      }

      // Success - redirect to login
      navigate('/login');

    } catch (err) {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-950 min-h-screen flex items-center justify-center text-white px-4">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form className="space-y-4" onSubmit={signup}>
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-green-300 focus:outline-none focus:ring-2 focus:ring-[#9AD953]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-green-300 focus:outline-none focus:ring-2 focus:ring-[#9AD953]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Choose a password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-green-300 focus:outline-none focus:ring-2 focus:ring-[#9AD953]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-green-300 focus:outline-none focus:ring-2 focus:ring-[#9AD953]"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm font-semibold">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group w-full hover:cursor-pointer bg-[#9AD953] text-black font-bold py-3 rounded-md hover:bg-[#F5C96D] transition duration-300 hover:scale-105 disabled:opacity-60"
          >
            {loading ? "Signing Up..." : "Sign Up"}
            <i className="fas fa-arrow-right ml-2 transition-transform duration-700 group-hover:-rotate-45" />
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="hover:text-[#9AD953] underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
