import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testImage from "../../assets/testImage.png";
import workout1 from '../../assets/workout1.png';
import workout2 from '../../assets/workout2.png';

const testimonials = [
  {
    name: "JACK LONDON",
    role: "Nutritionist",
    image: testImage,
    text: "The program works every part of the body and helps everyone achieve their goals. I’m feeling the best I have ever felt in my life.... I feel healthier physically as well as mentally.",
  },
  {
    name: "SOPHIA REED",
    role: "Fitness Coach",
    image: workout1,
    text: "This training plan gave me the confidence and consistency I was lacking. I’ve gained strength, lost weight, and I feel more disciplined.",
  },
  {
    name: "RYAN SMITH",
    role: "Athlete",
    image: workout2,
    text: "Joining this program was the best decision I’ve made. It’s transformed how I approach fitness and health. I recommend it to everyone serious about change.",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 md:px-20 py-10 overflow-x-hidden">
      
      {/* Heading */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-1 w-12 rounded bg-orange-500"></div>
          <p className="text-orange-500 font-semibold">FITNESS EXPERT</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          WHAT OUR <br />
          CLIENTS SAY?
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="bg-white text-black w-full max-w-xl p-6 rounded shadow-lg relative">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold">{testimonials[index].name}</h4>
            <p className="text-orange-500 text-sm">{testimonials[index].role}</p>
          </div>
          <Quote className="ml-auto text-gray-300 w-10 h-10" />
        </div>
        <p className="text-gray-700">{testimonials[index].text}</p>

        {/* Slider Dots */}
        <div className="flex gap-2 mt-4 justify-center">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
