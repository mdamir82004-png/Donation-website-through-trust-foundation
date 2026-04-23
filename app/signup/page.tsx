
"use client";

import { useState } from "react";
import Link from "next/link";

export default function page() {   
  const [form, setForm] = useState({  
    name: "",
    email: "",
    password: "",
    confirmPassword: "",   
  });   

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) { 
      alert("Passwords do not match!");
      return;
    }

    console.log(form);

    // Replace with real signup logic
    alert("Account created successfully!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white shadow-lg rounded-2xl overflow-hidden">

        {/* LEFT SIDE */}  
        <div className="hidden md:flex flex-col justify-center bg-green-600 text-white p-10">  
          <h2 className="text-3xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-green-100">   
            Create an account to support our initiatives, donate, and become part of our community.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-8 md:p-10">

          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">  
            Create an Account
          </h2>  

          <form onSubmit={handleSubmit} className="space-y-4">     

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* PASSWORD */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* CONFIRM PASSWORD */}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
            >
              Sign Up
            </button>

          </form>

          {/* LOGIN LINK */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600 hover:underline">
              Login
            </Link>
          </p>

        </div>
      </div>
    </section>
  );
}   