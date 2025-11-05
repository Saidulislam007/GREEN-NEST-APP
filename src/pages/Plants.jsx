import React, { Suspense } from "react";
import FeaturedPlants from "../Components/FeaturedPlants";
const fetchPlants = () => fetch("/data/plants.json").then(res => res.json());
const plantsPromise = fetchPlants();

const Plants = () => {
    return (
        <div>
            <div className="text-center my-20">
                <h1 className="text-4xl font-bold text-green-600 mb-6">Our Plants Collection 🌿</h1>
                <p className="text-lg text-gray-600">
                    Explore our wide range of indoor and outdoor plants. Coming soon!
                </p>
            </div>
            <div>
                <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
                    <FeaturedPlants plantsPromise={plantsPromise} />
                </Suspense>
            </div>
        </div>
    );
};

export default Plants;
