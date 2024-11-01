import React, { forwardRef } from "react";
import "./Header.css";

const Header = forwardRef((props, ref) => (
  <div
    ref={ref}
    className="w-full py-5 px-10 bg-black flex justify-between items-center"
  >
    <img
      className="max-h-[50px]"
      src="/src/assets/logo/logo-dark.png"
      alt="Logo"
    />
    <ul className="xs:hidden sm:flex nav text-white gap-8 mr-3 font-bold ">
      <li className="cursor-pointer">
        <a href="/">Home</a>
      </li>
      <li className="cursor-pointer">
        <a href="/about">About Me</a>
      </li>
      <li className="cursor-pointer">
        <a href="#">Services</a>
      </li>
      <li className="cursor-pointer">
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
));

export default Header;
