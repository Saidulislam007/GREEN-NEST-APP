import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const PlantDetails = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [form, setForm] = useState({ name: "", email: "" });

    // ✅ fetch ডেটা useEffect এর মধ্যে রাখো
    useEffect(() => {
        fetch("/data/plants.json")
            .then((res) => res.json())
            .then((data) => {
                const selected = data.find((p) => p.id === parseInt(id));
                setPlant(selected);
            })
            .catch((err) => console.error("Error fetching data:", err));
    }, [id]); // ✅ এই dependency ঠিক আছে

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Consultation booked successfully!");
        setForm({ name: "", email: "" });
    };

    if (!plant)
        return <p className="text-center mt-10 text-gray-600">Loading...</p>;

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-6">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-6 grid md:grid-cols-2 gap-10">
                {/* Image */}
                <img
                    src={plant.img}
                    alt={plant.treeName}
                    className="w-full h-96 object-cover rounded-lg"
                />

                {/* Details */}
                <div>
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">
                        {plant.treeName}
                    </h2>
                    <p className="text-gray-600 mb-4">{plant.description}</p>
                    <p className="text-green-700 font-semibold mb-2">
                        💰 Price: ${plant.treePrice}
                    </p>
                    <p className="text-green-700 font-semibold mb-2">
                        ⭐ Rating: {plant.rating}
                    </p>
                    <p className="text-green-700 font-semibold mb-6">
                        📦 In Stock: {plant.stock}
                    </p>

                    {/* Consultation Form */}
                    <div className="bg-green-50 p-4 rounded-lg shadow-inner">
                        <h3 className="text-xl font-semibold text-green-800 mb-4">
                            Book a Consultation 🌿
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="input input-bordered w-full"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="input input-bordered w-full"
                            />
                            <button type="submit" className="btn btn-success w-full">
                                Book Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;
