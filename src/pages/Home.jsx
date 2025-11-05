import React, { Suspense } from "react";
import HeroSection from "../Components/HeroSection";
import FeaturedPlants from "../Components/FeaturedPlants";
import TopRatedPlants from "../Components/TopRatedPlants";
import PlantCareTips from "../Components/PlantCareTips";
import GreenExperts from "../Components/GreenExperts";

const fetchPlants = () => fetch("/data/plants.json").then(res => res.json());
const plantsPromise = fetchPlants();

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopRatedPlants></TopRatedPlants>
      
        <section className="bg-green-50">
          <h2 className="text-3xl font-semibold text-center py-10 mt-30 text-green-700">
                <span>🌿</span>Featured Plant
              </h2>

      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
        <FeaturedPlants plantsPromise={plantsPromise}  />
      </Suspense>
        </section>
      
      <PlantCareTips></PlantCareTips>
      <GreenExperts></GreenExperts>
    </div>
  );
};

export default Home;
