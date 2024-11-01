import React from "react";
import "./Hero.css";
import heroImage from "/src/assets/images/freepik__the-rest-of-the-gym__14777_Nero AI_Photo_Face.png";

const Hero = ({ headerHeight }) => {
  const isLargeScreen = window.innerWidth > 1024;
  const heroHeight = isLargeScreen
    ? `calc(100vh  - ${headerHeight}px)`
    : `calc(100vh - ${headerHeight}px)`;
  return (
    <div
      style={{ height: heroHeight }}
      className="hero flex items-center justify-start p-8 text-white relative bg-black"
    >
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="flex flex-col items-start max-w-lg absolute lg:ml-44 md:ml-5">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
          Get Fit, Stay Strong: Personalized Plans for Every Goal
        </h1>
        <h2 className="text-2xl font-semibold mb-2">I’m Ryan Thompson</h2>
        <p className="mb-2 lg:text-xl lg:font-bold">
          Certified Personal Trainer | Fitness Expert | Nutrition Coach
        </p>
        <p className="mb-4 lg:text-xl lg:font-bold">
          With over 10 years of experience, I’m here to help you achieve your
          fitness goals.
        </p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
          Book Your Consultation Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
