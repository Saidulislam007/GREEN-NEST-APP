import { use } from "react";
import PlantsCard from "./PlantsCard/PlantsCard";


const FeaturedPlants = ({ plantsPromise }) => {
  const plantsData = use(plantsPromise)


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {
          plantsData.map(plants => <PlantsCard key={plants.treeName} plants={plants}></PlantsCard>)
        }
      </div>
    </div>

  );
};

export default FeaturedPlants;
