import { React } from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="Hero">
      <div className="welcome">
        <h2>WELCOME !</h2>
        <h1>Shuaib Abdulrazaq</h1>
        <h2><span>Here</span></h2>
      </div>

      <div className="titles">
        <ul>
          <li>FrontEnd Developer</li>
          <li>Designer</li>
          <li>Professional Clown</li>
        </ul>
        <p><a className="download" href="/">Download Resume</a></p>
      </div>
      <div className="Floaty">
      <p><a href="#about">About</a></p>
      <span>

      </span>
      <p><a href="#exp">Experience</a></p>
      </div>
      {/* <div className="righty Floaty"></div> */}
    </section>
  );
}
export default Hero;
