import { React } from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="Hero">
      <div className="welcome">
        <h2>WELCOME !</h2>
        <h1>Shuaib Abdulrazaq</h1>
        <h2>Here</h2>
      </div>
      <div className="titles">
        <ul>
          <li>FrontEnd Developer</li>
          <li>Designer</li>
          <li>Professional Clown</li>
        </ul>
        <a className="download" href="/">Download Resume</a>
      </div>
    </section>
  );
}
export default Hero;
