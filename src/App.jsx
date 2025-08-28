import { Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import "./index.css"; 
import About from "./Component/About";
import Services from "./Component/Services";
import Gallery from "./Component/Gallery";
import Contact from "./Component/Contact";

import PageNotFound from "./Component/PageNotFound";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import ManchProfile from "./Component/ManchProfile";
import KinderHero from "./Component/KinderHero";



export default function App() {
  return (
    <div>
     

      {/* Routes */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/manch" element={<ManchProfile />} />
        <Route path="/kinder-garten" element={<KinderHero/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      
    </div>
  );
}
