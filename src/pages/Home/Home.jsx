import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import About from "../../components/About/About.jsx";
import WorkoutPlans from "../../components/WorkoutPlans/WorkoutPlans.jsx";
import Clients from "../../components/Clients-Section/Clients.jsx";
import Contact from "../../components/Contact/Contact.jsx";

const Home = ({ headerHeight }) => {
  return (
    <>
      <Hero headerHeight={headerHeight} />
      <About />
      <WorkoutPlans />
      <Clients />
      <Contact />
    </>
  );
};

export default Home;
