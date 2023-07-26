import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

function Navbar() {
  return (
    <div>
      <nav className="nav_bar">
        <div className="logo">
          <a href="#Dhinakaran"><i class="gg-userlane"></i></a>
          <a href="#Dhinakaran">Dhinakaran</a>
        </div>
        <div className="details">
          <a href="#Home">Home</a>
          <a href="#Skils">Skils</a>
          <a href="#Project">Project</a>
          <a href="#Services">Services</a>
          <a href="#Contact">Contact</a>
        </div>
      </nav>
      <Home />
      
      
    </div>
  );
}

export default Navbar;
