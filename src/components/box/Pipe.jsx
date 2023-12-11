import React from "react";
import { Link } from "react-router-dom";

function Pipe() {
  return (
    <div className="home">
      <h2 className="question">Pipe Bending Services</h2>
      <p className="answer">
        At Thagadur Welding Works, we specialize in precision pipe bending
        services. Our skilled craftsmen are experts in bending iron pipes to
        your exact specifications, providing you with tailored solutions for
        your projects.
      </p>
      <h2 className="question">Customization</h2>
      <img src="./images/img3.png" alt="Thagadur" className="pho" />
       <p className="answer">
        We understand that every project is unique. Our pipe bending services
        are customizable to fit your specific requirements, offering flexibility
        in design and functionality.
      </p>
      <h2 className="question">Quality Materials</h2>
      <img src="./images/img55.jpg" alt="Thagadur" className="pho" />
      
      <p className="answer">
        We use high-quality iron pipes to ensure durability and longevity in our
        pipe bending projects. Trust us for reliable and robust solutions.
      </p>
      <h2 className="question">Advantages of Iron Pipe Bending</h2>
      <img src="./images/img54.jpg" alt="Thagadur" className="pho" />
      
      <h4 className="SubHeading">Strength and Durability:</h4>
      <p className="answer">
       
        Iron pipes provide strength and durability, making them suitable for a
        wide range of applications.
      </p>
      <h4 className="SubHeading">Versatility:</h4>
      <img src="./images/img52.jpg" alt="Thagadur" className="pho" />
      
      <p className="answer">
       
        Iron pipes can be bent into various shapes and sizes, making them
        versatile for different projects.
      </p>
      <h2 className="question">Our Process</h2>
      <h4 className="SubHeading">Consultation:</h4>
      <p className="answer">
        
        We work closely with you to understand your project requirements and
        design specifications.
      </p>
      <h4 className="SubHeading">Material Selection: </h4>
      <p className="answer">
        We choose high-quality iron pipes based on the project's needs.
      </p>
      <h4 className="SubHeading">Precision Bending:</h4>
      <p className="answer">
        
        Our skilled craftsmen use advanced machinery for precise and accurate
        bending.
      </p>
      <h4 className="SubHeading">Quality Check:</h4>
      <p className="answer">
      
        Every bent pipe undergoes a thorough quality check to ensure it meets
        our standards.
      </p>

      <div>
        <Link to="/Backdrop" className="anger btn">
          Previous
        </Link>
        <Link to="/Shutter" className="anger btn">
          Next
        </Link>
        <Link to="/Product" className="anger btn">
          Back to Product
        </Link>
      </div>
      <br />
      <p className="answer">
        <b>
          We look forward to turning your ideas into reality with our expert
          pipe bending services!
        </b>
      </p>
    </div>
  );
}

export default Pipe;
