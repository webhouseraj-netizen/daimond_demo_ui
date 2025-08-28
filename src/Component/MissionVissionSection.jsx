// MissionVisionSection.jsx
import { FaBullseye, FaEye } from "react-icons/fa6";
import about_image from '../assets/about-pic.jpeg'

export default function MissionVisionSection() {
  return (
    <section
      className="
        relative w-full py-16 md:py-20 overflow-hidden
       bg-[#131734]
      "
    >
      {/* soft diagonal highlight sweep */}
      <div
        className="
          pointer-events-none absolute -left-1/4 -top-1/3 w-[160%] h-[140%]
          rotate-[-18deg] opacity-50
          bg-gradient-to-b from-white/60 via-white/10 to-transparent blur-3xl
        "
      />

      {/* Main Grid */}
      <div className="relative max-w-8xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_680px] md:grid-cols-1 gap-10 md:gap-12 items-center px-4">
        {/* Mission & Vision Cards */}
        <div className="flex flex-col gap-8">
          {/* Mission */}
          <article
            className="
              relative rounded-2xl p-6 md:p-7
              bg-gradient-to-br from-[#2b7bd1] to-[#5f6f86]
              text-white shadow-[0_12px_30px_rgba(22,27,62,0.25)]
              ring-1 ring-white/15
            "
          >
            {/* subtle bottom accent line (teal) */}
            <span className="pointer-events-none absolute left-0 right-0 bottom-0 h-[4px] rounded-b-2xl bg-gradient-to-r from-cyan-300 to-sky-400" />

            <div className="flex items-start gap-4">
              <span
                className="
                  flex items-center justify-center w-12 h-12 rounded-xl
                  bg-gradient-to-br from-cyan-400 to-blue-600
                  shadow-[0_8px_24px_rgba(34,194,255,0.35)]
                  ring-1 ring-white/30
                "
                aria-hidden
              >
                <FaBullseye className="text-white text-2xl" />
              </span>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold leading-tight">Our Mission</h3>
                <p className="mt-2 text-white/85 leading-relaxed">
                  Our mission is to leverage creativity, technology, and market
                  insights to deliver impactful campaigns that resonate with
                  audiences, drive brand success, and inspire positive change in
                  society.
                </p>
              </div>
            </div>
          </article>

          {/* Vision */}
          <article
            className="
              relative rounded-2xl p-6 md:p-7
              bg-gradient-to-br from-[#b146e0] via-[#a24edb] to-[#8561d1]
              text-white shadow-[0_12px_30px_rgba(22,16,62,0.28)]
              ring-1 ring-white/15
            "
          >
            {/* very soft inner sheen */}
            <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(120%_90%_at_20%_0%,rgba(255,255,255,0.18),transparent_60%)]" />

            <div className="relative flex items-start gap-4">
              <span
                className="
                  flex items-center justify-center w-12 h-12 rounded-xl
                  bg-gradient-to-br from-fuchsia-400 to-purple-600
                  shadow-[0_8px_24px_rgba(216,70,239,0.35)]
                  ring-1 ring-white/30
                "
                aria-hidden
              >
                <FaEye className="text-white text-2xl" />
              </span>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold leading-tight">Our Vision</h3>
                <p className="mt-2 text-white/90 leading-relaxed">
                  At Diamond Ads, our vision is to be the foremost provider of
                  innovative advertising solutions, setting industry benchmarks and
                  exceeding client expectations.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Right Side: Tall Image */}
        <div className="flex items-center justify-center">
          <div
            className="
              relative w-full overflow-hidden rounded-2xl
              shadow-[0_18px_40px_rgba(22,16,62,0.25)]
              ring-1 ring-white/20 bg-white/40 group
            "
          >
            <img
              // src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop"
              src={about_image}
              alt="Collaboration at Diamond Ads"
              className="cursor-pointer w-full h-[460px] md:h-[720px] object-fill transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Commitment Block */}
      <div className="relative px-4 mt-12 md:mt-16">
        <div
          className="
            mx-auto w-full max-w-5xl rounded-2xl p-8 md:p-10 text-center
            bg-gradient-to-br from-[#9aa6b4]/60 via-[#a9a0c9]/55 to-[#946fe0]/60
            backdrop-blur-sm text-white
            ring-1 ring-white/15
            shadow-[0_18px_40px_rgba(22,16,62,0.20)]
          "
        >
          <h3 className="text-2xl md:text-3xl font-semibold">Commitment to Excellence</h3>
          <p className="mt-3 md:mt-4 text-white/90 leading-relaxed max-w-3xl mx-auto">
            With a commitment to excellence, creativity, and integrity, Diamond Ads
            continues to shine brightly in the advertising landscape, illuminating
            the path to success for clients and partners alike.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
            {["Excellence", "Creativity", "Integrity"].map((item, i) => (
              <span
                key={i}
                className={`
                  inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold
                  text-white ring-1 ring-white/25
                  transition-transform duration-300 ease-out
                  hover:scale-105 hover:shadow-[0_12px_24px_rgba(0,0,0,0.25)]
                  ${
                    item === "Excellence"
                      ? "bg-gradient-to-r from-cyan-500 to-sky-600"
                      : item === "Creativity"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-600"
                      : "bg-gradient-to-r from-emerald-500 to-teal-600"
                  }
                `}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
