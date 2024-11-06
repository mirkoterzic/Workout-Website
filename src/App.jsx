import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx"; // Import the Home page
import AboutPage from "./pages/About/AboutPage.jsx"; // Import the About page
import TrainingPlanPage from "./pages/TrainingPlan/TrainingPlanPage.jsx";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight); // Get the height of the header
    }

    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <Header ref={headerRef} />
      <Routes>
        <Route path="/" element={<Home headerHeight={headerHeight} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/training-plans" element={<TrainingPlanPage />} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
