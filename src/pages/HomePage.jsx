import React from "react";
import HeroSection from "../components/home/HeroSection";
import FooterMain from "../components/footer/FooterMain";

const HomePage = () => {
  return (
    <div className="h-[100dvh] w-[100dvw] bg-slate-200">
      <HeroSection />
      <FooterMain />
      </div>
  );
};

export default HomePage;