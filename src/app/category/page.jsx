'use client'
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import PickUpDropOff from "../components/PickUpDropOff/PickUpDropOff";
import CategoryCars from "../components/Cars/CategoryCars";
import ProductCard from "../components/Products/ProductCard";

// checking add comment 
const CategoryCar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let save = "save";

  return (
    <div className="min-h-screen flex flex-col">
      <button
        className="p-2 bg-blue-500 text-white md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        Toggle Sidebar
      </button>
      <div className="flex">
        <Sidebar className={`w-60 bg-gray-200 ${isSidebarOpen ? "block" : "hidden"} md:block`} />
        <div className="flex flex-col w-full ">
          <PickUpDropOff />

          <div className="">
           <CategoryCars />
           {/* <ProductCard/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCar;
