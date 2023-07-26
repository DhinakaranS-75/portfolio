import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="Home">
        <div className="Home-details">
          <h1>Hi , I'm <span>Dhinakaran S</span></h1>
          <div className="text-animate">
            <h3>Full Stack Web Developer</h3>
          </div>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
          
          <div className="btn-box">
            <a href="#" className="btn">Hire Me</a>
            <a href="#" className="btn">Let's Talk</a>
          </div>
        </div>


        
      </section>
    </div>
  );
}

export default Home;
