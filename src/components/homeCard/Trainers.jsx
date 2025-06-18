import React from 'react';
import Coach1 from '../../assets/coach1.png';
import Coach2 from '../../assets/coach2.png';
import Coach3 from '../../assets/coach3.png';
import bgtrainer from '../../assets/bgtrainer.jpg';
const Trainers = () => {
  return (
    <section className="py-16 px-6 md:px-24 text-center relative">
      {/* Section Title */}
      <h3 className="text-orange-600 font-semibold uppercase tracking-wide">
        Our Trainer
      </h3>
      <h2 className="text-4xl md:text-5xl font-extrabold text-black my-2">
        Team of Expert <br /> Coaches
      </h2>
      <div className="w-12 h-[3px] bg-pink-500 mx-auto mt-4 mb-10"></div>

      {/* Images Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img
          src={Coach1}
          alt="Trainer 1"
          className="w-[250px] h-[350px] object-cover rounded-md shadow-lg"
        />
        <img
          src={Coach2}
          alt="Trainer 2"
          className="w-[250px] h-[350px] object-cover rounded-md shadow-lg"
        />
        <img
          src={Coach3}
          alt="Trainer 3"
          className="w-[250px] h-[350px] object-cover rounded-md shadow-lg"
        />
      </div>
    </section>
  );
};

export default Trainers;
