// TimelineSection.jsx 
import { useEffect, useState } from "react";

const dummyTimeline = [
  {
    year: "1990",
    title: "Foundation",
    desc: "Diamond Ads was founded with a vision to redefine advertising and transform it into a powerhouse of creativity and effectiveness.",
  },
  {
    year: "1993",
    title: "MSME Transition",
    desc: "Diamond Ads transitioned into the realm of Micro, Small, and Medium Enterprises (MSME), marking a significant milestone in its journey.",
  },
  {
    year: "2000s",
    title: "Industry Recognition",
    desc: "Gained recognition as a trusted partner in the advertising landscape with steadfast commitments to quality and client satisfaction.",
  },
  {
    year: "Present",
    title: "Legacy of Excellence",
    desc: "Continues to set the standard for excellence in the advertising industry with 30+ years of experience and innovation.",
  },
];

function limitWords(text, maxWords) {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text;
}

export default function JourneyTimeline() {
  const [timeline, setTimeline] = useState([]);
  useEffect(() => {
    // simulate API
    setTimeout(() => setTimeline(dummyTimeline), 400);
  }, []);

  return (
    <section className="w-full bg-[#131734] py-12 px-2">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Journey
          </span>
        </h2>
        <p className="text-base md:text-lg text-slate-200">
          What began as a vision to redefine advertising has transformed into a
          powerhouse of creativity and effectiveness, with a legacy spanning
          three decades.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-400 to-blue-400 h-full"></div>

        <div className="flex flex-col gap-16">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative flex w-full">
              {/* Mobile layout (single column) */}
              <div className="w-full flex md:hidden justify-center">
                <div
                  className="bg-gradient-to-br from-[#232250] to-purple-900 border
                  border-transparent hover:border-cyan-400
                  rounded-2xl shadow-xl p-6 max-w-md text-center
                  transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="text-cyan-400 text-lg md:text-xl font-bold mb-1">
                    {item.year}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-2">
                    {item.title}
                  </div>
                  <p className="text-slate-200 text-base">
                    {limitWords(item.desc, 18)}
                  </p>
                </div>
              </div>

              {/* Desktop layout (alternating) */}
              <div className="hidden md:flex w-full">
                {/* Left Side */}
                {idx % 2 === 0 ? (
                  <div className="w-1/2 pr-8 flex justify-end">
                    <div
                      className="bg-gradient-to-br from-[#232250] to-purple-900 border
                      border-transparent hover:border-cyan-400
                      rounded-2xl shadow-xl p-6 max-w-sm text-right
                      transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="text-cyan-400 text-lg md:text-xl font-bold mb-1">
                        {item.year}
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-white mb-2">
                        {item.title}
                      </div>
                      <p className="text-slate-200 text-base">
                        {limitWords(item.desc, 18)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-1/2"></div>
                )}

                {/* Timeline Dot */}
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                  w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 via-purple-400 to-blue-400 
                  border-4 border-[#131734] shadow-lg"
                ></span>

                {/* Right Side */}
                {idx % 2 !== 0 ? (
                  <div className="w-1/2 pl-8 flex justify-start">
                    <div
                      className="bg-gradient-to-br from-[#232250] to-purple-900 border
                      border-transparent hover:border-cyan-400
                      rounded-2xl shadow-xl p-6 max-w-sm text-left
                      transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="text-purple-300 text-lg md:text-xl font-bold mb-1">
                        {item.year}
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-white mb-2">
                        {item.title}
                      </div>
                      <p className="text-slate-200 text-base">
                        {limitWords(item.desc, 18)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-1/2"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
