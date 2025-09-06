import { useState } from "react";
import {
  FaRegNewspaper,
  FaTv,
  FaCarSide,
  FaStore,
  FaUser,
  FaVideo,
  FaGlobe,
} from "react-icons/fa6";

import ServiceHero from "./ServiceHero";
import MediaPartner from "./MediaPartner";

const cards = [
  {
    title: "Print Media",
    desc: "Strategic placement in leading newspapers and magazines with compelling layouts and content.",
    icon: <FaRegNewspaper className="text-3xl text-white cursor-pointer" />,
    color: "from-cyan-500 to-blue-500",
    tags: [
      { text: "Newspapers", color: "text-cyan-300" },
      { text: "Magazines", color: "text-cyan-300" },
      { text: "Inserts", color: "text-cyan-300" },
      { text: "Journals", color: "text-cyan-300" },
    ],
  },
  {
    title: "Electronic Media",
    desc: "Powerful TV and radio campaigns for maximum audience reach and engagement.",
    icon: <FaTv className="text-3xl text-white cursor-pointer" />,
    color: "from-fuchsia-400 to-purple-500",
    tags: [
      { text: "TV Commercials", color: "text-fuchsia-300" },
      { text: "Radio Jingles", color: "text-fuchsia-300" },
      { text: "Edutainment", color: "text-fuchsia-300" },
    ],
  },
  {
    title: "Outdoor Publicity",
    desc: "High-impact hoardings, billboards, and transit ads across prime city locations.",
    icon: <FaCarSide className="text-3xl text-whit cursor-pointer" />,
    color: "from-orange-400 to-orange-600",
    tags: [
      { text: "Billboards", color: "text-orange-200" },
      { text: "Transit Ads", color: "text-orange-200" },
      { text: "Unipoles", color: "text-orange-200" },
      { text: "Street Furniture", color: "text-orange-200" },
    ],
  },
  {
    title: "Event Management",
    desc: "Creative brand presence at expos, fairs and exhibitions for direct audience interaction.",
    icon: <FaStore className="text-3xl text-white cursor-pointer" />,
 
    tags: [
      { text: "Expo Stalls", color: "text-green-200" },
      { text: "Brand Activations", color: "text-green-200" },
      { text: "Product Launches", color: "text-green-200" },
    ],
  },
  {
    title: "Biopic Creation",
    desc: "Personalized video biographies and documentary productions to celebrate legacies and milestones.",
    icon: <FaVideo className="text-3xl text-white cursor-pointer" />,
    color: "from-blue-400 to-purple-400",
    tags: [
      { text: "Scriptwriting", color: "text-blue-200" },
      { text: "Filming", color: "text-purple-200" },
      { text: "Editing", color: "text-blue-200" },
    ],
  },

  {
    title: "Digital Marketing",
    desc: "Boost your brand visibility through  social media campaigns, paid ads, and engaging content strategies to reach the right audience online.",
    icon: <FaGlobe className="text-3xl text-white cursor-pointer" />,
    color: "from-blue-400 to-purple-400",
    tags: [
      { text: "Social Media Ads", color: "text-blue-200" },
      { text: "Content Marketing", color: "text-purple-300" },
      { text: "Email Marketing", color: "text-blue-400" },
    ],
  },
];

export default function Services() {
  const [showAll, setShowAll] = useState(true); // Always show all tiles for main page

  const displayCards = showAll ? cards : cards.slice(0, 3);

  return (
    <>
      <ServiceHero />
      <section className="w-full min-h-auto flex flex-col items-center justify-start bg-gradient-to-br from-[#131734] to-[#e3d0f7] py-14 px-3">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-slate-200 mt-6">
            With 30 years of experience under its belt, Diamond Ads continues to set the standard for excellence in the advertising industry, delivering comprehensive offline marketing solutions.
          </p>
        </div>
        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
          {displayCards.map((c, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-gradient-to-br ${c.color} bg-opacity-70 shadow-lg p-1 pb-0 
                  hover:scale-102 hover:shadow-[0_0_15px_cyan] transition-transform duration-900 cursor-pointer`}

              style={{ minHeight: 340, transition: "box-shadow 0.3s" }}
            >
              <div className="flex flex-col h-full bg-[#1f223aee] rounded-2xl p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-blue-400 shadow-lg mb-3">
                    {c.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-3">{c.title}</h3>
                </div>
                <p className="text-slate-200 text-base mb-5 flex-1">{c.desc}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {c.tags.map((t, idx) => (
                    <span key={t.text} className={`text-sm font-semibold ${t.color}`}>
                      {t.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Hide "View All" button since all shown */}
      </section>
      <MediaPartner/>
    </>
  );
}
