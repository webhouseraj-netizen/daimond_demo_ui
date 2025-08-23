// MediaCards.jsx
import { FaRegNewspaper, FaCarSide, FaTv, FaUsers } from "react-icons/fa6";
import printMediaImg from "../../assets/print.png";
import outdoorImg from "../../assets/outdoor.png";
import electronicImg from"../../assets/elect.png";
import massAudienceImg from "../../assets/mass.png";
const cardData = [
  {
    title: "Print Media Dominance",
    desc: "Strategic newspaper and magazine placements that capture attention and drive engagement across all demographics.",
    img:  printMediaImg,
    icon: <FaRegNewspaper className="text-xl text-white" />,
  },
  {
    title: "Outdoor Advertising",
    desc: "Eye-catching billboards and hoardings positioned in high-traffic locations for maximum brand visibility.",
    img:  outdoorImg  ,
    icon: <FaCarSide className="text-xl text-white" />,
  },
  {
    title: "Electronic Media Mastery",
    desc: "Compelling TV campaigns designed to maximize reach and create memorable brand impressions.",
    img: electronicImg,
    icon: <FaTv className="text-xl text-white" />,
  },
  {
    title: "Mass Audience Engagement",
    desc: "Powerful strategies to connect with large audiences across multiple traditional platforms.",
    img:  massAudienceImg,
    icon: <FaUsers className="text-xl text-white" />,
  },
];
export default function MediaCard() {
  return (
    <section className="w-full bg-[#111936] py-14 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Traditional Media,{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Modern Results
          </span>
        </h2>
        <p className="text-lg text-cyan-200 mt-4">
          We combine decades of traditional advertising expertise with cutting-edge strategies <br />
          to deliver campaigns that truly resonate with your target audience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 max-w-7xl mx-auto">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="cursor-pointer group flex flex-col justify-end rounded-2xl overflow-hidden shadow-lg bg-[#232250] border-1 border-transparent hover:border-cyan-400 hover:shadow-xl transition-all duration-500"
            style={{ minHeight: 350 }}
          >
            <div className="relative w-full overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-full shadow-lg flex items-center">
                {card.icon}
              </div>
            </div>
            <div className="p-6 w-full">
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
              <p className="text-cyan-200 mt-2 text-base">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
