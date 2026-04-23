
"use client";

import Image from "next/image";

export default function page() {
  const projects = [
    {
      title: "Child Education",
      desc: "Providing free education, books, and meals to underprivileged children.",
      img: "/image/charity.jpg",
    },
    {
      title: "Healthcare Support",
      desc: "Free medical camps and treatment for rural communities.",
      img: "/image/boy.jpg",
    },
    {
      title: "Clean Water",
      desc: "Ensuring access to safe drinking water in villages.",
      img: "/image/volunteer.jpg",
    },
    {
      title: "Women Empowerment",
      desc: "Skill training programs for women to become financially independent.",
      img: "/image/charity.jpg",
    },
    {
      title: "Food Distribution",
      desc: "Providing meals to homeless and needy people.",
      img: "/image/boy.jpg",
    },
    {
      title: "Disaster Relief",
      desc: "Helping communities affected by floods and natural disasters.",
      img: "/image/volunteer.jpg",
    },
  ];

  return (
    <>
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
            Our Projects
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are working across multiple areas to uplift underprivileged communities and create a better future.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[200px]">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.desc}
                </p>

                <button className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition">
                  Read More →
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>

    {/* IMPACT SECTION */}
<section className="bg-gray-500 text-white py-16 mt-8">
  <div className="max-w-5xl mx-auto px-4 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      Our Impact
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      <div>
        <h3 className="text-3xl font-bold">5000+</h3>
        <p className="text-gray-300 mt-2">Children Educated</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">120+</h3>
        <p className="text-gray-300 mt-2">Medical Camps</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">300+</h3>
        <p className="text-gray-300 mt-2">Villages Served</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">1000+</h3>
        <p className="text-gray-300 mt-2">Women Empowered</p>
      </div>

    </div>

  </div>
</section>
    </>
  );
}