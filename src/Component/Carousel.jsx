import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaArrowRight, FaSuitcase } from "react-icons/fa6";

export default function Carousel() {
  const [slides, setSlides] = useState([]);
  const [contentIdx, setContentIdx] = useState(0);
  const [bgIdx, setBgIdx] = useState(0);
  const [showBg, setShowBg] = useState(true); // Which bg to show
  const prevBg = useRef(""); // Previous bg image for fading

  // Fetch carousel data
  useEffect(() => {
    axios
      .get("/carouselData.json")
      .then((res) => setSlides(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Content slide timer (4s)
  useEffect(() => {
    if (!slides.length) return;
    const contentTimer = setTimeout(() => {
      setContentIdx((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearTimeout(contentTimer);
  }, [contentIdx, slides]);

  // Background slide timer (7s)
  useEffect(() => {
    if (!slides.length) return;
    const bgTimer = setTimeout(() => {
      prevBg.current = slides[bgIdx]?.bgImage || "";
      setShowBg(false); // trigger fade out
      setTimeout(() => {
        setBgIdx((prev) => (prev + 1) % slides.length);
        setShowBg(true); // trigger fade in
      }, 700); // fade duration in ms
    }, 7000);
    return () => clearTimeout(bgTimer);
    // eslint-disable-next-line
  }, [bgIdx, slides]);

  if (!slides.length) {
    return (
      <div className="w-full min-h-[600px] flex items-center justify-center bg-gray-200">
        <span className="animate-pulse text-2xl text-cyan-600">Loading...</span>
      </div>
    );
  }

  const currentContent = slides[contentIdx];
  const titleParts = currentContent.title
    ? currentContent.title.split(",")
    : [currentContent.title];

  // The current and previous background images
  const currentBg = slides[bgIdx]?.bgImage || "";
  const previousBg = prevBg.current;

  return (
    <div className="relative  w-full md:h-[450px] flex items-center justify-center overflow-hidden rounded-0">
      {/* Previous bg (fade-out) */}
      <div
        className={`absolute inset-0 transition-opacity w-full h-full object-contain duration-700 ease-in-out z-0`}
        style={{
          opacity: showBg ? 0 : 1,
          backgroundImage: `url(${previousBg})`,

          backgroundPosition: "center",
          objectFit: "cover",
          backgroundSize: "contain", // image पूरी दिखेगी

          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Active bg (fade-in) */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out z-0`}
        style={{
          opacity: showBg ? 1 : 0,
          backgroundImage: `url(${currentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${currentContent.gradient} z-10`}></div>
      {/* Content slides independently */}
      <div className="relative z-20 w-full max-w-7xl px-8 py-12 flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
          {titleParts[0]}
          {titleParts[1] && (
            <span className="text-cyan-400">, {titleParts[1].trim()}</span>
          )}
        </h1>
        <h2 className="text-xl md:text-2xl text-cyan-300 font-semibold mt-2 mb-1">
          {currentContent.subtitle}
        </h2>
        <p className="text-lg text-cyan-200 mb-7">{currentContent.desc}</p>
        <div className="flex gap-4 mb-10">
          <button className="px-6 py-2 bg-cyan-500 rounded-full text-lg font-semibold text-white flex items-center gap-2 hover:bg-purple-500 transition duration-200">
            Explore Services <FaArrowRight />
          </button>
          <button className="px-6 py-2 border-2 border-cyan-400 rounded-full text-lg font-semibold text-cyan-300 flex items-center gap-2 hover:bg-cyan-800 hover:text-white transition duration-200">
            View Portfolio <FaSuitcase />
          </button>
        </div>
        <div className="flex gap-10 mt-6">
          {currentContent.stats.map((stat, si) => (
            <div key={stat.title + si} className="text-center">
              <div className="text-2xl font-bold text-cyan-300">
                {stat.title}
              </div>
              <div className="text-sm text-cyan-200">{stat.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots for content only */}
      <div className="absolute bottom-6 right-0 left-0 flex justify-center gap-4 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setContentIdx(idx)}
            className={`h-3 w-8 rounded-full transition-all duration-300 ${
              contentIdx === idx ? "bg-cyan-400" : "bg-white/20"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
