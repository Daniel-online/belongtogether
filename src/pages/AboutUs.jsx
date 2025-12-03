import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "./../components/Content/Hero";
import Paragraph from "../components/Content/Paragraph";
import profilesData from "./../Data/aboutus.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import imgDesktop from "./../../src/assets/Sobre_mim.png";
import imgMobile from "./../../src/assets/Sobre_mim_mobile.png";

const AboutUs = ({ id }) => {
  const [isMobile, setIsMobile] = useState(false);

  const carouselRef = useRef(null);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth <= 768);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // UPDATE PAGE TITLE
  useEffect(() => {
    document.title = "Sobre Nós";
  }, []);

  const bgImage = isMobile ? imgMobile : imgDesktop;

  // Scroll functions
  const scrollLeft = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div id={id} className="relative w-full overflow-hidden">

      {/* HERO SECTION */}
      <Hero
        title=""
        data={[]}
        hasText={false}
        hasButton={false}
        bgImage={bgImage}
        style="
          bg-black bg-cover bg-center bg-no-repeat
          flex flex-col justify-center items-center
          min-h-[70dvh] w-full relative
        "
      />

      {/* --- OVERLAY CONTENT --- */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
        <motion.h1
          className={`font-extrabold text-red-500 drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]
            ${isMobile ? "text-4xl mb-4" : "text-7xl mb-8"}
          `}
        >
          SOBRE NÓS
        </motion.h1>

        {/* Side Scroll Container */}
        <div className="relative w-full max-w-6xl">

          {/* LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
          >
            <FaChevronLeft size={22} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="absolute right-0 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
          >
            <FaChevronRight size={22} />
          </button>

          {/* Horizontal scroll list */}
          <div
            ref={carouselRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth
              py-6 px-10
              no-scrollbar
            "
          >
            {profilesData.map((profile, index) => (
              <motion.div
                key={index}
                className="
                  min-w-[300px] max-w-[300px]
                  bg-black/60 backdrop-blur-md
                  border border-white/10 rounded-xl
                  shadow-lg p-6 flex flex-col items-center text-center
                "
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-red-500"
                />

                <h2 className="text-white text-xl font-bold mb-2">
                  {profile.title || "Quem sou eu?"}
                </h2>

                <Paragraph
                  title={profile.name}
                  text={profile.text}
                  titleStyle="text-white text-lg font-bold text-center"
                  textStyle="text-white text-sm text-center"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
