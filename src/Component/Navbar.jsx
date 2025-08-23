import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import image from "../assets/dia-logo.png";
import video from "../assets/logo.mp4"


const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Active style for NavLink
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1 transition"
      : "hover:text-cyan-400 transition";

  return (
    <nav className="bg-gradient-to-r from-[#0f1029] to-[#5f249b] px-4  flex items-center justify-between relative">
      {/* Logo */}
      {/* <div className="flex items-center">
        <Link to="/" className="bg-white  text-white"><img className="h-[70px] w-[170px] text-white" src={image} alt="Logo" /></Link>
      </div> */}
      <div className="flex items-center">
        <Link to="/" className="bg-[#ffffff] text-white">
          <video
            className="h-[70px] w-[190px] object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            alt="Logo Video"
          />
        </Link>
      </div>


      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 text-white font-bold lg:text-2xl">
        <li>
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
        </li>
        <li>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
        </li>
        <li className="relative">
          <button
            type="button"
            onClick={() => setDropdown(!dropdown)}
            className="flex items-center gap-1 focus:outline-none"
          >
            Associates
            <svg
              className={`w-4 h-4 transform ${dropdown ? "rotate-180" : ""} transition`}
              fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {dropdown &&
            <ul className="absolute top-full left-0 bg-[#251444] min-w-[150px] rounded-lg shadow-md py-2 z-50">
              <li>
                <NavLink
                  to="/manch"
                  className="block px-4 py-2 text-white hover:bg-cyan-700 transition text-[15px]"
                >
                  MUNCH
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="kinder-garten"
                  className="block px-4 py-2 text-white hover:bg-cyan-700 transition text-[15px]"
                >
                  Kinder garten
                </NavLink>
              </li>
            </ul>
          }
        </li>
        <li>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </li>
        {/* Admin Button */}
        <li>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `ml-4 px-5 py-2 rounded-full font-semibold shadow transition hover:scale-105 
               ${isActive
                ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                : "bg-gradient-to-r from-cyan-400 to-purple-400 text-white"}`
            }
          >
            Admin
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        <button type="button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            // Close Icon
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`z-50 md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-[#0f1029] to-[#5f249b] transition-all ${menuOpen ? "max-h-[500px] p-6" : "max-h-0 overflow-hidden p-0"}`}>
        <ul className="flex flex-col gap-4 text-white font-medium">
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={navLinkClass}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setMenuOpen(false)} className={navLinkClass}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className={navLinkClass}>Gallery</NavLink>
          </li>
          <li>
            {/* Mobile Dropdown */}
            <button type="button" onClick={() => setDropdown(!dropdown)} className="w-full text-left flex items-center gap-1">
              Associates
              <svg
                className={`w-4 h-4 transform ${dropdown ? "rotate-180" : ""} transition`}
                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdown &&
              <ul className="bg-[#251444] rounded-lg mt-2">
                <li>
                  <NavLink
                    to="/manch"
                    className="block px-4 py-2 text-white hover:bg-cyan-700 transition"
                    onClick={() => { setMenuOpen(false); setDropdown(false); }}
                  >
                    MUNCH
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/kinder-garten"
                    className="block px-4 py-2 text-white hover:bg-cyan-700 transition"
                    onClick={() => { setMenuOpen(false); setDropdown(false); }}
                  >
                    Kinder garten
                  </NavLink>
                </li>
              </ul>
            }
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass}>Contact</NavLink>
          </li>
          {/* Admin Button */}
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `px-5 py-2 rounded-full font-semibold shadow transition hover:scale-105 w-full 
                 ${isActive
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                  : "bg-gradient-to-r from-cyan-400 to-purple-400 text-white"}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
