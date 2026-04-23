
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./HeroSection";

export default function Hero() {
  const cards = [
    {
      title: "Child Education",
      desc: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
    },
    {
      title: "Medical Treatment",
      desc: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
    },
    {
      title: "Pure Drinking Water",
      desc: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
    },
  ];
  
  return (
    <>
    <section className="bg-gray-50 ">
      <HeroSection/>
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10 mt-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-xl md:text-5xl font-bold text-blue-900 leading-tight">
            We Rise By Lifting Others
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-gray-700 font-semibold">
            Welcome Charity
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Trust Foundation helps children from underprivileged backgrounds
            get free education in nearby schools and localities. We support
            their primary education by providing learning materials, uniforms,
            and meals. We also offer skill and vocational training to women in
            distress, enabling them to earn a livelihood and support their families.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Donate Now
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <Image
          src="/image/charity.jpg"
            alt="Charity Image"
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>



    
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP CENTER HEADING */}
        <div className="text-center mb-12">
          <p className="text-black font-bold text-2xl">
            Trust Foundation Initiatives
          </p>

          <p className="md:text-xl  text-gray-400 mt-3 max-w-5xl mx-auto text-sm">
            Founded in 2015, Trust Foundation is a grassroots movement of young changemakers dedicated to empowering underprivileged communities through education, healthcare, and sustainable development programs across India's most vulnerable regions.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* LEFT SIDE */}
          <div className="md:w-1/2">

            <h3 className="text-xl font-semibold text-gray-800">
              About Us
            </h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Your Support is Really Powerful. We care for children, protect their welfare, and prepare them for the future.
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            </p>

            <p className="text-gray-600 mt-3 leading-relaxed">
              We provide education support, healthcare assistance, and skill development programs to uplift communities and create sustainable futures.
            </p>

            {/* CARDS */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-gray-800">
                  CERTIFIED COMPANY
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Aenean sollicitudin, lorem quis bibendum auctor.
                </p>
              </div>

              <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-gray-800">
                  OUR EXPERIENCE
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Aenean sollicitudin, lorem quis bibendum auctor.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="md:w-1/2">
            <Image
              src="/image/boy.jpg"
              alt="Trust Foundation Illustration"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section> 


    
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/image/volunteer.jpg"
                alt="Foundation Image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">

            <h2 className="text-xl md:text-4xl font-bold text-green-600 mb-4">
              Our Foundation
            </h2>

            <p className="text-2xl text-black font-semibold mb-4">
              Your Support is Really Powerful.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We care for children, protect their welfare, and prepare them for the future.
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
              nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
              a sit amet mauris. Morbi accumsan ipsum velit.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We care for children, protect their welfare, and prepare them for the future.
              Aenean sollicitudin, lorem quis bibendum auctor.
            </p>

            {/* Features */}
            <div className="space-y-5 mb-8">

              <div>
                <p className="font-semibold text-gray-900">
                  EXPERT VOLUNTEERS
                </p>
                <p className="text-gray-600">
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  OUR GOAL
                </p>
                <p className="text-gray-600">
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.
                </p>
              </div>

            </div>

            {/* Button */}
            <Link
              href="#"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Donate Now
            </Link>

          </div>
        </div>

      </div>
    </section>


    
  

 
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What We Do
          </h2>

          <p className="text-blue-600 font-semibold mt-2">
            Learn More What We Do And Get Involved
          </p>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            We care for children, protect their welfare, and prepare them for the future.
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-5 text-blue-600 font-medium hover:text-blue-800 transition">
                Read More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
 
  
  
    </>
  );
}
  