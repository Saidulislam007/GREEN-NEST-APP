import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopRatedPlants() {
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Peace Lily",
        price: "$25",
        rating: 4.8,
        description: "Perfect for bright, indirect light 🌸",
        stock: 12,
        image: "https://i.ibb.co.com/LzckT0Rn/Pngtree-3d-peace-lily-plant-with-19386349.png"
      },
      {
        id: 2,
        name: "Snake Plant",
        price: "$18",
        rating: 4.9,
        description: "Hardy and low maintenance 🌵",
        stock: 8,
        image: "https://i.ibb.co.com/1t7p90Tz/Pngtree-sansevieria-laurentii-plant-with-pot-6948860.png"
      },
      {
        id: 3,
        name: "ZZ Plant",
        price: "$22",
        rating: 4.7,
        description: "Thrives in low light 💚",
        stock: 10,
        image: "https://i.ibb.co.com/1t7p90Tz/Pngtree-sansevieria-laurentii-plant-with-pot-6948860.png"
      },
      {
        id: 4,
        name: "Spider Plant",
        price: "$20",
        rating: 4.6,
        description: "Air purifying favorite 🌿",
        stock: 14,
        image: "https://i.ibb.co.com/LzckT0Rn/Pngtree-3d-peace-lily-plant-with-19386349.png"
      }
    ];
    setPlants(data);
  }, []);

  return (
    <section className="py-12 mt-30 bg-green-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-700">🌿 Top Rated Indoor Plants</h2>
        <p className="text-gray-600 mt-2">Bring nature into your home with our best-loved plants.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <figure>
              <img src={plant.image} alt={plant.name} className="h-[250px] w-full object-cover" />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-xl font-semibold text-green-700">{plant.name}</h3>
              <p className="text-gray-600">{plant.price}</p>
              <p className="text-yellow-500">⭐ {plant.rating}</p>
              <div className="card-actions justify-center mt-2">
                <button
                  onClick={() => navigate(`/plant/${plant.id}`)}
                  className="btn btn-success text-white"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
