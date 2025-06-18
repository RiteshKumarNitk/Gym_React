import React from 'react';
import Slider from '../Slider';
import Img1 from '../../assets/Img1.png';
import { Dumbbell, Bike, StretchHorizontal } from 'lucide-react'; // Replaced Yoga with valid icon
import Facts from '../homeCard/Facts';
import Trainers from '../homeCard/Trainers';
import WorkoutSection from '../homeCard/WorkoutSection';
import FitnessLanding from '../homeCard/FitnessLanding';
import Timetable from '../homeCard/Timetable';
import TestimonialSlider from '../homeCard/TestimonialSlider';
import Footer from './Footer';


const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Slider Section */}
      <div>
        <Slider />
      </div>

      {/* About Section */}
      <section className="bg-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-start justify-center gap-12">
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2 flex justify-center">

          <img
            src={Img1}
            alt="Strong Body"
            className="w-full max-w-md object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 space-y-6 self-start">
          <h3 className="text-orange-600 font-semibold uppercase tracking-wide">
            About Us
          </h3>

          <h2 className="text-4xl font-extrabold text-black">
            Give a Shape of Your Body
          </h2>

          <p className="text-gray-600">
            This also meant we needed to provide a learning environment run by
            experienced and successful coaches. However, our most important goal
            was to create a welcoming atmosphere and community in which everyone
            feels a sense of belonging.
          </p>

          {/* Feature List */}
          <div className="space-y-4">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <span className="p-2 bg-gray-100 rounded-md">
                <Dumbbell className="text-gray-700" />
              </span>
              <div>
                <h4 className="font-bold text-black">Full-Body Strength</h4>
                <p className="text-gray-600 text-sm">
                  Train with the best experts in bodybuilding field
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <span className="p-2 bg-gray-100 rounded-md">
                <Bike className="text-gray-700" />
              </span>
              <div>
                <h4 className="font-bold text-black">Lean Machines</h4>
                <p className="text-gray-600 text-sm">
                  Our personal trainers will help you find a perfect workout
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <span className="p-2 bg-gray-100 rounded-md">
                <StretchHorizontal className="text-gray-700" />
              </span>
              <div>
                <h4 className="font-bold text-black">Power Yoga</h4>
                <p className="text-gray-600 text-sm">
                  Uniquely sequenced class work to heat and challenge the body
                </p>
              </div>
            </div>
          </div>

          {/* Orange Bottom Bar */}
          <div className="w-24 h-10 bg-orange-500 mt-6"></div>
        </div>
      </section>
      <Facts/>
      <Trainers/>
      <WorkoutSection/>
      <FitnessLanding/>
      <Timetable/>
      <TestimonialSlider/>
      <Footer/>
    </div>
  );
};

export default Home;
