import Image from "next/image";

export default function Page() {

  const objectives = [
    {
      id: 1,
      title: "Agricultural Development",
      image: "/image/agricul.jpg",
      desc: "Development of agricultural land in hilly areas through provision of assistance for bunding, leveling and shaping of land, fencing and reclamation, as well as dissemination of farming technology. Reclamation of land, soil conservation and forestation."
    },
    {
      id: 2,
      title: "Animal's welfare",
      image: "/image/welfare.jpg",
      desc: "Promoting soil conservation, forestation, and sustainable environmental practices to improve land productivity and ecological balance."
    },
    {
        id:3,
        title:"Awareness Generation",
        image:"/image/awaren.jpg",
        desc:"Creating awareness among communities about sustainable agricultural practices, environmental conservation, health, education, and social development through workshops, campaigns, and training programs."
    },
    {
        id:4,
        title:"Appropriate technology",
        image:"/image/appropriate.jpg",
        desc:"Promoting the use of appropriate, affordable, and sustainable technologies suited to local needs, especially in rural and hilly areas. This includes improved farming tools, water management systems, renewable energy solutions, and small-scale rural innovations to enhance productivity and livelihoods."

    },
    {
        id:5,
        title:"Bio Diversity",
        image:"/image/biodiversity.jpg",
        desc:"Promoting the conservation and sustainable management of biodiversity by protecting natural habitats, preserving native species, and encouraging eco-friendly practices. Supporting community participation in biodiversity conservation and raising awareness about the importance of ecological balance."
    }

  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-green-500">
            Main Objectives Of The Trust
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {objectives.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition duration-300 p-5"
            >

              {/* Image */}
              <div className="w-full md:w-4/12">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-[180px] md:h-[200px] object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-8/12">
                <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-2">
                  {item.id}. {item.title}
                </h3>

                <p className="text-gray-600 text-xl leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}