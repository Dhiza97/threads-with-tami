import { playfairDisplay } from "@/fonts";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative px-5 lg:px-8 xl:px-[8%] py-4 bg-[url(/hero.jpg)] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="max-w-4xl mx-auto text-center"
        style={{
          position: "fixed",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1
          className="text-5xl font-semibold leading-tight text-[var(--color-deepForest)] -z-10"
          style={playfairDisplay.style}
        >
          Welcome to Threads With Tami, your go-to source for practical
          insights, inspiration, and tips for faith-centered living.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
