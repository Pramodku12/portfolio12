import React, { useState } from "react";
import { IoPeople } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillPenFill } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Touch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("AKfycbzfc7ASW03CScjyVjBV9Uhp_A8s3RlptKRwk08sDeVs", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData),
    })
      .then(() => alert("Message sent!"))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <section id="touch-sec">
      <div className="touch-cont">
        <div className="left" data-aos="fade-up">
          <h1>Get In Touch</h1>
          <div className="underline"></div>
          <p>We are there for you! How can I help?</p>

          <form id="form" onSubmit={handleSubmit}>
            <div className="input-box">
              <IoPeople size={22} />
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <div className="input-box">
              <MdEmail size={22} />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <div className="text-area">
              <BsFillPenFill size={22} />
              <textarea
                name="message"
                rows={4}
                placeholder="Write something about your query"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <br />
            <button className="btn" type="submit">
              <span>Send</span>
            </button>
          </form>
        </div>

        <div className="right">
          <img className="img" src="./assets/Images/Images (3)/contact-us.jpg" alt="contact" />
          <div className="icons" data-aos="fade-right">
            <Link to="https://www.linkedin.com/in/pramodku12/" target="_blank">
              <span className="icon1"><ImLinkedin size={30} /></span>
            </Link>
            <Link to="https://github.com/Pramodku12" target="_blank">
              <span className="icon2"><FaGithub size={30} /></span>
            </Link>
            <span className="icon1"><BsTwitter size={30} /></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Touch;
