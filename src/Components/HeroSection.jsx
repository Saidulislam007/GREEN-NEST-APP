import { useState } from "react";

const HeroSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
    "https://i.ibb.co.com/g8nspMQ/37108.jpg",
    "https://i.ibb.co.com/Gv2hQ1Hf/planting-trees-as-part-reforestation-process.jpg",
    "https://i.ibb.co.com/TMD1GZ1S/volunteers-little-kid-planting-tree-covering-hole-ground.jpg",
  ];

  const buttonColors = ["bg-green-500", "bg-yellow-400", "bg-pink-400", "bg-blue-400"];
  const [bgImage, setBgImage] = useState(images[0]);

  return (
    <div className="relative">
      {/* 🌼 Hero Section */}
      <div
        className="hero min-h-[75vh] bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="hero-overlay bg-white/60"></div>
        <div className="hero-content flex-col lg:flex-row-reverse relative z-10">
          <img
            src="https://i.ibb.co.com/d4F0NP1M/360-F-336613870-0-Qzialb-Gfpej-HED59twze09n-Pmj-Fh-ANY.jpg "
            alt="Indoor Plant"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-green-800 drop-shadow-lg">
              Bring Nature Into Your Home
            </h1>
            <p className="py-6 text-lg text-gray-800 font-medium">
              Discover healthy indoor plants, expert care guides, and a greener way to live.
              Let's make your space bloom — naturally 🌿
            </p>
          </div>
        </div>

        {/* 🌿 Dotted Image Change Buttons */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
          {images.map((img, index) => (
            <button
              key={index}
              className={`w-5 h-5 rounded-full border-2 border-white ${buttonColors[index]} transition-transform hover:scale-125`}
              onClick={() => setBgImage(img)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
