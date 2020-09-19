import React from "react";
import "../styles/Navbar.css";
import { FaAt, FaBars, FaCubes, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbarOuter">
      <button className="contact">
        <FaAt />
      </button>
      <button className="work">
        <FaCubes />
      </button>
      <button className="home">
        <FaHome />
      </button>
      <button className="hamburger">
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
