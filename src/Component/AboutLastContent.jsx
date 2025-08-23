import React from "react";

// Dummy domain data for both columns
const domains = [
  [
    {
      title: "Publishing Activities",
      desc: "Captivating content and visually stunning layouts that leave lasting impressions",
      color: "bg-cyan-400",
    },
    {
      title: "Motion Picture & Video Production",
      desc: "Cutting-edge technology bringing ideas to life on screen",
      color: "bg-purple-400",
    },
    {
      title: "Sound Recording & Music Publishing",
      desc: "Quality audio experiences that resonate with audiences",
      color: "bg-cyan-400",
    },
  ],
  [
    {
      title: "Advertising & Market Research",
      desc: "Strategic campaigns driven by comprehensive market insights",
      color: "bg-purple-400",
    },
    {
      title: "Pre & Primary Education",
      desc: "Promoting learning through engaging and informative content",
      color: "bg-cyan-400",
    },
    {
      title: "Creative Arts & Entertainment",
      desc: "Pushing boundaries of creativity in entertainment experiences",
      color: "bg-purple-400",
    },
  ],
];

export default function AboutLastContent() {
  return (
    <section className="w-full pb-5 px-3  flex justify-center items-center  bg-[#131734]">
      <div className="max-w-6xl w-full bg-gradient-to-br from-[#23225013] to-purple-900 border border-purple-400 rounded-2xl p-10 shadow-lg mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-7">
          Expertise Across Diverse Domains
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-6">
              {col.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start animate-fade-in group transition-all duration-300"
                  style={{ animationDelay: `${0.1 + idx * 0.12}s` }}
                >
                  <span
                    className={`w-3 h-3 rounded-full mt-2 mr-4 ${item.color} group-hover:scale-125 transition-transform duration-200`}
                  ></span>
                  <div>
                    <h3
                      className={`font-semibold text-lg ${
                        item.color === "bg-cyan-400"
                          ? "text-cyan-300"
                          : "text-purple-300"
                      } group-hover:text-white transition-colors duration-200`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-200 text-sm mt-1 group-hover:text-gray-100 transition-colors duration-200">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Custom animation CSS */}
      <style>
        {`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.7s both;
        }
        `}
      </style>
    </section>
  );
}
