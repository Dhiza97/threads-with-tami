import { playfairDisplay } from "@/fonts";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen px-5 lg:px-8 xl:px-[8%] py-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/hero-img.jpg"
          alt="hero section image"
          width={500}
          height={500}
          className="max-w-sm rounded-lg shadow-2xl"
        />

        <div>
          <h1
            className="text-4xl font-semibold leading-tight text-[var(--color-deepForest)] -z-10"
            style={playfairDisplay.style}
          >
            Welcome to Threads With Tami, your go-to source for practical
            insights, inspiration, and tips for faith-centered living.
          </h1>

          <button className="btn btn-xl btn-outline px-4 py-1 rounded-full mt-8 [color:var(--color-btnColor)] font-light">
            Start Here!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
