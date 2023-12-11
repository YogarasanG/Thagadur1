import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Playground() {
  return (
    <div className="home">
      <h2 className="question">Playground Equipment</h2>
      <p className="answer">
        Welcome to Thagadur Welding Works, where we bring joy to children with
        our safe and aesthetically pleasing playground equipment. Our carefully
        crafted designs are perfect for schools, play schools, and homes, both
        indoor and outdoor.
      </p>
      <img src="./images/img91.jpg" alt="Thagadur" className="pho" />
      <h2 className="question">Why Choose Our Playground Equipment?</h2>
      <img src="./images/img73.jpg" alt="Thagadur" className="pho" />
      <h4 className="SubHeading">Safety First: </h4>
      <p className="answer">
        Our equipment is designed with the utmost consideration for the safety
        of children, ensuring a secure and enjoyable play environment.
      </p>
      <h4 className="SubHeading">Aesthetic Appeal:</h4>
      <p className="answer">
       
        We believe that playgrounds should be not only safe but also visually
        engaging. Our designs spark imagination and playfulness.
      </p>
      <h4 className="SubHeading">Durable Quality:</h4>
      <p className="answer">
      <img src="./images/img90.jpg" alt="Thagadur" className="pho" />
        Using high-quality materials, our playground equipment is built to
        withstand the test of time and endure the energy of playful kids.
      </p>
      <h2 className="question">For Homes:</h2>
      <p className="answer">
        Transform your outdoor space into a haven of joy for your children with
        our outdoor playground equipment. From swings to slides, our designs
        blend seamlessly with nature, encouraging active play.
      </p>
      <h2 className="question">Customization Options</h2>
      <img src="./images/img72.jpg" alt="Thagadur" className="pho" />
      <p className="answer">
        At Thagadur Welding Works, we understand that each space is unique. Our
        team offers customization options to tailor playground equipment to your
        specific needs, ensuring a perfect fit for any environment.
      </p>
      <div>
        <Link to="/Shutter" className="anger btn">
          Previous
        </Link>
        <Link to="/Shed" className="anger btn">
          Next
        </Link>
        <Link to="/Product" className="anger btn">
          Back to Product
        </Link>
      </div>
      <br />
      <p className="answer">
        <b>
          Ready to create a vibrant and safe play area for children? Place your
          order today, and let Thagadur Welding Works bring joy to your space.
        </b>
      </p>
    </div>
  );
}

export default Playground;
