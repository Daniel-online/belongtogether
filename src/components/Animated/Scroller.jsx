import React, { useEffect, useState } from "react";
import "./Scroller.css";

const Scroller = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const renderScrollerContent = (items) => {
    const content = items.map((item, index) => (
      <img key={index} src={item} alt="" />
    ));
    if (!isReducedMotion) {
      return [
        ...content,
        ...content.map((item, index) =>
          React.cloneElement(item, { key: `dup-${index}`, "aria-hidden": "true" })
        ),
      ];
    }
    return content;
  };

  const images1 = [
    "./../../src/assets/depoimentos/dep_1.jpg",
    "./../../src/assets/depoimentos/dep_2.jpg",
    "./../../src/assets/depoimentos/dep_3.jpg",
    "./../../src/assets/depoimentos/dep_4.jpg",
    "./../../src/assets/depoimentos/dep_5.jpg",
    "./../../src/assets/depoimentos/dep_6.jpg",
    
  ]
  const images2 = [

    "./../../src/assets/depoimentos/dep_7.jpg",
    "./../../src/assets/depoimentos/dep_8.jpg",
    "./../../src/assets/depoimentos/dep_9.jpg",
    "./../../src/assets/depoimentos/dep_10.jpg",
    "./../../src/assets/depoimentos/dep_11.jpg",
    "./../../src/assets/depoimentos/dep_12.jpg",
  ]
const images3 = [

    "./../../src/assets/depoimentos/dep_13.jpg",
    "./../../src/assets/depoimentos/dep_14.jpg",
    "./../../src/assets/depoimentos/dep_15.jpg",
    "./../../src/assets/depoimentos/dep_16.jpg",
    "./../../src/assets/depoimentos/dep_17.jpg",
  ]


  return (
    <div className="scroller-wrapper">
      <div
        className="scroller"
        data-direction="right"
        data-speed="fast"
        data-animated={!isReducedMotion}
      >
        <div className="scroller__inner">
          {renderScrollerContent(images1)}
        </div>
      </div>

      <div
        className="scroller"
        data-direction="left"
        data-speed="fast"
        data-animated={!isReducedMotion}
      >
        <div className="scroller__inner">
          {renderScrollerContent(images2)}
        </div>
      </div>

      <div
        className="scroller"
        data-direction="right"
        data-speed="fast"
        data-animated={!isReducedMotion}
      >
        <div className="scroller__inner">
          {renderScrollerContent(images3)}
        </div>
      </div>
    </div>
  );
};

export default Scroller;
