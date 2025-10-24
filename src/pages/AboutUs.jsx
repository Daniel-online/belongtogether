import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "./../components/Content/Hero";
import Paragraph from "../components/Content/Paragraph";
import PropTypes from "prop-types";

// Backgrounds
import imgDesktop from "./../../src/assets/Sobre_mim.png";
import imgMobile from "./../../src/assets/Sobre_mim_mobile.png";

const AboutUs = ({ id }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth <= 768);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    document.title = "Sobre Mim";
  }, []);

  const bgImage = isMobile ? imgMobile : imgDesktop;
  const titleText = "SOBRE MIM";

  return (
    <div id={id} className="relative w-full overflow-hidden">
      {/* HERO */}
      <Hero
        title=""
        data={[]}
        hasText={false}
        hasButton={false}
        bgImage={bgImage}
        style={`
          bg-black bg-cover bg-center bg-no-repeat
          flex flex-col justify-center items-center
          min-h-[100dvh] w-full relative
        `}
        scrollRef="depoimentos"
        scrollStyle="text-white bg-red-500 hover:bg-black hover:text-red-500 hover:border-2 hover:border-red-500"
      />

      {/* OVERLAY CONTENT */}
      <div
        className={`absolute inset-0 flex ${isMobile
            ? "flex-col items-center justify-center text-center p-4 gap-4"
            : "flex-row items-center justify-center text-left px-24 gap-16"
          }`}
      >
        {/* Left side (empty for mobile, shows hero background) */}
        {!isMobile && <div className="flex-1" />}

        {/* Right side content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`flex flex-col ${isMobile ? "items-center" : "items-start"
            } max-w-2xl`}
        >
          <motion.h1
            className={`font-extrabold text-red-500 drop-shadow-[0_0_10px_rgba(0,0,0,0.6)] ${isMobile ? "text-4xl mb-4" : "text-7xl mb-8"
              }`}
          >
            SOBRE MIM
          </motion.h1>

          <Paragraph
            title={isMobile ? "Guilherme Caldeira" : "Quem sou eu?"}
            text={
              isMobile
                ? ` Massoterapeuta especializado em terapias corporais, com anos de experiência em técnicas de relaxamento e reabilitação.`
                : `Guilherme Caldeira é a harmonia entre toque, ritmo e presença. Massoterapeuta de mãos precisas, DJ que sente cada batida e modelo que vive a arte do corpo em movimento. Entre o relaxar e o vibrar, ele convida você a experimentar o equilíbrio perfeito entre energia e desejo.`
            }
            titleStyle={`text-white ${isMobile ? "text-center text-2xl" : "text-left text-3xl"
              } font-bold mb-4`}
            textStyle={`text-white ${isMobile ? "text-center text-base" : "text-left text-lg"
              } bg-black bg-opacity-50 p-4 rounded-lg max-w-xl`}
          />
        </motion.div>
      </div>

    </div>
  );
};

AboutUs.propTypes = {
  id: PropTypes.string,
};

export default AboutUs;
