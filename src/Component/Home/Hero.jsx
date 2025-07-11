import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css"; // import AOS styles
import { Link } from "react-router-dom";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Optional: duration and animate once
  }, []); // run once on mount

  return (
    <>
      <section id="hero-sec">
        <div className="hero-class">
          <div className="left" data-aos="zoom-in-down"> {/* animate this div */}
            <img
              className="img"
              src="./assets/Images/pramod.png"
              alt="Pramod Kumar"
            />
          </div>
          <div className="right">
            <div className="hero-container" data-aos="zoom-in-left">
              <div className="heading">
                <h1>
                  <span className="color-box">Hi, this is</span>
                </h1>
                <h2>Pramod Kumar</h2>
              </div>
              <TypeAnimation
                className="frontend"
                sequence={[
                  "Spring Boot Developer",
                  1000,
                  "Software Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
              <p className="para">
                I’m a Java Full Stack Developer with over 3 years of experience building robust Spring Boot applications,
                RESTful APIs, and secure authentication systems using JWT and MySQL.
                I also specialize in modern frontend development using React.js, Tailwind CSS,
                and responsive UI design to create clean and user-friendly interfaces.
                Let’s bring your backend and frontend ideas to life — fast, reliable, and scalable.
                <br />
                <br />
                Working for myself to improve my skills.
              </p>
              <div className="hero-secbutton">
                <Link to="https://drive.google.com/file/d/1zUDp1uotDL4enq6lGSA9T5Mph2H7U1E_/view?usp=sharing">
                  <button className="btn1">
                    <span>Download CV</span>
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="btn2">
                    <span>Contact</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
