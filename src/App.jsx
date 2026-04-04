import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full font-inter text-white selection:bg-white/20">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <Footer />
    </div>
  );
};

export default App;
