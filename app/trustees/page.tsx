
"use client";

import Image from "next/image";

export default function TrusteesPage() {
    const trustees = [
        {
            name: "Ravi Sharma",
            role: "Founder & Chairman",
            img: "/image/rohit.jpg",
        },
        {
            name: "Anita Verma",
            role: "Managing Trustee",
            img: "/image/anita.jpg",
        },
        {
            name: "Suresh Gupta",
            role: "Treasurer",
            img: "/image/gupta.jpg",
        },
        {
            name: "Neha Singh",
            role: "Program Director",
            img: "/image/neha.jpg",
        },
    ];

    return (
        <>
            <section className="bg-gray-50 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4">

                    {/* HEADER */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
                            Our Trustees
                        </h1>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Meet the dedicated individuals guiding our mission and ensuring transparency and impact.
                        </p>
                    </div>

                    {/* TRUSTEE GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {trustees.map((person, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden text-center"
                            >
                                {/* IMAGE */}
                                <div className="relative w-full h-[250px]">
                                    <Image
                                        src={person.img}
                                        alt={person.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {person.name}
                                    </h3>
                                    <p className="text-blue-600 text-sm mt-1">
                                        {person.role}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* TRUSTEES MESSAGE */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Message from Our Trustees
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        Our mission is to uplift underprivileged communities by providing access
                        to education, healthcare, and sustainable opportunities. We believe in
                        transparency, dedication, and creating long-term impact.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        Together with our volunteers and supporters, we strive to build a better
                        future for every individual in need.
                    </p>

                </div>
            </section>

            {/* OUR VALUES */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4">

                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        Our Core Values
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">Integrity</h3>
                            <p className="text-gray-600 text-sm">
                                We maintain transparency and honesty in all our actions.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">Compassion</h3>
                            <p className="text-gray-600 text-sm">
                                We care deeply for the well-being of every individual.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">Empowerment</h3>
                            <p className="text-gray-600 text-sm">
                                We enable people to build better futures independently.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
                            <p className="text-gray-600 text-sm">
                                We focus on long-term solutions for lasting impact.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}