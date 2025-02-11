import { useState } from "react";
import carouselData from "../../Data/carouselData.json";
// import TextBreaker from "./TextBreaker";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = () => {
  // State to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Container for all slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselData.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-full p-4">
            {/* Card with hover effect */}
            <div
              className="p-4 bg-white/80 rounded-xl flex flex-col items-center 
                         transition-all duration-300 transform hover:scale-105 hover:backdrop-blur-md"
            >
              <img
                className="rounded-lg bg-cover w-screen h-auto"
                src={card.image}
                alt={card.alt}
              />
              {/* <h3 className="font-bold">{card.title}</h3>
              <h5 className="font-semibold">{card.subTitle}</h5> */}
              {/* <TextBreaker text={card.description} wordsPerParagraph={50} /> */}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 
                   bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 
                   bg-violet-600 text-white p-2 rounded-full focus:outline-none text-yellow-600 font-bold"
      >

        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carousel;
