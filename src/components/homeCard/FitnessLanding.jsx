import React from "react";
import { motion } from "framer-motion";
import topImage from "../../assets/topimage.png";
import videoThumbnail from "../../assets/videoThumbnail.png";
import { PlayCircle } from "lucide-react";

const FitnessLanding = () => {
  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
        {/* Left text side */}
        <div className="bg-white flex flex-col justify-center items-start p-10 md:p-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">WORK OUT</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2">3 STEPS TO</h1>
          <h1 className="text-3xl md:text-5xl font-extrabold text-orange-500">
            LOSING WEIGHT
          </h1>
        </div>

        {/* Right image side with animation */}
        <div className="relative bg-orange-500 flex justify-center items-center p-4">
          <motion.img
            src={topImage}
            alt="Workout Woman"
            className="max-h-[500px] w-auto object-contain"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-black text-white min-h-[90vh]">
        {/* Left Image */}
        <div className="relative w-full h-[400px] md:h-auto">
          <img
            src={videoThumbnail}
            alt="Gym Trainer"
            className="w-full h-full object-cover grayscale"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <PlayCircle className="text-white w-16 h-16 hover:scale-105 transition-all" />
          </button>
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-center p-10 md:p-16">
          <div className="flex gap-2">
            <div className="h-1 rounded w-10 mt-4 bg-orange-400"></div>
            <p className="text-orange-500 font-semibold mb-2">WE PROVIDE</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            WORLD CLASS FACILITIES
          </h2>
          <p className="text-gray-400 mb-6 text-base md:text-lg leading-relaxed">
            This also meant we needed to provide a learning environment run by
            experienced and successful coaches. However, our most important goal
            was to create a welcoming atmosphere.
          </p>
          <div className="w-28 h-10 bg-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default FitnessLanding;
