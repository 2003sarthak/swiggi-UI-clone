import React, { useState } from "react";
import { BestCuisinesData } from "../data/BestData";

export default function BestPlaceTop() {
  const [showMore, setShowMore] = useState(false);

  // Number of items to show initially (3 rows * 4 columns)
  const itemsToShowInitially = 3 * 4;

  // Slice the data based on the showMore state
  const itemsToShow = showMore
    ? BestCuisinesData
    : BestCuisinesData.slice(0, itemsToShowInitially);

  const handleShowMore = () => {
    setShowMore(true);
  };
  return (
    <div className="max-w-[1200px] mx-auto my-[40px]">
      <div className="text-[25px] font-bold my-3">
      Best Cuisines Near Me
      </div>
      <div className="md:grid grid-cols-4 gap-3">
        {itemsToShow.map((data, index) => (
          <div
            key={index}
            className="text-black cursor-pointer border border-solid border-[#3636362d] rounded-xl p-3 m-1 flex items-center justify-center"
          >
            {data.title}
          </div>
        ))}
        {!showMore && BestCuisinesData.length > itemsToShowInitially && (
          <div
            className="text-black cursor-pointer border border-solid border-[#3636362d] rounded-xl p-3 m-1 flex items-center justify-center"
            onClick={handleShowMore}
          >
            Show More
          </div>
        )}
      </div>
    </div>
  );
}