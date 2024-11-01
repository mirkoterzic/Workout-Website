import React from "react";
import aboutImage from "/src/assets/images/about-image.jpg";
import "./about.css"; // Import your CSS file

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-7">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold underline">
            My Story and Philosophy
          </h2>
        </div>
        <div className="flex lg:gap-28 flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 image-container">
            <img
              src={aboutImage}
              alt="About Me"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-6">
            <h3 className="text-3xl font-extrabold">
              Welcome to{" "}
              <span className="text-orange-500">your fitness journey!</span>
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed font-semibold">
              I’m <span className="text-orange-500">Ryan Thompson</span>, a
              certified personal trainer with over{" "}
              <span className="text-orange-500">10 years</span> of experience
              helping clients achieve their fitness goals. My passion for
              fitness started during my college years, and after earning my
              degree in <span className="text-orange-500">Kinesiology</span>, I
              dedicated my career to transforming lives through personalized
              training programs and nutritional guidance.
            </p>
            <h3 className="text-3xl lg:mt-24 font-extrabold mt-6">
              My Fitness Philosophy
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed font-semibold">
              Fitness isn’t just about how you look; it’s about creating a
              healthy lifestyle that enhances your overall well-being. I take a
              holistic approach to fitness, addressing not only{" "}
              <span className="text-orange-500">physical health</span> but also{" "}
              <span className="text-orange-500">mental</span> and{" "}
              <span className="text-orange-500">emotional well-being</span>.
              Every individual has unique goals and challenges, and I strive to
              empower my clients with the knowledge and tools they need to take
              control of their health and wellness for life.
            </p>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-12 mb-12">
          <h3 className="text-3xl font-extrabold text-center mb-6">
            My Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="certificate-card flex flex-col items-center p-4 rounded-lg shadow-lg"
              >
                <div className="icon-container mb-2">
                  <img
                    src={cert.icon}
                    alt={cert.name}
                    className={`max-w-[80px] max-h-[80px] lg:max-w-[100px] lg:max-h-[100px] ${
                      cert.name ===
                      "Certified Strength and Conditioning Specialist (CSCS)"
                        ? "ml-1"
                        : ""
                    }`}
                  />
                </div>
                <h4 className="text-lg font-semibold text-center">
                  {cert.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample data for certificates
const certificates = [
  {
    name: "Certified Personal Trainer (CPT)",
    icon: "/src/assets/icons/diploma_whhite-removebg-preview.png",
  },
  {
    name: "Certified Strength and Conditioning Specialist (CSCS)",
    icon: "/src/assets/icons/kettlebell_white-removebg-preview.png",
  },
  {
    name: "Nutrition Coach",
    icon: "/src/assets/icons/meal_white-removebg-preview.png",
  },
  {
    name: "CPR/AED Certified",
    icon: "/src/assets/icons/heart_-removebg-preview.png",
  },
];

export default About;
