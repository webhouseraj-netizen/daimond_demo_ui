
import {
  FaRegFileAlt,
  FaTv,
  FaBullhorn,
  FaRegCalendarAlt,
  FaVideo,
} from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";

export default function ServiceHero() {
  return (
    <section
      className="relative md:min-h-[60vh] min-h-[40vh] flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/26/full/1593189077-2974.jpg?im=FeatureCrop,size=(826,465)')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#362a6b]/90 to-[#553ba3]/90"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-10 pb-2 w-full max-w-4xl min-h-auto">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-5 select-none tracking-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-[#21a0fa] via-[#a020fa] to-[#a9c1fa] bg-clip-text text-transparent">
            Services
          </span>
        </h1>
        <p className="text-white text-lg max-w-2xl mb-10 text-center">
          With 30 years of experience under its belt, Diamond Ads continues to
          set the standard for excellence in the advertising industry,
          delivering comprehensive offline marketing solutions.
        </p>
        {/* Services */}
        <div className="flex flex-col md:flex-row justify-center gap-10 w-full">
          {/* Print Media */}
          <div className="flex flex-col gap-4 items-center backdrop-blur-sm">
            <div className="flex justify-center items-center w-24 h-24 md:w-20 md:h-20 rounded-3xl bg-[#21a0fa] shadow-lg ring-2 ring-white/10 transition-all duration-300 cursor-pointer hover:scale-105">
              <FaRegFileAlt className="w-12 h-12 text-white" />
            </div>
            <div className="font-medium text-[#21a0fa] text-base text-center">
              Print Media
            </div>
          </div>

          {/* Electronic Media */}
          <div className="flex flex-col gap-4 items-center backdrop-blur-sm">
            <div className="flex justify-center items-center w-24 h-24 md:w-20 md:h-20 rounded-3xl bg-[#a020fa] shadow-lg ring-2 ring-white/10 transition-all duration-300 cursor-pointer hover:scale-105">
              <FaTv className="w-12 h-12 text-white" />
            </div>
            <div className="font-medium text-[#15a508] text-base text-center">
              Electronic Media
            </div>
          </div>

          {/* Outdoor Publicity */}
          <div className="flex flex-col gap-4 items-center backdrop-blur-sm">
            <div className="flex justify-center items-center w-24 h-24 md:w-20 md:h-20 rounded-3xl bg-[#ff7324] shadow-lg ring-2 ring-white/10 transition-all duration-300 cursor-pointer hover:scale-105">
              <FaBullhorn className="w-12 h-12 text-white" />
            </div>
            <div className="font-medium text-[#ff7324] text-base text-center">
              Outdoor Publicity
            </div>
          </div>

          {/* Event Management */}
          <div className="flex flex-col gap-4 items-center backdrop-blur-sm">
            <div className="flex justify-center items-center w-24 h-24 md:w-20 md:h-20 rounded-3xl bg-[#20db69] shadow-lg ring-2 ring-white/10 transition-all duration-300 cursor-pointer hover:scale-105">
              <FaRegCalendarAlt className="w-12 h-12 text-white" />
            </div>
            <div className="font-medium text-[#20db69] text-base text-center">
              Event Management
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center backdrop-blur-sm">
            <div className="flex justify-center items-center w-24 h-24 md:w-20 md:h-20 rounded-3xl bg-blue-500 shadow-lg ring-2 ring-white/10 transition-all duration-300 cursor-pointer hover:scale-105">
              <FaVideo className="w-12 h-12 text-white" />
            </div>
            <div className="font-medium text-blue-500 text-base text-center">
              Biopic Creation
            </div>
          </div>
          {/* Digital marketing */}
          <div className="flex flex-col gap-4 items-center backdrop-blur-sm">
            <div className="flex justify-center items-center w-24 h-24 md:w-20 md:h-20 rounded-3xl bg-[#79ff4d] shadow-lg ring-2 ring-white/10 transition-all duration-300 cursor-pointer hover:scale-105">
              <FaGlobe className="w-12 h-12 text-white" />
            </div>
            <div className="font-medium text-[#80ff00] text-base text-center">
              Digital Marketing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
