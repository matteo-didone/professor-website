"use client";
import { useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Expertise from "./sections/Expertise";
import Certifications from "./sections/Certifications";
import Registration from "./sections/Registration";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Expertise />
      <Certifications />
      <Registration />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;