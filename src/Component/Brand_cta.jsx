// BrandCta.jsx
import { FaPhone, FaClock, FaCertificate, FaUnlock, FaCalendarCheck } from "react-icons/fa6";

export default function BrandCta() {
  return (
    <section
      className="w-full min-h-[50vh] flex flex-col items-center justify-center px-6 py-16 relative  bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1691223714409-b0cb1629f0f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJpbnQlMjBtZWRpYSUyMGNvbnRhY3QlMjBmcm9tfGVufDB8fDB8fHww')",
      }}
    >
      {/* Overlay div */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#51248453]  z-20"></div>

      <div className="max-w-3xl mx-auto text-center z-30">
        <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-4">
          Ready to Make Your Brand <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
            Unforgettable?
          </span>
        </h2>
        <p className="text-lg text-gray-200 mb-10 z-20">
          Join hundreds of successful brands who trust us to deliver powerful offline marketing campaigns
          that generate real results and lasting impact.
        </p>
        <div className="flex flex-col gap-4 md:flex-row items-center justify-center mb-12 z-20">
          <button className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-white text-lg font-semibold shadow-lg hover:scale-105 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300">
            Start Your Campaign <FaUnlock className="ml-2 text-xl" />
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-cyan-400 rounded-full text-cyan-200 text-lg font-semibold hover:bg-cyan-400 hover:text-white hover:scale-105 transition-all duration-300 md:ml-4">
            See Our Work <FaCalendarCheck className="ml-2 text-xl" />
          </button>
        </div>
      </div>
      {/* Features/Card Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 z-20">
        {/* Card 1 */}
        <div className="flex flex-col items-center w-72 md:w-60 bg-transparent">
          <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-4 rounded-full shadow-lg mb-4 animate-card-pop hover:scale-110 transition-all duration-300">
            <a href="tel:+919234667396"><FaPhone className="text-white text-3xl  hover:scale-105 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 cursor-pointer" /></a>
           
          </div>
          <h3 className="text-xl font-bold text-white mb-2 ">Free Consultation</h3>
          <p className="text-gray-200 text-base">
            Get expert advice tailored to your brand
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center w-72 md:w-60 bg-transparent">
          <div className="bg-gradient-to-br from-purple-500 to-cyan-500 p-4 rounded-full shadow-lg mb-4 animate-card-pop hover:scale-110 transition-all duration-300">
            <FaClock className="text-white text-3xl  hover:scale-105 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 cursor-pointer" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
          <p className="text-gray-200 text-base">
            Round-the-clock campaign monitoring
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center w-72 md:w-60 bg-transparent">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-full shadow-lg mb-4 animate-card-pop hover:scale-110 transition-all duration-300">
            <FaCertificate className="text-white text-3xl  hover:scale-105 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 cursor-pointer" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
          <p className="text-gray-200 text-base">
            Track record of successful campaigns
          </p>
        </div>
      </div>
    </section>
  );
}
