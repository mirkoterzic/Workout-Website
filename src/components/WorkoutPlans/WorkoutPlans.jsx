import React from "react";
import "./WorkoutPlans.css"; // Import your CSS file for additional styling

const WorkoutPlans = () => {
  return (
    <div className="workout-plans-section py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          Workout Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 cursor-default">
          {/* One-on-One Personal Training - Card */}
          <div className="card p-6 rounded-lg shadow-lg bg-gradient-to-b from-black to-gray-800 text-white">
            <h3 className="text-3xl font-bold text-center mb-4 text-orange-500">
              One-on-One Personal Training
            </h3>
            <h4 className="text-xl text-center mb-4">Tailored Just for You</h4>
            <p className="text-lg leading-relaxed text-center mb-6">
              Get customized training sessions that are focused entirely on your
              fitness goals. Ideal for anyone who needs specialized attention
              for form, technique, and continuous progress.
            </p>
            <ul className="card-list text-center text-lg mb-6">
              <li>Personalized workout plans</li>
              <li>One-on-one coaching</li>
              <li>Custom nutrition guidance</li>
              <li>Progress tracking and adjustment</li>
              <li>Real-time form correction</li>
            </ul>
            <p className="text-center mb-4">
              <span className="font-semibold text-orange-500">
                Perfect for:
              </span>{" "}
              Beginners, athletes, or those with specific fitness goals.
            </p>
            <div className="text-center">
              <a href="#" className="cta-button-gradient">
                Learn more
              </a>
            </div>
          </div>

          {/* Group Workouts - Card */}
          <div className="card p-6 rounded-lg shadow-lg bg-gradient-to-b from-black to-gray-800 text-white">
            <h3 className="text-3xl font-bold text-center mb-4 text-orange-500">
              Group Workouts
            </h3>
            <h4 className="text-xl text-center mb-4">
              Motivation through Community
            </h4>
            <p className="text-lg leading-relaxed text-center mb-6">
              Join fun and dynamic group workout sessions designed for all
              fitness levels. These workouts provide a sense of community,
              motivating you to push your limits alongside others.
            </p>
            <ul className="card-list text-center text-lg mb-6">
              <li>High-energy group challenges</li>
              <li>Supportive environment</li>
              <li>Varied exercises for all levels</li>
              <li>Boost motivation with team spirit</li>
              <li>Accountability through group progress</li>
            </ul>
            <p className="text-center mb-4">
              <span className="font-semibold text-orange-500">
                Perfect for:
              </span>{" "}
              Those who enjoy working out in a group and thrive on social
              motivation.
            </p>
            <div className="text-center">
              <a href="#" className="cta-button-gradient">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlans;
