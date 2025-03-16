import Image from "next/image";
import React from "react";

function Hero() {
  const scrollToCars = () => {
    const element = document.getElementById("cars");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-600 text-white py-20 px-5 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[50px] md:text-[70px] font-extrabold leading-tight">
          Drive in Style with Premium Rentals
        </h1>
        <p className="text-[18px] md:text-[22px] mt-4">
          Choose your dream car, book in seconds, and hit the road effortlessly.  
        </p>
        <button
          onClick={scrollToCars}
          className="p-3 mt-8 bg-white text-yellow-700 font-semibold px-6 rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          Discover Cars
        </button>
      </div>
      <div className="relative mt-10">
        <Image
          src="/Hero1.PNG"
          alt="hero"
          width={500}
          height={300}
          className="relative rounded-3xl object-cover  mx-auto"
        />
      </div>
    </div>
  );
}

export default Hero;

