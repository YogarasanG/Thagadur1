import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Window() {
  return (
    <div className="home">
      <h2 className="question">Window Grills</h2>
      <p className="answer">
        Welcome to our Window Grill collection at Thagadur Welding Works.
        Discover our exquisite designs that blend aesthetics with security,
        creating a unique and stylish look for your living spaces.
      </p>
      <h4 className="question">Intricate Designs, Unmatched Security</h4>
      <p className="answer">
        Each window grill at Thagadur Welding Works is a masterpiece of
        craftsmanship. We understand the importance of security without
        compromising on the beauty of your home. Our designs are intricately
        crafted to provide both functionality and style.
      </p>
      <h4 className="question">Featured Designs</h4>
      <img src="./images/img26.jpg" alt="Thagadur" className="pho" />
      <p className="answer">
        Caption: Add a touch of elegance with our classic window grill design.
      </p>
      <img src="./images/img47.jpg" alt="Thagadur" className="pho" />
      <p className="answer">
        Caption: Modern and secure - our window grills enhance the appeal of
        your home.
      </p>
      <h4 className="question">Benefits of Our Window Grills</h4>
      <h4 className="SubHeading">Security:</h4>
      <p className="answer">
        Our window grills are designed with your safety in mind, providing an
        extra layer of protection for your home.
      </p>
      <h4 className="SubHeading">Customization:</h4>
      <p className="answer">
        We offer customization options to ensure the window grills seamlessly
        integrate with your home's overall design.
      </p>
      <h4 className="question">How to Order</h4>
      <p className="answer">
        Ordering your custom window grills from Thagadur Welding Works is easy:
      </p>
      <h4 className="SubHeading">
        <Link to="/Gallery">Browse Designs:</Link>
      </h4>
      <div className="gateImage">
        <img src="./images/img25.jpg" alt="Thagadur" className="photo" />
        <img src="./images/img26.jpg" alt="Thagadur" className="photo" />
        <img src="./images/img27.jpg" alt="Thagadur" className="photo" />
      </div>
      <p className="answer">
        Explore our featured designs and find the one that suits your taste.
      </p>
      <h4 className="SubHeading">
        <Link to="/Contact">Contact Us:</Link>
      </h4>
      <p className="answer">
        Get in touch with our team to discuss customization options,
        measurements, and pricing.
      </p>
      <h4 className="SubHeading">Place Your Order:</h4>
      <p className="answer">
        Once you're satisfied with the design and details, place your order, and
        let us take care of the rest.
      </p>
      <h4 className="question">Our Guarantee</h4>
      <p className="answer">
        At Thagadur Welding Works, we take pride in delivering high-quality
        window grills that exceed your expectations. Our commitment to
        craftsmanship and customer satisfaction ensures that your experience
        with us is seamless and enjoyable.
      </p>
      <br />
      <div>
        <Link to="/Gate" className="anger btn">
          Previous
        </Link>
        <Link to="/Backdrop" className="anger btn">
          Next
        </Link>
        <Link to="/Product" className="anger btn">
          Back to Products
        </Link>
      </div>
      <br />
      <p className="answer">
        <b>
          Explore our Window Grill collection and transform your living spaces
          with elegance and security.
        </b>
      </p>
    </div>
  );
}

export default Window;
