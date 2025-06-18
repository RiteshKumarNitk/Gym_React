import React, { useState, useEffect } from "react";

const images = [
  "/src/assets/slide1.jpg",
  "/src/assets/slide2.jpg",
  "/src/assets/slide3.jpg",
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 2 seconds
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          alt={`Slide ${index + 1}`}
        />
      ))}

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-1 rounded-full ${
              index === current ? "bg-orange-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
