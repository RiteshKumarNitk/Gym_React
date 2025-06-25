import React from 'react';
import { Dumbbell, Building, Smile, Trophy } from 'lucide-react'; // example icons

const Facts = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24 flex flex-col md:flex-row justify-between items-start gap-12">
      
      {/* Left Side: Text */}
      <div className="w-full md:w-1/2 space-y-4 ml-10">
        <div className='flex gap-4'>
            <div className='mt-4 h-1 w-10 rounded bg-orange-500'></div>
        <h3 className="text-orange-600 font-semibold uppercase tracking-wide">
          Some Facts
        </h3>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
          We Always <br />
          Provide Best <br />
          Fitness Service <br />
          For <span className="text-orange-500">25 Years</span>
        </h2>
      </div>

      {/* Right Side: Stats Grid */}
      <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        {/* Fact Box 1 */}
        <div className="border p-6 rounded-md shadow-sm flex items-start gap-4">
          <Dumbbell className="text-orange-500" />
          <div>
            <h3 className="text-2xl font-bold text-orange-500">150</h3>
            <p className="text-gray-600 text-sm">Expert Trainer</p>
          </div>
        </div>

        {/* Fact Box 2 */}
        <div className="border p-6 rounded-md shadow-sm flex items-start gap-4">
          <Building className="text-orange-500" />
          <div>
            <h3 className="text-2xl font-bold text-orange-500">75</h3>
            <p className="text-gray-600 text-sm">Total Branch</p>
          </div>
        </div>

        {/* Fact Box 3 */}
        <div className="border p-6 rounded-md shadow-sm flex items-start gap-4">
          <Smile className="text-orange-500" />
          <div>
            <h3 className="text-2xl font-bold text-orange-500">250</h3>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
        </div>

        {/* Fact Box 4 */}
        <div className="border p-6 rounded-md shadow-sm flex items-start gap-4">
          <Trophy className="text-orange-500" />
          <div>
            <h3 className="text-2xl font-bold text-orange-500">18</h3>
            <p className="text-gray-600 text-sm">Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
