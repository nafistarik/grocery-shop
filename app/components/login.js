"use client";
import { useState } from "react";

export default function Login( {setModalState}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    try {
      const response = await fetch(
        "https://api-fresh-harvest.code-commando.com/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const token = data.data.token;
        localStorage.setItem("authToken", token); // Store token
        alert("Login successful! Welcome to Fresh Harvests!");
        setModalState("closed");
        setError("");
      } else {
        setError(data.message || "Login failed!");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
      <button className="absolute top-4 right-8 text-gray-500 text-3xl" onClick={() => setModalState("closed")}>
            &times;
          </button>
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300"/>
            <span className="mx-2 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300"/>
        </div>
        <div className="text-center">
            <p className="text-gray-700">Don’t have an account? <button class="text-orange-500 font-semibold" onClick={() => setModalState("register")}>Register</button></p>
        </div>
      </div>
    </div>
  );
}