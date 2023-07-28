import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleshow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div>
      <header  className={`nav_bar ${show && "nav_black"}`}>
        <div className="logo">
          <a href="#Dhinakaran">
            <i class="gg-userlane"></i>
          </a>
          <a href="#Dhinakaran">Dhinakaran</a>
        </div>
        <nav className="details">
          <a href="#Home">Home</a>
          <a href="#about">About</a>
          <a href="#Skils">Skils </a>
          <a href="#Project">Project</a>
          <a href="#Contact">Contact</a>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
