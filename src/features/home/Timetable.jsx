import React from "react";

const schedule = {
  Monday: { "06am": "CARDIO", "08am": "POWER LIFTING", "05pm": "DUMBBELLING", "07pm": "CARDIO" },
  Tuesday: { "07am": "CYCLING", "05pm": "YOGA", "07pm": "POWER LIFTING" },
  Wednesday: { "06am": "YOGA", "07am": "BOXING", "05pm": "CYCLING", "07pm": "DUMBBELLING" },
  Thursday: { "06am": "CARDIO", "08am": "CYCLING", "06pm": "POWER LIFTING" },
  Friday: { "07am": "POWER LIFTING", "05pm": "JUMPING", "07pm": "JUMPING" },
  Saturday: { "07am": "CYCLING", "06pm": "DUMBBELLING" },
  Sunday: { "06am": "YOGA", "08am": "POWER LIFTING", "05pm": "CARDIO", "07pm": "WEIGHT LOSS" },
};

const times = ["06am", "07am", "08am", "05pm", "06pm", "07pm"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Timetable = () => {
  return (
    <div className="bg-white px-4 md:px-20 py-16">
      <div className="text-center mb-10">
        <p className="text-orange-500 font-medium tracking-wide">— OUR TIMETABLE</p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">WORKING HOURS<br />& CLASSES</h2>
      </div>

      <div className="overflow-auto">
        <div className="grid grid-cols-[80px_repeat(7,1fr)] border-t border-l border-gray-700 text-sm text-white">
          {/* Header Row */}
          <div className="bg-black font-semibold text-white p-4 border-b border-r border-gray-700">ROUTINE</div>
          {days.map((day) => (
            <div key={day} className="bg-orange-500 font-semibold text-center p-4 border-b border-r border-gray-700">{day}</div>
          ))}

          {/* Time Rows */}
          {times.map((time) => (
            <React.Fragment key={time}>
              <div className="bg-orange-500 font-bold flex items-center justify-center border-b border-r border-gray-700 p-4">
                {time}
              </div>
              {days.map((day) => {
                const activity = schedule[day][time];
                return (
                  <div
                    key={day + time}
                    className={`border-b border-r border-gray-700 p-4 text-center ${
                      activity ? "bg-black text-white font-medium" : "bg-gray-100"
                    }`}
                  >
                    {activity && (
                      <>
                        <div>{activity}</div>
                        <div className="text-xs text-gray-400 mt-1">
                          {time === "06am" ? "06 am - 07 am" :
                          time === "07am" ? "07 am - 08 am" :
                          time === "08am" ? "08 am - 09 am" :
                          time === "05pm" ? "05 pm - 06 pm" :
                          time === "06pm" ? "06 pm - 07 pm" :
                          "07 pm - 08 pm"}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timetable;
