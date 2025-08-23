import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";
import image from "../assets/dia-logo.png";
import { Link } from "react-router-dom";
import Whatsapp from "./Cards/Whatsapp";

export default function Footer() {
  return (
    <>
    <footer className="bg-gradient-to-r from-purple-800 to-blue-900 text-cyan-200 pt-8 pb-4 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div className="min-w-[220px]">
          <img src={image} alt="diamond adsLogo" className="h-10 mb-3 text-cyan-200 bg-white" />
          <p className="mb-4 text-[19px]">
            Since its inception in 1990, Diamond Ads has been at the forefront of the advertising industry, pioneering innovative strategies and delivering exceptional results. What began as a vision to redefine advertising has transformed into a powerhouse of creativity and effectiveness, with a legacy spanning three decades.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="bg-[#0D142B] rounded-full p-2 text-cyan-200 hover:bg-cyan-700 duration-200" aria-label="Facebook">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="bg-[#0D142B] rounded-full p-2 text-cyan-200 hover:bg-cyan-700 duration-200" aria-label="X">
              <FaXTwitter size={18} />
            </a>
            <a href="#" className="bg-[#0D142B] rounded-full p-2 text-cyan-200 hover:bg-cyan-700 duration-200" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="bg-[#0D142B] rounded-full p-2 text-cyan-200 hover:bg-cyan-700 duration-200" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
        {/* Services */}
        <div className="min-w-[160px]">
          <h3 className="font-bold text-cyan-300 text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-[19px]">
            <li>
              <Link to="/newspaper-ads" className="cursor-pointer hover:text-blue-600 hover:scale-105 transition transform duration-300">
                Newspaper Ads
              </Link>
            </li>
            <li>
              <Link to="/print-media" className="cursor-pointer hover:text-blue-600 hover:scale-105 transition transform duration-300">
                Print Media
              </Link>
            </li>
            <li>
              <Link to="/banners" className="cursor-pointer hover:text-blue-600 hover:scale-105 transition transform duration-300">
                Banners
              </Link>
            </li>
            <li>
              <Link to="/tv-commercials" className="cursor-pointer hover:text-blue-600 hover:scale-105 transition transform duration-300">
                TV Commercials
              </Link>
            </li>
          </ul>

        
        </div>
        {/* Quick Links */}
        <div className="min-w-[160px]">
          <h3 className="font-bold text-cyan-300 text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-md">


            <ul className="space-y-2 text-[19px]">
              <li>
                <Link
                  to="/"
                  className="cursor-pointer hover:text-blue-600 hover:scale-105 transition transform duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="cursor-pointer hover:text-blue-600 hover:scale-105 transition transform duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="cursor-pointer hover:text-blue-600 hover:scale-105 transition transform duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="cursor-pointer hover:text-blue-600 hover:scale-105 transition transform duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </ul>
        </div>
        {/* Contact Info */}
        <div className="min-w-[200px]">
          <h3 className="font-bold text-cyan-300 text-lg mb-4">Contact Info</h3>
          <ul className="space-y-3 ">
            <li className="flex gap-2 items-center">
              <MdLocationOn className="text-cyan-400 ransition-transform duration-300 hover:scale-120   cursor-pointer text-[5rem]"  />
              <span className="text-[20px]">   502, Shanti Heritage, Rukunpura, Bailey Road, Patna-800 014, Bihar.</span>
            </li>
            <li className="flex gap-2 items-center ">
              <MdCall className="text-cyan-400 ransition-transform duration-300 hover:scale-120 cursor-pointer " size={40} />
              <a href="tel:+919234667396" className="hover:underline text-[20px]">9234667396</a>,
              <a href="tel:+917903595077" className="hover:underline text-[20px]">7903595077</a>
            </li>
            <li className="flex gap-2 items-center ">
              <MdEmail className="text-cyan-400 ransition-transform duration-300 hover:scale-120  cursor-pointer" size={40} />
              <a href="mailto:diamondads90@gmail.com" className="hover:underline text-[20px]">diamondads90@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-10 border-t border-cyan-700 pt-3 flex flex-col md:flex-row justify-center items-center  text-xl">
        <span className="mb-2 md:mb-0">© 2024 Marketing Agency. All rights reserved. Bringing your brand everywhere.</span>

      </div>
    </footer>
    <Whatsapp/>
    </>
  );
}
