import React from "react";
import "./style.css";

function About() {
  return (
    <div className="about">
      <h2 className="question">About Thagadur Welding Works</h2>
      <p className="answer">
        Welcome to Thagadur Welding Works, where craftsmanship meets excellence
        in welding for over 35+ years. Established by the visionary <b> Mr. A
        Govindhan, a stalwart in the field with over 40+ years of unparalleled
        experience</b>, our company has been a beacon of innovation and quality.
      </p>

      <h4 className="question">Our Legacy</h4>
      <p className="answer">
        Thagadur Welding Works has been a pioneer in introducing unique designs
        for main gates, windows, rolling shutters, outdoor sheds, playground
        equipment, heavy gas stoves, wedding backdrops, and pipe bending. Our
        commitment to delivering exceptional welding services has made us a
        trusted name in the industry.
      </p>

      <h4 className="question">Founder's Expertise</h4>
      <p className="answer">
       <b> Mr. A Govindhan, the founder and owner, has been the driving force
        behind our success. </b> With four decades of hands-on experience, his
        expertise has shaped Thagadur Welding Works into a hub of creativity and
        reliability.
      </p>
      <h4 className="question">Our Valued Customers</h4>
      <p className="answer">
        Our dedication to excellence has earned the trust of esteemed clients
        such as:
      </p>
      <ol>
        <li className="list-group-item list">
          Senthil Group of Companies
        </li>
        <li className="list-group-item list"> DNV</li>
      </ol>
      <h4 className="question">Meet Our Skilled Workers</h4>
      <ol>
        <li className="list-group-item list">
          <p>Muniyappan (Experience: 15+ years)</p>
        </li>
        <li className="list-group-item list">
          <p>Raja (Experience: 15+ years)</p>
        </li>
        <li className="list-group-item list">
          <p>Yuvaraj (Experience: 15+ years)</p>
        </li>
        <li className="list-group-item list">
          <p>Manigandan (Experience: 10+ years)</p>
        </li>
        <li className="list-group-item list ">
          <p>Arun Kumar (Experience: 2+ years)</p>
        </li>
        <li className="list-group-item list">
          <p>Gopi Prasath (Experience: 4+ years)</p>
        </li>
      </ol>
      <p className="answer"> <b>
        Our skilled workforce brings a wealth of experience and dedication to
        every project, ensuring the highest standards of quality and
        craftsmanship.</b>
      </p>
      <h4 className="question">Our Commitment</h4>
      <p className="answer">
        At Thagadur Welding Works, we are not just welders; we are craftsmen
        dedicated to transforming metal into functional works of art. Our
        commitment to quality, innovation, and customer satisfaction has been
        the cornerstone of our success over the years.
      </p>
      <p className="answer">
        {" "}
        <b>
          Join us in shaping the future of welding craftsmanship. Explore the
          possibilities with Thagadur Welding Works, where every project is a
          masterpiece in metal.
        </b>
      </p>
    </div>
  );
}

export default About;
