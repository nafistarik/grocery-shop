"use client";
import { useState } from "react";
export default function Register({ setModalState }) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleRegister = async (e) => {
      e.preventDefault();
      
      // Input Validation
      if (!fullName || !email || !password) {
        setError("All fields are required!");
        return;
      }
  
      try {
        // API Call
        const response = await fetch(
          "https://api-fresh-harvest.code-commando.com/api/v1/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ fullName, email, password }),
          }
        );
  
        const data = await response.json();
  
        if (response.ok) {
          setError("");
          alert("Registration successful! Please log in.");
          setModalState("login");
          localStorage.setItem("userToken", data.data.token || "");
        } else {
          setError(data.message || "Registration failed!");
        }
      } catch (err) {
        setError("An error occurred. Please try again.");
      }
    };
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
          <button className="absolute top-4 right-8 text-gray-500 text-3xl"  onClick={() => setModalState("closed")}>
            &times;
          </button>
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Register</h2>
          </div>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="full-name">
                Full Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                id="full-name"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
            >
              Register
            </button>
          </form>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300"/>
            <span className="mx-2 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300"/>
        </div>
        <div className="text-center">
            <p className="text-gray-700">Already have an account? <button class="text-orange-500 font-semibold" onClick={() => setModalState("login")}>Login</button></p>
        </div>
        </div>
      </div>
    );
  }