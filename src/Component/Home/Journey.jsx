import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Journey() {
  return (
    <>
      <section id="journey-sec">
        <div className="journey-cont">
          <div className="left">
            <h1>My Journey</h1>
            <div className="underline"></div>
            <img className="flag-img" src="./assets/Images/flag.png" />
          </div>
          <div className="right">
            <div className="details-box">
              <div className="right-cont">
                <ul>
                  <h2>Matriculation</h2>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        className="icon"
                        size={"22px"}
                      />
                    </span>
                    <p> Completed in 2017</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p>Munam Public School, Maharajganj</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> Central Board of Secondary Education</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> Percentage : 8.6 CGPA</p>
                  </li>
                </ul>
              </div>
              <div className="right-cont" div data-aos="fade-up">
                <ul>
                  <h2>Intermediate</h2>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> 2017 - 2019</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p>Patel Inter College Hazaribagh. </p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> Jharkhand Academic Council (JAC)</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> Percentage : 70.6%</p>
                  </li>
                </ul>
              </div>
              <div className="right-cont" div data-aos="fade-up">
                <ul>
                  <h2> Graduation</h2>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> 2019 - 2022</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> St. Columba's College Hazaribagh</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> CGPA : 7.45</p>
                  </li>
                </ul>
              </div>
                <div className="right-cont" div data-aos="fade-up">
                <ul>
                  <h2>Post-Graduation</h2>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> 2022 - 2022</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> Vinoba bhave University Hazaribagh</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> CGPA : 7.47</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Journey;
