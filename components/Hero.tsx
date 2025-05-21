import { playfairDisplay } from "@/fonts";
import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen px-5 lg:px-8 xl:px-[8%] py-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />

        <div>
          <h1 className="text-4xl font-semibold leading-tight text-[var(--color-deepForest)] -z-10"
          style={playfairDisplay.style}>
            Welcome to Threads With Tami, your go-to source for practical
            insights, inspiration, and tips for faith-centered living.
          </h1>
          <button className="btn btn-primary mt-10">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
