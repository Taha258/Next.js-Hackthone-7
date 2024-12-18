import Hero from "./components/Hero/Hero";
import PickUpDropOff from "./components/PickUpDropOff/PickUpDropOff";

import Cars from "./components/Cars/PopularCars";
import RecommendedCars from "./components/Cars/RecommendedCars";


export default function Home() {
  return (
    <>
      <Hero />
      <PickUpDropOff />
      <Cars />
      <RecommendedCars />
    </>
  );
}
