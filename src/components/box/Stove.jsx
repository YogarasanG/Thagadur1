import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Stove() {
  return (
    <div className="home">
      <h2 className="question">Heavy Gas Stoves</h2>
      <p className="answer">
        Welcome to Thagadur Welding Works, where we bring you heavy-duty gas
        stoves designed for large-scale functions. Our stoves are available in
        sizes ranging from 1 foot to 6 feet, with options for single or dual
        burners to cater to the specific needs of our customers.
      </p>
      <h4 className="SubHeading">Overview Heavy Gas Stove</h4>
      <p className="answer">
        Experience efficiency and durability with our heavy gas stoves,
        meticulously crafted to meet the demands of commercial kitchens and
        large events. These stoves are built to handle high volumes of cooking,
        making them ideal for catering services, banquet halls, and big
        functions.
      </p>
      <h2 className="question">Key Features</h2>
      <h4 className="SubHeading">Sizes:</h4>
      <p className="answer"> Available in 1 foot to 6 feet variants.</p>
      <h4 className="SubHeading">Burner Options:</h4>
      <p className="answer"> Choose between single and dual burners.</p>
      <h4>Sturdy Construction:</h4>
      <p className="answer">
        {" "}
        Built with high-quality materials for long-lasting durability.
      </p>
      <h4 className="SubHeading">Customization:</h4>
      <p className="answer">
        {" "}
        Tailor the stove size and burner configuration based on your specific
        requirements.
      </p>
      <h2 className="question">Sizes Available</h2>
      <p className="answer">1 Foot Heavy Gas Stove(Single burner)</p>

      <p className="answer">
        <b>Perfect for smaller events or as an additional cooking station.</b>
      </p>
      <p>3 Feet Stove(Dual burner)</p>
      <p className="answer">
        <b>A versatile choice for medium-sized functions and gatherings.</b>
      </p>
      <p className="answer">6 Feet Stove(Dual burner)</p>
      <p className="answer">
        <b>Ideal for large-scale events, providing ample cooking space.</b>
      </p>
      <h2 className="question">Customization Options</h2>
      <p className="answer">
        Tailor your heavy gas stove to meet your specific needs:
      </p>
      <h4 className="SubHeading">Burner Configuration:</h4>
      <p className="answer"> Choose between single or dual burners.</p>
      <h4 className="SubHeading">Size Adjustment:</h4>
      <p className="answer">
        
        Select the size that fits your cooking requirements.
      </p>
      <p className="answer">
        For customization inquiries or to place an order,
        <Link to="/contact">contact us.</Link>
      </p>
      <h2 className="question">
        Why Choose Thagadur Welding Works Gas Stoves?
      </h2>
      <h4 className="SubHeading">Quality Craftsmanship:</h4>
      <p className="answer">
       
        Our heavy gas stoves are crafted with precision and attention to detail.
      </p>
      <h4 className="SubHeading">Durable Construction:</h4>
      <p className="answer">
       
        Built to withstand the demands of commercial use, ensuring long-term
        durability.
      </p>
      <h4 className="SubHeading">Custom Solutions:</h4>
      <p className="answer">    
        We work closely with customers to create tailored solutions that meet
        their unique needs.
      </p>
      <div>
        <Link to="/Shed" className="anger btn">
          Previous
        </Link>
        <Link to="/Gate" className="anger btn">
          Next
        </Link>
        <Link to="/Product" className="anger btn">
          Back to Product
        </Link>
      </div>
      <br />
      <p className="answer">
        <b>
          Make your next event a success with Thagadur Welding Works Heavy Gas
          Stoves. To discuss your requirements or place an order, get in touch.
        </b>
      </p>
    </div>
  );
}

export default Stove;
