import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [animatedText, setAnimatedText] = useState("");
  const texts = ["Full-Stack Developer", "Full-Stack Developer"];
  let textIndex = 0;
  let charIndex = 0;

  useEffect(() => {
    const typeWriter = setInterval(() => {
      if (charIndex <= texts[textIndex].length) {
        setAnimatedText(texts[textIndex].slice(0, charIndex));
        charIndex++;
      } else {
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length;
      }
    }, 200); 

    return () => {
      clearInterval(typeWriter);
    };
  }, []);

  const textColor = animatedText === texts[0].slice(0, animatedText.length) ? "#00abf0" : "black";

  return (
    <div>
      <section className="Home section">
        <div className="Home-details">
          <h1>
            Hi, I'm
            <span>Dhinakaran S</span>
          </h1>
          <div className="text-animate">
            <h3 style={{ color: textColor }}>{animatedText}</h3>
          </div>

          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups
          </p>

          <div className="btn-box">
            <a href="/images/myw3schoolsimage.jpg" className="btn" download>Resume</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
