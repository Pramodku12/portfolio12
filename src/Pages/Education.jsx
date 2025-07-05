import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Education() {
  return (
    <>
      <section id="education-sec">
        <div className="education-cont" div data-aos="fade-up">
          <div className="left">
            <h1>Education Journey</h1>
            <div className="underline"></div>
            <p>
              My education journey has been a wonderful and life-changing experience. 
              From my first days in school to studying further,
               each step has helped me learn new things, build my skills, and grow as a person. 
              Every part of this journey has made me ready for the future and given me a strong base to move ahead in life.
              <br />
              <br />
              Education Is Not The Learning Of Facts, But The Training Of The
              Mind To Think.
            </p>
            <button>Start Now</button>
          </div>
          <div className="right">
            <img className="img" src="./assets/Images/Images (3)/journey.png" />
          </div>
        </div>
      </section>
      {/* lets start section */}
      <section id="lets-section">
        <h1>Let's start</h1>
        <div className="lets-cont" div data-aos="fade-up">
          <div className="left">
            <img className="img" src="./assets/Images/Project/welcome.jpg" />
          </div>
          <div className="right">
            <div className="school-sec">
              <div className="school-image">
                <img className="img" src="./assets/Images/davlogo.jpeg" />
              </div>
              <div className="school-item">
                <h2>Munam Public School, Maharajganj</h2>
                <h3>10th (2016-2017)</h3>
              </div>
            </div>
            <span className="item">CBSE</span>
            <p>
              Munam Public School is a co-education, english medium, senior
              secondary school, affiliated with CBSE and located at Maharajganj,
              Hazaribagh, Jharkhand. The school was established in 1995.
            </p>
          </div>
        </div>
        <div className="lets-cont lets-cont2" div data-aos="fade-up">
          <div className="left">
            <img className="img" src="./assets/Images/Images (3)/isc.jpg" />
          </div>
          <div className="right">
            <div className="school-sec school-sec2">
              <div className="school-image">
                <img
                  className="img"
                  src="./assets/Images/Images (3)/isclogo.png"
                />
              </div>
              <div className="school-item">
                <h2>Patel Inter College</h2>
                <h3>12th (2017-2019)</h3>
              </div>
            </div>
            <span className="item">JAC - SCIENCE</span>
            <p>
              PATEL INTER COLLEGE HAZARIBAG is located in Rural area of
              Jharkhand state of India. In Ward No.01 area of Hazaribagh
              block of Hazaribag district. The year of establishment of Inter
              Science College is 2015. Patel Inter College is a Co-Educational
              school.
            </p>
          </div>
        </div>
        <div className="lets-cont" div data-aos="fade-up">
          <div className="left">
            <img className="img" src="./assets/Images/Project/col.png" />
          </div>
          <div className="right">
            <div className="school-sec school-sec2">
              <div className="school-image school-image2">
                <img className="img" src="./assets/Images/Project/logo.jpg" />
              </div>
              <div className="school-item">
                <h2>St. Columba's College</h2>
                <h3>UG (2019-2022)</h3>
              </div>
            </div>
            <span className="item">BCA</span>
            <p>
              Department of Computer Application of St.Columba's College is First
              AICTE approved department in the Jharkhand. The Year of
              Establishment is 1964. St. Columba's College is funded by the
              agencies of Government of India and Jharkhand State And is affiliated under VBU.
            </p>
          </div>
        </div>
          <div className="lets-cont lets-cont2" div data-aos="fade-up">
          <div className="left">
            <img className="img" src="./assets/Images/Images (3)/vbu.png" />
          </div>
          <div className="right">
            <div className="school-sec school-sec2">
              <div className="school-image school-image2">
                <img className="img" src="./assets/Images/Images (3)/vbulogo.jpg" />
              </div>
              <div className="school-item">
                <h2>Vinoba Bhave University</h2>
                <h3>PG (2022-2024)</h3>
              </div>
            </div>
            <span className="item">MCA</span>
            <p>
             Vinoba Bhave University is a public, teaching-cum-affiliating university located in Hazaribagh,
              Jharkhand—about 100 km from Ranchi, the state capital . 
              It was established in 1992 following the split from Ranchi University and
               named after the social reformer Acharya Vinoba Bhave.
            </p>
          </div>
        </div>
      </section>

      {/* /certificate sec  start*/}

      <section id="certificate">
        <h1>Certificates</h1>
        <div className="underline"></div>
        <div className="certi-cont" div data-aos="fade-up">
          <div className="certi-item1">
            <div className="freecode-image">
              <img className="img" src="./assets/Images/Project/certi.jpeg" />
            </div>
            <div className="certi-box">
              <h2>Java Full Stack Developer</h2>
              <h3>- Pankaj Sir Academy</h3>
            </div>
            <div className="certi-date">
              <p>30th jan 2025 </p>
              <span>
                <FaArrowUpRightFromSquare size={22} color="#716d6d" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
