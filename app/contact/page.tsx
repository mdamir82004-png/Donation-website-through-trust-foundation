
"use client";

import { useState } from "react";

export default function page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
  };

  return (
    <>
      {/* HEADER */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-blue-200">
          We'd love to hear from you. Reach out to support or collaborate.
        </p>
      </section>

      {/* MAIN */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

          {/* LEFT: CONTACT INFO */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              You can contact us for donations, volunteering, or partnerships.
            </p>

            <div className="space-y-4 text-gray-700">
              <p><strong>📍 Address:</strong> Delhi, India</p>
              <p><strong>📞 Phone:</strong> +91 9876543210</p>
              <p><strong>📧 Email:</strong> trustfoundation@gmail.com</p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Send Message
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full h-[300px] rounded-lg overflow-hidden shadow">
            <iframe
              src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Together We Can Make a Difference
        </h2>
        <p className="mb-6 text-green-100">
          Join us as a volunteer or support our mission.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Become a Volunteer
        </button>
      </section>
    </>
  );
}