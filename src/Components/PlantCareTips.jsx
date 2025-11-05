import React from "react";

const careTips = [
  {
    id: 1,
    icon: "💧",
    title: "Premium Watering Guide",
    description:
      "Check soil moisture 2 inches deep. Water when dry, but avoid overwatering. Most plants prefer being slightly dry rather than constantly wet."
  },
  {
    id: 2,
    icon: "🌞",
    title: "Perfect Light Conditions",
    description:
      "Bright indirect light is ideal for most houseplants. South-facing windows provide strong light, while north-facing offer gentle illumination."
  },
  {
    id: 3,
    icon: "🌱",
    title: "Professional Fertilizing",
    description:
      "Feed plants during growing season (spring/summer) with balanced fertilizer. Reduce feeding in fall/winter when growth slows down."
  }
];

export default function PlantCareTips() {
  return (
    <section className="py-16 my-30 bg-green-50 text-center">
      {/* Header */}
      <h2 className="text-3xl font-bold text-green-700 mb-12 flex items-center justify-center gap-2">
        <span>🌼</span> Essential Plant Care Tips
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6
      ">
        {careTips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white shadow-md  hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-8"
          >
            <div className="text-4xl mb-4">{tip.icon}</div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              {tip.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
