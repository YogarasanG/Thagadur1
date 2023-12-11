import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Backdrop() {
  return (
    <div className="home">
      <h2 className="question">Wedding Backdrops</h2>
      <p className="answer">
        Welcome to the enchanting world of Thagadur Welding Works, where we
        bring elegance and sophistication to your special day with our exquisite
        wedding backdrops.
      </p>
      <div className="gateImage">
        <img src="./images/img52.jpg" alt="Thagadur" className="photo" />
        <img src="./images/img18.jpg" alt="Thagadur" className="photo" />
        <img src="./images/img19.jpg" alt="Thagadur" className="photo" />
      </div>
      <p className="answer" style={{ textDecoration: "UnderLine" }}>
        Create Unforgettable Moments with Our Elegant Wedding Backdrops
      </p>
      <img src="./images/img9.jpg" alt="Thagadur" className="pho" />
      <p className="answer">
        At Thagadur Welding Works, we understand the importance of creating a
        magical ambiance for your special day. Our wedding backdrops are crafted
        with precision and designed to add a touch of sophistication and charm
        to your wedding venue.
      </p>
      <h2 className="question">Why Choose Thagadur Wedding Backdrops?</h2>
      <h4 className="SubHeading">Elegance and Style</h4>
      <p className="answer">
        Our backdrops are meticulously crafted to exude elegance, providing a
        stunning backdrop for your wedding ceremonies and photographs.
      </p>
      <h4 className="SubHeading">Custom Designs</h4>
      <p className="answer">
        We offer a range of customizable designs to suit for any wedding theme
        and personal style. From traditional to modern, our team can bring your
        vision to life.
      </p>
      <h4 className="SubHeading">Quality Craftsmanship</h4>
      <p className="answer">
        With years of experience in welding, our skilled artisans ensure that
        each backdrop is a masterpiece, combining durability with aesthetic
        appeal.
      </p>
      <h4 className="SubHeading">Versatility</h4>
      <p className="answer">
        Whether it's an intimate gathering or a grand celebration, our backdrops
        are designed to enhance the beauty of any venue, indoors or outdoors.
      </p>
      <h2 className="question">Explore Our Collection</h2>
      <img src="./images/img74.jpg" alt="Thagadur" className="pho" />
      <p className="answer">
      <Link to="/Gallery">View a gallery of Our Work</Link>
      </p>
      <p className="answer">
        Browse through our gallery to see examples of our stunning wedding
        backdrops. Each piece tells a unique story, reflecting the beauty and
        joy of the couples we've had the pleasure of serving.
      </p>
      <h2 className="question">How to Order</h2>
      <h4 className="SubHeading">Consultation:</h4>
      <p className="answer">
        Schedule a consultation with our team to discuss your wedding theme and
        any specific design elements you have in mind.
      </p>
      <h4 className="SubHeading">Customization:</h4>
      <p className="answer">
        Work with our designers to customize a backdrop that perfectly
        complements your wedding vision. Choose from our existing designs or
        bring your ideas for a truly unique creation.
      </p>
      <h4 className="SubHeading">
        <Link to="/contact">Contact Us</Link>
      </h4>
      <p className="answer">
        Contact Us Have questions or need more information? Feel free to contact
        us for personalized assistance.
      </p>
      <div>
        <Link to="/Window" className="anger btn">
          Previous
        </Link>
        <Link to="/Pipe" className="anger btn">
          Next
        </Link>
        <Link to="/Product" className="anger btn">
          Back to Product
        </Link>
      </div>
      <br />
      <p className="answer">
        <b>
          Thagadur Wedding Backdrops is here to make it unforgettable. <br />
          For inquiries and orders, get in touch.
        </b>
      </p>
    </div>
  );
}

export default Backdrop;
