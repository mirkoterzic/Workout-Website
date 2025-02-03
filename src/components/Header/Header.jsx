import React, { forwardRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons for hamburger and close icons
import "./Header.css";

const Header = forwardRef((props, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      ref={ref}
      className="w-full py-5 px-10 bg-black flex justify-between items-center relative sticky top-0 z-50"
    >
      {/* Logo */}
      <img
        className="max-h-[50px]"
        src="./assets/logo/logo-dark.png"
        alt="Logo"
      />

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex nav text-white gap-8 font-bold  text-[1.3rem]">
        <li className="cursor-pointer hover:text-orange">
          <a href="/">Home</a>
        </li>
        <li className="cursor-pointer hover:text-orange">
          <a href="/about">About Me</a>
        </li>
        <li className="cursor-pointer hover:text-orange">
          <a href="/training-plans">Training Plans</a>
        </li>
        <li className="cursor-pointer hover:text-orange">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Hamburger Menu Icon (Mobile) */}
      <button
        onClick={toggleMenu}
        className="sm:hidden text-white text-3xl focus:outline-none z-50"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-40 flex flex-col items-center justify-center transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="text-white text-2xl font-bold gap-8 flex flex-col items-center">
          <li className="cursor-pointer hover:text-orange">
            <a href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li className="cursor-pointer hover:text-orange">
            <a href="/about" onClick={() => setIsMenuOpen(false)}>
              About Me
            </a>
          </li>
          <li className="cursor-pointer hover:text-orange">
            <a href="/training-plans" onClick={() => setIsMenuOpen(false)}>
              Training Plans
            </a>
          </li>
          <li className="cursor-pointer hover:text-orange">
            <a href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});

export default Header;
