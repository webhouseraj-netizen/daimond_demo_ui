import { Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

import "./index.css"; 
const Home = lazy(() => import("./Component/Home"));
const About = lazy(() => import("./Component/About"));
const Services = lazy(() => import("./Component/Services"));
const Gallery = lazy(() => import("./Component/Gallery"));
const Contact = lazy(() => import("./Component/Contact"));
const PageNotFound = lazy(() => import("./Component/PageNotFound"));
const ManchProfile = lazy(() => import("./Component/ManchProfile"));
const KinderHero = lazy(() => import("./Component/KinderHero"));




export default function App() {
  return (
    <div>
     

      {/* Routes */}
      <Navbar/>
         <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/manch" element={<ManchProfile />} />
          <Route path="/kinder-garten" element={<KinderHero />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      
    </div>
  );
}
