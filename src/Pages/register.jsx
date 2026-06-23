import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/accuel");
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }
    } catch {
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-white">MY BLOG</h1>

          {/* Links */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex justify-center mt-10">
        <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border p-3 rounded-lg"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg"
            >
              Register
            </button>
          </form>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Register;
