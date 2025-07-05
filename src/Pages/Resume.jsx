import React from "react";
import { RxThickArrowRight } from "react-icons/rx";
import Lineprogress from "../Component/Resume/Lineprogress";
import Circleprogress from "../Component/Resume/Circleprogress";

function Resume() {
  return (
    <>
      <section id="resume">
        <h1>Resume</h1>
        <div className="line"></div>

        <div className="education-cont">
          {/* Left Section: Education */}
          <div className="left">
            <h2>Education</h2>

            {/* Matriculation */}
            <div className="educ-box" data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Matriculation</h3>
              </div>
              <div className="cbse">
                <span className="color-box">2017</span>
                <span>CBSE</span>
              </div>
              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>Munam Public School, Maharajganj</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight className="react-icon" />
                <p>8.6 CGPA</p>
              </div>
            </div>

            {/* Intermediate */}
            <div className="educ-box" data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Intermediate</h3>
              </div>
              <div className="cbse">
                <span className="color-box">2019</span>
                <span>JAC</span>
              </div>
              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>Patel Inter College, Hazaribagh</p>
                </div>
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>PCM</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight className="react-icon" />
                <p>70.6%</p>
              </div>
            </div>

            {/* Graduation */}
            <div className="educ-box" data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Graduation</h3>
              </div>
              <div className="cbse">
                <span className="color-box">2022</span>
                <span>VBU</span>
              </div>
              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>St. Columba's College, Hazaribagh</p>
                </div>
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>BCA</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight className="react-icon" />
                <p>7.45 CGPA</p>
              </div>
            </div>

            {/* Post Graduation */}
            <div className="educ-box" data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Post Graduation</h3>
              </div>
              <div className="cbse">
                <span className="color-box">2024</span>
                <span>VBU</span>
              </div>
              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>Vinoba Bhave University, Hazaribagh</p>
                </div>
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>MCA</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight className="react-icon" />
                <p>7.47 CGPA</p>
              </div>
            </div>

            <Lineprogress />
          </div>

          {/* Right Section: Experience */}
          <div className="right">
            <h2>Experience</h2>

            {/* Java Full Stack Developer */}
            <div className="educ-box" data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Java Full Stack Developer</h3>
              </div>
              <div className="cbse">
                <span className="color-box">2 years</span>
                <span>Spring Boot</span>
              </div>
              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>3 years as a Freelance Full Stack Developer</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight />
                <p>
                  Completed multiple individual and team projects using Java Spring Boot and React.js.
                </p>
              </div>
            </div>

            {/* Open Source Contributor */}
            <div className="educ-box" data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Open Source Contributor</h3>
              </div>
              <div className="cbse">
                <span className="color-box">2 months</span>
                <span>SSOC</span>
              </div>
              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>Successfully merged several branches on GitHub</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight />
                <p>Actively contributing to open-source projects</p>
              </div>
            </div>

            {/* Java Backend Developer Skills */}
            <div className="educ-box" data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Java Backend Developer</h3>
              </div>
              <div className="cbse">
                <span className="color-box">Skills</span>
                <span>Spring Boot</span>
              </div>
              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>Built RESTful APIs using Spring Boot and integrated them with frontend apps.</p>
                </div>
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>Implemented JWT-based authentication and role-based access control using Spring Security.</p>
                </div>
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>Worked with MySQL and PostgreSQL using Spring Data JPA.</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight className="react-icon" />
                <p>Deployed Spring Boot microservices on cloud platforms; tested and monitored using Postman and Swagger.</p>
              </div>
            </div>

            {/* Graphics Designer */}
            <div className="educ-box" data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Graphics Designer</h3>
              </div>
              <div className="cbse">
                <span className="color-box">2 years</span>
                <span>Canva</span>
              </div>
              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>Created 3D models, posters, presentations, and video animations using Canva.</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight className="react-icon" />
                <p>Worked with clients to deliver engaging and visually appealing designs.</p>
              </div>
            </div>

            <Circleprogress />
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
