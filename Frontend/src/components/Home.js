import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import RoleSection from "../LandingFolder/Rolesection";
import ItemShowCase from "../LandingFolder/ItemShowCase";
import InspirationCorner from "../LandingFolder/InspirationCorner";
import HeroSection from "../LandingFolder/HeroSection";

const sections = [RoleSection, ItemShowCase, InspirationCorner];

const Home = () => {
  const [index, setIndex] = useState(0);

  // Transition effect setup for sliding sections
  const transitions = useTransition(index, {
    keys: index,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    config: { tension: 280, friction: 30 },
  });

  // Handlers for navigation
  const handleNext = () => setIndex((index + 1) % sections.length);
  const handlePrev = () => setIndex((index - 1 + sections.length) % sections.length);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section at the top */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* Sliding Sections below HeroSection */}
      <div className="relative w-full h-screen overflow-hidden">
        {transitions((style, i) => {
          const Page = sections[i];
          return (
            <animated.div style={style} className="absolute w-full h-full top-0">
              <Page />
            </animated.div>
          );
        })}

        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 bg-black bg-opacity-70 rounded-full p-3 shadow-lg hover:bg-opacity-90 transition-all duration-300"
        >
          &lt;
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 bg-black bg-opacity-70 rounded-full p-3 shadow-lg hover:bg-opacity-90 transition-all duration-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Home;
