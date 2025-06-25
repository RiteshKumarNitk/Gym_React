import React from 'react';
import workout1 from '../../assets/workout1.png';
import workout2 from '../../assets/workout2.png';
import workout3 from '../../assets/workout3.png';
import workout4 from '../../assets/workout4.png';

const workouts = [
  {
    category: 'Fitness',
    title: 'Fitness Training for Man',
    img: workout1,
  },
  {
    category: 'Boxing',
    title: 'Boxing Training Session',
    img: workout2,
  },
  {
    category: 'Cardio Training',
    title: 'Cardio Training Session',
    img: workout3,
  },
  {
    category: 'Bodybuilding',
    title: 'Bodybuilding Training Session',
    img: workout4,
  },
];

const WorkoutSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-24">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h4 className="text-orange-500 uppercase tracking-wider">— Find Your Exercise</h4>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2">New Exclusive Workouts</h2>
      </div>

      {/* Cards */}
      <div className="grid gap-10 md:grid-cols-4">
        {workouts.map((workout, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 !== 0 ? 'flex-col-reverse' : ''
            } border border-white/10 overflow-hidden rounded-lg shadow-md group`}
          >
            {/* Text Box */}
            <div className="bg-black/80 text-left p-4">
              <p className="text-sm text-orange-500 uppercase tracking-wide">
                {workout.category}
              </p>
              <h3 className="text-lg md:text-xl font-bold">
                {workout.title}
              </h3>
            </div>

            {/* Image */}
            <img
              src={workout.img}
              alt={workout.title}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkoutSection;
