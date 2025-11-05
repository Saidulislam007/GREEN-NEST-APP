import React from "react";

const experts = [
  {
    name: "Sarah Johnson",
    role: "🌱 Plant Care Specialist",
    img: "https://i.ibb.co.com/nHPJHVN/images.jpg",
    description:
      "10+ years helping urban dwellers create thriving indoor gardens with personalized care advice and premium plant selections.",
  },
  {
    name: "Michael Chen",
    role: "💨 Air Quality Expert",
    img: "https://i.ibb.co.com/VWnSpJ6n/1640284151071.jpg",
    description:
      "Specialist in air-purifying plants and their health benefits. Helps clients improve indoor air quality naturally with expert recommendations.",
  },
  {
    name: "Emma Rodriguez",
    role: "🏡 Interior Plant Designer",
    img: "https://i.ibb.co.com/4wwzCtrV/Emma-Rodriguez-1639580962.jpg",
    description:
      "Expert in creating stunning plant arrangements that complement any interior design style and space with professional aesthetics.",
  },
  {
    name: "David Kim",
    role: "🌿 Rare Plant Collector",
    img: "https://i.ibb.co.com/JjPNnwKY/photocache-157679.jpg",
    description:
      "Specializes in rare and exotic houseplants. Provides expert guidance on collecting and caring for unique premium specimens.",
  },
];

const GreenExperts = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-12 flex justify-center items-center gap-3">
        <span className="text-3xl">🌟</span> Meet Our Premium Green Experts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative flex justify-center mb-4">
              <div className="absolute top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-200 to-green-100 w-40 h-24 rounded-full"></div>
              <img
                src={expert.img}
                alt={expert.name}
                className="relative z-10 w-24 h-24 rounded-full object-cover border-4 border-green-300"
              />
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-1">
              {expert.name}
            </h3>
            <p className="bg-green-50 inline-block px-3 py-1 rounded-full text-green-600 text-sm font-medium mb-3">
              {expert.role}
            </p>
            <p className="text-gray-600 text-sm">{expert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreenExperts;
