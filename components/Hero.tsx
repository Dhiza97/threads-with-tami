import { playfairDisplay } from "@/fonts";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-[60vh] md:min-h-screen px-4 sm:px-6 lg:px-8 xl:px-[8%] py-8">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--color-deepForest)] mb-6 text-center lg:text-left"
            style={playfairDisplay.style}
          >
            Welcome to <span className="text-lightGreen">Threads With Tami</span>, your go-to source for practical
            insights, inspiration, and tips for faith-centered living.
          </h1>
          <button className="btn btn-xl btn-outline px-6 py-2 rounded-full mt-4 [color:var(--color-btnColor)] font-light">
            Start Here!
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/hero-img.jpg"
            alt="hero section image"
            width={400}
            height={400}
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 max-w-full rounded-lg shadow-2xl object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;