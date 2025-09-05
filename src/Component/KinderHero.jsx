import React, { useState, useEffect } from "react";
import KinderCard from "./KinderCard";
import kin1 from "../assets/kin1.jpeg"
import kin2 from "../assets/kin2.jpeg"

import kin3 from "../assets/kin3.jpeg"

const images = [ kin1,kin2,kin3];


export default function KinderHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 2 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-[auto] pb-5 md:h-[400px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Images with fade */}
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 via-purple-500 to-purple-500 opacity-40 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Kinder Garten <span className="text-blue-400">Bakhri</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-white font-medium max-w-xl mx-auto px-2">
            Nurturing young minds with modern educational approaches and creative learning environments. Our educational division focuses on early childhood development and innovative teaching methods.
          </p>
          {/* Buttons Row */}
          <div className="mt-10 grid  md:grid-cols-3 sm:grid-cols-2 md:gap-6 gap-2 max-w-2xl mx-auto">
            <HeroButton color="bg-green-600" icon="fa-solid fa-graduation-cap" text="Quality Education" />
            <HeroButton color="bg-blue-500" icon="fa-solid fa-palette" text="Creative Learning" />
            <HeroButton color="bg-pink-600" icon="fa-solid fa-heart" text="Caring Environment" />
          </div>
        </div>
      </section>
      <KinderCard />
    </>
  );
}

// Reusable Button Component
function HeroButton({ color, icon, text }) {
  return (
    <button
      className={`flex items-center justify-center py-4 max-w-2xl mx-2 rounded-lg shadow-lg ${color} text-white font-semibold cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300`}
      style={{ Width: 120 }}
    >
      {/* Use font awesome icons or own SVGs */}
      <span className="mb-2 text-xl">
        <i className={icon}></i>
      </span>
      {text}
    </button>
  );
}
