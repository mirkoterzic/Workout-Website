import React, { useEffect } from "react";

import "./AboutPage.css";

const AboutPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const headingElement = document.getElementById("certifications-heading");
      const gradientElement = document.getElementById("lineGradient");
      const stop1 = gradientElement.children[0]; // Orange stop
      const stop2 = gradientElement.children[1]; // Gray stop

      if (headingElement && stop1 && stop2) {
        const headingPosition = headingElement.offsetTop; // Get the heading's position relative to the document
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY - 250; // Get the current scroll position

        // Calculate total scrollable height
        const totalScrollableHeight = document.body.scrollHeight - windowHeight;

        // Calculate scroll progress based on the current scroll position
        const scrollProgress = Math.min(
          1,
          Math.max(
            0,
            (scrollTop - headingPosition + windowHeight) / totalScrollableHeight
          )
        );

        // Log to check scroll progress values
        console.log(`Scroll Progress: ${scrollProgress}`);

        // Set the gradient stops
        const orangeOffset = `${scrollProgress * 130}%`; // Orange will reach 90% at the bottom
        const grayOffset = `${scrollProgress * 150}%`; // Gray will reach 100%

        // Update gradient stops for smooth transition
        stop1.setAttribute("offset", orangeOffset);
        stop2.setAttribute("offset", grayOffset);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-7">
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-14">
          <h2 className="text-4xl font-bold underline">
            My Story and Philosophy
          </h2>
        </section>

        <div className="flex lg:gap-28 flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 image-container">
            <img
              src="../assets/images/about-image.jpg"
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

        {/* Journey and Certifications Section */}
        <div id="certifications-heading" className="mt-12 mb-12">
          <h3 className="text-3xl font-extrabold text-center mb-6">
            My Journey Through Certifications
          </h3>
          <div className="journey-container flex flex-col items-center w-full">
            <svg
              className="divide"
              viewBox="0 0 2 1000"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="orange" />
                  <stop offset="0%" stopColor="gray" />
                </linearGradient>
              </defs>
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="1000"
                stroke="url(#lineGradient)"
                strokeWidth="2" // Adjust width if needed
              />
            </svg>

            {journey.map((step, index) => (
              <div
                key={index}
                className={`journey-card journey-card-${
                  index + 1
                } relative flex flex-col items-center p-4 rounded-lg shadow-lg mb-6 w-full `}
              >
                <div className="icon-container mb-2">
                  <img
                    src={step.icon}
                    alt={step.name}
                    className="max-w-[80px] max-h-[80px] lg:max-w-[100px] lg:max-h-[100px]"
                  />
                </div>
                <div className="bg-orange-500 text-white px-4 py-1 rounded-full mb-4 font-bold">
                  {step.year}
                </div>
                <h4 className="text-lg font-semibold text-center mb-2">
                  {step.name}
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed text-center">
                  {step.story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Expanded Journey Data
const journey = [
  {
    year: "2013",
    name: "Certified Personal Trainer (CPT)",
    icon: "./assets/icons/diploma_whhite-removebg-preview.png",
    story:
      "My journey began with the Certified Personal Trainer (CPT) certification. It was the first step in turning my passion for fitness into a career. This certification gave me the tools to design safe and effective workout plans for my clients, focusing on their individual needs.",
  },
  {
    year: "2015",
    name: "Certified Strength and Conditioning Specialist (CSCS)",
    icon: "./assets/icons/kettlebell_white-removebg-preview.png",
    story:
      "Earning my CSCS certification took my expertise to the next level. This allowed me to work with athletes and advanced clients, focusing on performance enhancement, strength training, and injury prevention. It pushed me to deeply understand biomechanics and sports science.",
  },
  {
    year: "2018",
    name: "Nutrition Coach",
    icon: "./assets/icons/meal_white-removebg-preview.png",
    story:
      "Realizing that fitness isn't just about workouts, I pursued Nutrition Coaching. This certification empowered me to guide my clients toward balanced, sustainable eating habits that complement their training, helping them achieve their body composition goals.",
  },
  {
    year: "2020",
    name: "CPR/AED Certified",
    icon: "./assets/icons/heart_-removebg-preview.png",
    story:
      "Safety is always a priority. My CPR/AED certification ensures that I can provide immediate assistance in case of emergencies during training sessions, giving my clients peace of mind knowing they're in safe hands.",
  },
];

export default AboutPage;
