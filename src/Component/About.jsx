import AboutLastContent from "./AboutLastContent";
import JourneyTimeline from "./JourneyTimeline";
import MissionVisionSection from "./MissionVissionSection";

// AboutDiamond.jsx
export default function About() {
  return (
    <div>
        <section
      className="relative w-full min-h-[450px] flex flex-col items-center justify-center px-4 py-14"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0sHDkiVYmGd0PDa3LawqvSJC9PfrGRuWZg&s')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#402882af] to-[#171936a6]"></div>
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-8xl font-bold text-white mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Diamond Ads
          </span>
        </h2>
        <p className="text-lg text-slate-200 mb-10 max-w-2xl">
          Since its inception in 1990, Diamond Ads has been at the forefront of the advertising industry,
          pioneering innovative strategies and delivering exceptional results.
        </p>
        {/* Info Stats */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Stat 1 */}
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">30+</div>
            <div className="text-white font-medium text-lg">Years of Experience</div>
          </div>
          {/* Stat 2 */}
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">MSME</div>
            <div className="text-white font-medium text-lg">Certified Enterprise</div>
          </div>
          {/* Stat 3 */}
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">GEM</div>
            <div className="text-white font-medium text-lg">Registered</div>
          </div>
        </div>
      </div>
    </section>
    <JourneyTimeline/>
    <AboutLastContent/>
    <MissionVisionSection/>
    </div>
  );
}
