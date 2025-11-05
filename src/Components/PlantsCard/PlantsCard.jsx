import React from "react";
import { Link } from "react-router-dom";

const PlantsCard = ({ plants }) => {
    return (

        <div className=" bg-white rounded-2xl shadow-md  hover:shadow-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden ">
            {/* Image */}
            <figure className="overflow-hidden">
                <img
                    src={plants.img}
                    alt={plants.treeName}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            </figure>

            {/* Content */}
            <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-green-700 mb-2">
                    {plants.treeName}
                </h2>
                <p className="text-gray-600 text-sm mb-3 italic">
                    {plants.description?.slice(0, 80)}...
                </p>

                <div className="justify-center items-center gap-6 mb-4">
                    <p className="text-green-800 font-medium">
                        🌿 Rating:{" "}
                        <span className="text-yellow-500 font-semibold">
                            {plants.rating}
                        </span>
                    </p>
                    <p className="text-green-800 font-medium">
                        💰 Price:{" "}
                        <span className="text-green-700 font-bold">
                            ${plants.treePrice}
                        </span>
                    </p>
                    <p className="text-green-700 font-bold">
                        Provider Name: {plants.providerName}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-3">
                    <Link to={`/plant/${plants.id}`}>
                        <button className="btn btn-success btn-sm">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlantsCard;
