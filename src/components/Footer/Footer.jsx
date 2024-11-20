import React from "react";
import "./Footer.css"; // Import your CSS file for styling
import Logo from "/src/assets/logo/logo-dark.png"; // Adjust the path to your logo image

const Footer = () => {
  return (
    <footer className="footer bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Logo and Description */}
        <div className="footer-column">
          <img src={Logo} alt="Company Logo" className="logo" />
          <h3 className="font-bold text-xl mt-4">Ryan Thompson</h3>
          <p className="text-sm mt-2">
            Your partner in achieving fitness goals and a healthier lifestyle.
          </p>
        </div>

        {/* Column 2: Browse Links */}
        <div className="footer-column">
          <h3 className="font-bold text-lg">Browse</h3>
          <div className="divider"></div>
          <ul className="footer-links">
            <li>
              <a href="/" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-500">
                About Me
              </a>
            </li>
            <li>
              <a href="/training-plans" className="hover:text-orange-500">
                Services
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-orange-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-column">
          <h3 className="font-bold text-lg">Services</h3>
          <div className="divider"></div>
          <ul className="footer-links">
            <li>
              <a
                href="/services/personal-training"
                className="hover:text-orange-500"
              >
                One-on-One Personal Training
              </a>
            </li>
            <li>
              <a
                href="/services/group-workout"
                className="hover:text-orange-500"
              >
                Group Workout
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Socials */}
        <div className="footer-column">
          <h3 className="font-bold text-lg">Socials</h3>
          <div className="divider"></div>
          <ul className="footer-links">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                X
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-orange-500 text-black text-center py-4 font-bold">
        <p>© {new Date().getFullYear()} Ryan Thompson. All rights reserved.</p>
        <p>
          Website Designed and Developed by{" "}
          <a
            href="https://github.com/mirkoterzic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Mirko Terzic
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
