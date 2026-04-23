import Image from "next/image";

export default function page() {
  const cards = [
    {
      title: "Our Mission",
      desc: "To provide education, healthcare, and opportunities to underprivileged communities while promoting sustainable development and equality.",
    },
    {
      title: "Our Values",
      desc: "Integrity, Compassion, Innovation, Collaboration",
    },
    {
      title: "Our Vision",
      desc: "A world where every individual has access to basic necessities and opportunities to thrive, creating positive change.",
    },
  ];

  const team = [
    {
      name: "John Doe",
      role: "Founder",
    },
    {
      name: "Jane Smith",
      role: "Director",
    },
    {
      name: "Mike Johnson",
      role: "Program Manager",
    },
  ];

  return (
    <>
    <section className="bg-white">

      {/* HERO SECTION */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-green-600">
            About Trust Foundation
          </h1>

          <p className="text-black font-medium mt-4 text-lg">
            Empowering communities, transforming lives, and building a sustainable future with passion and purpose.
          </p>

        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {cards.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

    </section>

   
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/image/usc.jpg"
                alt="Trust Foundation Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 mb-30">


            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Trust Foundation is a trust registered under the Indian Trust Act 1882
              vide registration no. 1987.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Trust Foundation is a grass root level organization formed by a group
              of youngsters who want to uplift underprivileged communities, especially
              in education and health. We work in slum areas across India to raise
              awareness about rights, reduce poverty, and support families with food,
              education, and basic needs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              We provide free education support, school materials, uniforms, and meals
              to children. We also offer skill and vocational training to women in distress
              to help them earn a livelihood.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our mission also includes adult education to help individuals improve
              their livelihood opportunities and build a better future.
            </p>

          </div>

        </div>
      </div>
    </section>

    
  
  
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-600">Our Team</h2>
          <p className="text-gray-500 mt-2">
            Meet the people behind our success
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}  
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
            >
              {/* Avatar placeholder */}  
              <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-600 mb-4">
                {member.name.charAt(0)}
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-green-500 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  
  </>
  );
}