import React, { useEffect, useRef, useState } from "react";
import restaurantData from "../data/Resturantdata";
import OnlineDeliveryData from "../data/OnlineDeliveryData";
import Card from "./Card";

export default function OnlineDelivery() {
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to update the screen size state
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto" ref={componentRef}>
      <div className="flex my-5 items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurant with online food in Agra
        </div>
      </div>
      <div
      className={
        isAtTop ? "fixed top-0 z-[9999] bg-white w-full left-0 shadow-sm" : ""
      }
    >
      <div className="max-w-[1200px] mx-auto flex my-4 gap-3 flex-wrap">
        {OnlineDeliveryData.map((data, index) => (
          <div
            key={index}
            className={`p-3 border border-solid border-[#3636362d] rounded-[30px] shadow-sm ${
              isSmallScreen && index >= 3 ? 'hidden sm:block' : ''
            }`}
          >
            {data.title}
          </div>
        ))}
      </div>
    </div>
      <div className="md:grid grid-cols-4 gap-3">
        {restaurantData.map((data, index) => {
          return <Card {...data} key={index} />;
        })}
      </div>
    </div>
  );
}
