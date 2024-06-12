import React from "react";
import { resturantsNearMe } from "../data/BestData";

export default function BestPlaceTop() {
  return (
    <div className="max-w-[1200px] mx-auto my-[40px]">
      <div className="text-[25px] font-bold my-3">
        Explore Every Restaurants Near Me
      </div>
      <div className="md:grid grid-cols-2 gap-3">
        {resturantsNearMe.map((data, index) => (
          <div
            key={index}
            className="text-black cursor-pointer border border-solid border-[#3636362d] rounded-xl p-3 m-1 flex items-center justify-center"
          >
            {data.title}
          </div>
        ))}
      </div>
    </div>
  );
}
