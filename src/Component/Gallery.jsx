import Gallery_card from "./Cards/Gallery_card";

// PortfolioSection.jsx
export default function Gallery() {
  return (
    <div>

      <section
      className="w-full min-h-[60vh] flex flex-col justify-center items-center relative px-2 py-14"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
       
      }}
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center z-10">
        <h2 className="text-3xl md:text-6xl font-bold !leading-tight mt-6 mb-6 text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl">
          Explore our extensive portfolio showcasing successful campaigns across newspapers, outdoor advertising, TV commercials, and creative events spanning three decades of excellence.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full mt-6">
          <div>
            <span className="text-cyan-400 text-3xl md:text-4xl font-extrabold">500+</span>
            <div className="text-white font-medium text-base mt-1">Campaigns</div>
          </div>
          <div>
            <span className="text-purple-300 text-3xl md:text-4xl font-extrabold">3,860</span>
            <div className="text-white font-medium text-base mt-1">Satisfied Clients</div>
          </div>
          <div>
            <span className="text-cyan-400 text-3xl md:text-4xl font-extrabold">8,550</span>
            <div className="text-white font-medium text-base mt-1">Projects Completed</div>
          </div>
          <div>
            <span className="text-purple-300 text-3xl md:text-4xl font-extrabold">100+</span>
            <div className="text-white font-medium text-base mt-1">Awards Won</div>
          </div>
        </div>
      </div>
      {/* Background overlay for brightness & color */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#361b68cc] via-[#411e76cc] to-[#2c1a3bb3] pointer-events-none z-0" />
    </section>
    <Gallery_card/>
    </div>
  );
}
