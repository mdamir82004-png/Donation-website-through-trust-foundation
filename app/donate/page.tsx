
"use client";
import { useState } from "react";

export default function Page() {    
  const [amount, setAmount] = useState("");   
  const [donationType, setDonationType] = useState("One-time");    

  const presetAmounts = [500, 1000, 2000];

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"> 

        {/* LEFT SECTION */}
        <div className="bg-white p-6 rounded-2xl shadow flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-3">Trust Foundation</h1>
          <p className="text-lg text-gray-600 mb-6">
            Your generosity transforms lives
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Education for underprivileged children</li>
            <li>✔ Medical support for families</li>
            <li>✔ Food distribution programs</li>
          </ul>
        </div>

        {/* RIGHT SECTION - FORM */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>

          <form className="space-y-4">

            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg"
            />

            

            {/* Amount */}
            <div>
              <p className="font-medium mb-2">Donation Amount (₹) *</p>  

              <div className="flex flex-wrap gap-2 mb-3">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setAmount(amt)}
                    className={`px-4 py-2 border rounded-lg cursor-pointer ${   
                      amount === amt
                        ? "bg-blue-600 text-white"
                        : "hover:bg-blue-100"
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>

              <input
                type="number"
                placeholder="Enter custom amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Your Message (Optional)"
              rows="3"
              className="w-full p-3 border rounded-lg"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Donate Now
            </button>
          </form>
        </div>

      </div>
    </div>
    </>
  );
}