import { FaPhone, FaEnvelope, FaLocationDot, FaClock, FaHeadset } from "react-icons/fa6";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* ---------- SECTION 1: Contact Us Hero Section ---------- */}
      <section
        className="relative w-full min-h-[60vh] flex flex-col items-center justify-center px-2 py-14"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #6333becc 10%, #612baacc 90%), url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10">
          <h2 className="text-3xl md:text-6xl text-white font-bold !leading-tight mt-6 mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl">
            Ready to elevate your brand with our comprehensive advertising solutions? Get in touch with our expert team and let's create something extraordinary together.
          </p>
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-6">
            <div className="flex flex-col items-center">
              <span className="flex cursor-pointer items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg mb-3 transition-all duration-300 hover:scale-110 hover:shadow-cyan-400/40 hover:-translate-y-1">
                <FaPhone className="text-white text-2xl" />
              </span>
              <div className="text-cyan-300 font-semibold text-lg">24/7 Support</div>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex cursor-pointer items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 shadow-lg mb-3 transition-all duration-300 hover:scale-110 hover:shadow-pink-400/40 hover:-translate-y-1">
                <FaEnvelope className="text-white text-2xl" />
              </span>
              <div className="text-purple-300 font-semibold text-lg">Quick Response</div>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex cursor-pointer items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg mb-3 transition-all duration-300 hover:scale-110 hover:shadow-orange-400/40 hover:-translate-y-1">
                <FaLocationDot className="text-white text-2xl" />
              </span>
              <div className="text-orange-300 font-semibold text-lg">Prime Location</div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#381a6bcc] via-[#502784cc] to-[#201239b3] pointer-events-none z-0" />
      </section>

      {/* ---------- SECTION 2: Get In Touch & Office Hours ---------- */}
      <section className="w-full bg-[#10172a] py-14 px-2 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white">
            Get <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">In Touch</span>
          </h2>
          <p className="text-base md:text-lg text-slate-200">
            Our experienced team is ready to help you create impactful advertising campaigns.<br />
            Reach out to us through any of these channels.
          </p>
        </div>
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full mb-10">
          {/* Location */}
          <div className="bg-gradient-to-br from-[#232250] to-purple-900 rounded-2xl border border-purple-400 shadow-lg p-8 flex flex-col items-center">
            <div className="w-14 h-14 cursor-pointer flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-400 shadow-lg mb-3 transition-all duration-300 hover:scale-110 hover:shadow-pink-400/40 hover:-translate-y-1">
              <FaLocationDot className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <span className="text-slate-200 text-[15px] text-center">
              502, Shanti Heritage, Rukunpura, Bailey Road,<br />
              Patna-800 014, Bihar.
            </span>
          </div>
          {/* Email */}
          <div className="bg-gradient-to-br from-[#232250] to-blue-900 rounded-2xl border border-purple-400 shadow-lg p-8 flex flex-col items-center">
            <div className="w-14 h-14 cursor-pointer flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg mb-3 transition-all duration-300 hover:scale-110 hover:shadow-cyan-400/40 hover:-translate-y-1">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <span className="text-slate-200 text-[15px]">diamondads90@gmail.com</span>
          </div>
          {/* Phone */}
          <div className="bg-gradient-to-br from-[#232250] to-emerald-900 rounded-2xl border border-purple-400 shadow-lg p-8 flex flex-col items-center">
            <div className="w-14 h-14 cursor-pointer flex items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-400 shadow-lg mb-3 transition-all duration-300 hover:scale-110 hover:shadow-green-400/40 hover:-translate-y-1">
              <FaPhone className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <span className="text-slate-200 text-[15px]">9234667396 / 7903595077</span>
          </div>
        </div>
        {/* Office Hours */}
        <div className="max-w-4xl w-full bg-gradient-to-br from-[#232250] to-purple-900 rounded-2xl border border-purple-400 shadow-lg p-10 mt-2">
          <h3 className="text-2xl font-bold text-white text-center mb-7">Office Hours</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Business Hours */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 cursor-pointer flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-400 shadow-lg mb-3 transition-all duration-300 hover:scale-110 hover:shadow-cyan-400/40 hover:-translate-y-1">
                <FaClock className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-white">Business Hours</h4>
              <span className="text-slate-200 text-[15px] mt-1 text-center">
                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: Closed
              </span>
            </div>
            {/* Support */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex  cursor-pointer items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 shadow-lg mb-3 transition-all duration-300 hover:scale-110 hover:shadow-purple-400/40 hover:-translate-y-1">
                <FaHeadset className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-white">Support</h4>
              <span className="text-slate-200 text-[15px] mt-1 text-center">
                Emergency Support: Available 24/7<br />
                Response Time: Within 2 hours
              </span>
            </div>
          </div>
        </div>
      </section>
      <ContactForm/>
    </>
  );
}
