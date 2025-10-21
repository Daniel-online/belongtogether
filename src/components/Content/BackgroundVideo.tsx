import React, { useState, useEffect, useRef } from 'react';

const BackgroundVideo = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Force video playback on mobile
  useEffect(() => {
    if (videoRef.current && videoLoaded) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
        // Fallback: try playing with user interaction
        const playVideo = () => {
          videoRef.current?.play();
          document.removeEventListener('click', playVideo);
        };
        document.addEventListener('click', playVideo);
      });
    }
  }, [videoLoaded]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Single Video Element for Both Mobile & Desktop */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoadedData={() => setVideoLoaded(true)}
        onError={(e) => {
          console.error("Video loading error:", e);
          setVideoLoaded(true); // Still show content even if video fails
        }}
        poster="/smoke-gui-poster.jpg"
      >
        {/* Mobile Video Source - comes first for priority */}
        <source
          src="./src/assets/mobile_smoke_compressed.mp4"
          media="(max-width: 768px)"
          type="video/mp4"
        />
        {/* Desktop Video Source */}
        <source
          src="./src/assets/compressed_smoke.mp4"
          media="(min-width: 769px)"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Loading State */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-2xl bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          Uma Experiência Inesquecível
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl drop-shadow-lg leading-relaxed">
          Tratamento especializado, cuidadoso e profissional de quem sabe do que{' '}
          <span className="italic font-bold text-red-400">você</span> precisa.
        </p>
        <button className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-50 text-red-500 font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
          CONHECER MAIS
        </button>
      </div>
    </div>
  );
};

export default BackgroundVideo;