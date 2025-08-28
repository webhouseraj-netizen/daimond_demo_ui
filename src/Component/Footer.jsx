import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";
import image from "../assets/dia-logo.png";
import { Link, useLocation } from "react-router-dom";
import Whatsapp from "./Cards/Whatsapp";

export default function Footer() {
  const location = useLocation();

  // Default numbers
  let phoneNumbers = [{ number: "9234667396" }, { number: "7903595077" }];
  let Email = [{ email: "diamondads90@gmail.com" }];

  if (location.pathname === "/manch") {
    Email = [{ email: "munch@gmail.com" }];

    console.log(Email);
  } else if (location.pathname === "/kinder-garten") {
    Email = [{ email: "info@kgpsbakhri.com" }];
  }

  // Change based on route
  if (location.pathname === "/manch") {
    phoneNumbers = [{ number: "12345" }, { number: "12345" }];
  } else if (location.pathname === "/kinder-garten") {
    phoneNumbers = [{ number: "2525252525" }, { number: "2525252525" }];
  }

  return (
    <>
      <footer className="bg-gradient-to-r from-purple-800 to-blue-900 text-cyan-200 py-8 px-5">
        <div className="lg:max-w-7xl mx-auto grid md:grid-cols-2   lg:grid-cols-[300px_repeat(3,1fr)] gap-12">
          {/* Logo & About */}
          <div className="min-w-[220px]">
            <img
              src={image}
              alt="diamond adsLogo"
              className="h-10 mb-3 text-cyan-200 bg-white"
            />
            <p className="mb-4 text-[19px]">
              Since its inception in 1990, Diamond Ads has been at the forefront
              of the advertising industry, pioneering innovative strategies and
              delivering exceptional results. What began as a vision to redefine
              advertising has transformed into a powerhouse of creativity and
              effectiveness, with a legacy spanning three decades.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                className="bg-[#0D142B] rounded-full p-2 text-cyan-200 hover:bg-cyan-700 duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="bg-[#0D142B] rounded-full p-2 text-cyan-200 hover:bg-cyan-700 duration-200"
                aria-label="X"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="#"
                className="bg-[#0D142B] rounded-full p-2 text-cyan-200 hover:bg-cyan-700 duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                className="bg-[#0D142B] rounded-full p-2 text-cyan-200 hover:bg-cyan-700 duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="min-w-[160px]">
            <h3 className="font-bold text-cyan-300 text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-[19px]">
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-600 hover:scale-105 transition transform duration-300"
                >
                  Newspaper Ads
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-600 hover:scale-105 transition transform duration-300"
                >
                  Print Media
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-blue-600 hover:scale-105 transition transform duration-300"
                >
                  Banners
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-600 hover:scale-105 transition transform duration-300"
                >
                  TV Commercials
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:max-w-[100px]">
            <h3 className="font-bold text-cyan-300 text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[19px]">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-600 hover:scale-105 transition transform duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-600 hover:scale-105 transition transform duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-blue-600 hover:scale-105 transition transform duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-600 hover:scale-105 transition transform duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:w-[400px] ">
            <h3 className="font-bold text-cyan-300 text-lg mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 ">
              <li className="flex gap-2 items-center">
                <MdLocationOn className="text-cyan-400 cursor-pointer text-3xl md:text-[5rem]" />
                <span className="text-[20px]">
                  502, Shanti Heritage, Rukunpura, Bailey Road, Patna-800 014,
                  Bihar.
                </span>
              </li>

              <li className="flex gap-2 items-start">
                <MdCall
                  className="text-cyan-400 cursor-pointer mt-1"
                  size={28}
                />
                <div className="flex flex-wrap gap-4">
                  {phoneNumbers.map((ph, index) => (
                    <a
                      key={index}
                      href={`tel:+91${ph.number}`}
                      className="hover:underline text-[18px] break-all"
                    >
                      +91{ph.number}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex gap-2 items-start">
                <MdEmail
                  className="text-cyan-400 cursor-pointer mt-1"
                  size={28}
                />
                <div className="flex flex-wrap gap-4">
                  {Email.map((em, index) => (
                    <a
                      key={index}
                      href={`mailto:${em.email}`}
                      className="hover:underline text-[18px] break-all"
                    >
                      {em.email}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-cyan-700 pt-3 flex flex-col md:flex-row justify-center items-center text-xl">
          <span className="mb-2 md:mb-0">
            © 2024 Marketing Agency. All rights reserved. Develope by{" "}
            <a href="https://webhouse.co.in/" target="_blank">
              <span className="text-white hover:text-[#00D4FF]">Web house</span>
            </a>
          </span>
        </div>
      </footer>
      <Whatsapp />
    </>
  );
}
