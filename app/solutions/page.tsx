
import React from 'react';

export default function SolutionsPage() {
    const solutions = [
        {
            title: "Enterprise Security",
            description: "Advanced encryption and threat detection systems designed for large-scale operations.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            color: "bg-blue-500",
        },
        {
            title: "Identity Verification",
            description: "Seamless KYC and biometric authentication to ensure user trust and compliance.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
            ),
            color: "bg-indigo-500",
        },
        {
            title: "Data Compliance",
            description: "Automated auditing tools to keep your business GDPR, SOC2, and HIPAA compliant.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            color: "bg-purple-500",
        },
    ];

    return (
       
        <main className="min-h-screen bg-white">
            {/* Header Section - PB badha diya taaki background niche tak jaye */}
            <section className="pt-32 pb-40 bg-gray-50/80">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">
                        Tailored <span className="text-blue-600">Trust Solutions</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-500">
                        We help modern businesses build integrity through technology. Choose the right solution to protect your assets and users.
                    </p>
                </div>
            </section>

            {/* Solutions Grid - Negative Margin use kiya hai upar laane ke liye */}
            <section className="pb-24 -mt-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {solutions.map((item, i) => (
                            <div key={i} className="group p-8 lg:p-10 rounded-[2.5rem] border border-gray-100 bg-white shadow-xl shadow-gray-200/50 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                                <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed mb-8">
                                    {item.description}
                                </p>
                                <button className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all underline underline-offset-4 decoration-blue-100 hover:decoration-blue-600">
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">How We Implement Trust</h2>
                        <p className="text-gray-400">Our 3-step deployment process for enterprise solutions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2"></div>

                        {[
                            { step: "01", title: "Assessment", desc: "We analyze your current security gaps and compliance needs." },
                            { step: "02", title: "Integration", desc: "Our APIs seamlessly blend into your existing tech stack." },
                            { step: "03", title: "Monitoring", desc: "24/7 automated checks to maintain your high-security status." }
                        ].map((item, i) => (
                            <div key={i} className="relative bg-gray-800/40 p-10 `rounded-[2rem]` border border-gray-700/50 backdrop-blur-md">
                                <span className="text-5xl font-black text-blue-500/10 absolute top-6 right-8">{item.step}</span>
                                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 max-w-6xl mx-auto px-4 text-center">
                <div className="bg-linear-to-br from-blue-400 to-blue-400 rounded-xl p-12 md:p-24 shadow-xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                    <h2 className="text-xl md:text-4xl font-black text-white mb-10 leading-tight">Ready to secure <br /> your future?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-5">
                        <button className="px-12 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:shadow-xl transition-all active:scale-95">
                            Talk to Sales
                        </button>
                        <button className="px-12 py-5 bg-blue-800/40 text-white border border-white/20 font-bold rounded-2xl hover:bg-blue-800/60 transition-all active:scale-95">
                            Developer Docs
                        </button>
                    </div>
                </div>
            </section>
        </main>

    );
}

