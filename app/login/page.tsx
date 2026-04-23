
"use client";

import { useState } from "react";
import Link from "next/link";

export default function page() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    // Replace with real auth logic
    alert("Login successful!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white shadow-lg rounded-2xl overflow-hidden">

        {/* LEFT SIDE (INFO / IMAGE) */}
        <div className="hidden md:flex flex-col justify-center bg-blue-900 text-white p-10">
          <h2 className="text-3xl font-bold mb-4">
            Welcome Back
          </h2>
          <p className="text-blue-200">
            Login to manage your donations, projects, and contribute to our mission.
          </p>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="p-8 md:p-10">

          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Login to Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* PASSWORD */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* OPTIONS */}
            <div className="flex justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <Link href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>

          </form>

          {/* FOOTER */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>

        </div>
      </div>
    </section>
  );
}