

"use client";

import React, { useState } from "react";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      icon: "⚡",
      price: billingCycle === "monthly" ? "0" : "0",
      desc: "Perfect for individuals and small projects.",
      features: ["3 Projects", "Basic Security", "Community Support", "1GB Storage"],
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      icon: "🛡️",
      price: billingCycle === "monthly" ? "49" : "39",
      desc: "Best for startups and growing teams.",
      features: ["Unlimited Projects", "Priority Support", "SOC2", "10GB Storage"],
      buttonText: "Start Free Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      icon: "🏢",
      price: "Custom",
      desc: "Advanced security for enterprises.",
      features: ["Unlimited Everything", "Dedicated Manager", "Custom SLA", "SSO"],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* HEADER */}
      <section className="pt-20 pb-12 px-4 md:px-6 text-center bg-linear-to-b from-gray-50 to-white">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mt-4">
          Simple pricing for{" "}
          <span className="text-blue-600">everyone</span>
        </h1>

        <p className="max-w-md mx-auto text-gray-600 text-sm md:text-lg mt-4">
          No hidden fees. Scale as you grow.
        </p>

        {/* TOGGLE */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className={billingCycle === "monthly" ? "text-black font-semibold text-sm" : "text-gray-400 text-sm"}>
            Monthly
          </span>

          <button
            onClick={() =>
              setBillingCycle(
                billingCycle === "monthly" ? "yearly" : "monthly"
              )
            }
            className="w-12 h-7 bg-gray-900 rounded-full p-1 flex items-center"
          >
            <div
              className={`w-5 h-5 bg-blue-500 rounded-full transition ${
                billingCycle === "yearly" ? "translate-x-5" : ""
              }`}
            />
          </button>

          <span className={billingCycle === "yearly" ? "text-black font-semibold text-sm" : "text-gray-400 text-sm"}>
            Yearly
          </span>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-6 md:p-8 rounded-2xl border transition ${
                plan.isPopular
                  ? "border-blue-600 shadow-lg md:scale-105"
                  : "border-gray-200 hover:shadow-md"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-bold">
                  Popular
                </div>
              )}

              <div className="mb-4">
                <div className="text-2xl mb-2">{plan.icon}</div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-gray-500 text-xs mt-1">{plan.desc}</p>
              </div>

              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-black">
                  {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                </span>
              </div>

              <div className="space-y-2 `flex-grow`">
                {plan.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-xs md:text-sm text-gray-600">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full py-2.5 rounded-lg bg-gray-900 text-white text-sm hover:bg-black">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-1 md:mt-6 py-12 md:py-16 px-4 md:px-6 bg-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8">
            FAQs
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Can I change plans later?",
                a: "Yes, anytime.",
              },
              {
                q: "Free trial available?",
                a: "Yes, 14 days trial.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 md:p-5 rounded-xl border shadow-sm"
              >
                <h4 className="font-semibold text-sm md:text-base">
                  {item.q}
                </h4>
                <p className="text-gray-500 text-xs md:text-sm mt-1">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}