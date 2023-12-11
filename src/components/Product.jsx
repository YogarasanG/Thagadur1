import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Product() {
  return (
    <div className="Product">
      <h2 className="question">Our Specialties</h2>
      <p className="answer">
        Welcome to Thagadur Welding Works, where we take pride in offering a
        diverse range of high-quality products. Explore our specialties below:
      </p>

      <h4 className="question">
        <Link to="/Gate" className="funny">
          Main Gate
        </Link>
      </h4>
      <img src="./images/img4.png" alt="Window" className="pho" />
      <p className="answer">
        Elevate the entrance of your space with our unique and sturdy main
        gates. Crafted with precision, our designs blend aesthetics with
        security to make a lasting impression.
      </p>
      <p className="answer">
        View Main Gates Collection <br />
        <Link to="/Gate" className="series">
          Explore Now
        </Link>{" "}
      </p>

      <h4 className="question">
        <Link to="/Window" className="funny">
          Window Grill
        </Link>
      </h4>
      <img src="./images/img26.jpg" alt="Window" className="pho"/> 
      <p className="answer">
        Enhance the beauty of your windows with our intricately designed window
        grills. Each piece is a work of art, providing both security and style
        to your living spaces.
      </p>
      <p className="answer">
        Browse Window Grills <br />
        <Link to="/Window" className="series">
          Discover More
        </Link>
      </p>
      <h4 className="question">
        <Link to="/Backdrop" className="funny">
          Wedding Backdrops
        </Link>
      </h4>
      <img src="./images/img19.jpg" alt="Window" className="pho" />
      <p className="answer">
        Create a magical backdrop for your special day with our elegant wedding
        backdrops. We offer a range of designs to add sophistication and charm
        to your wedding venue.
      </p>
      <p className="answer">
        Choose Your Backdrop <br />
        <Link to="/Backdrop" className="series">
          Explore Options
        </Link>
      </p>
      <h4 className="question">
        <Link to="/Pipe" className="funny">
          Pipe Bending
        </Link>
      </h4>
      <img src="./images/img54.jpg" alt="Window" className="pho"/>
      <p className="answer">
        Precision meets flexibility in our pipe bending services. Tailored to
        your specifications, our skilled craftsmen ensure seamless integration
        into your projects.
      </p>
      <p className="answer">
        Learn About Pipe Bending <br />
        <Link to="/Pipe" className="series">
          Get Details
        </Link>
      </p>
      <h4 className="question">
        <Link to="/Shutter" className="funny">
          Rolling Shutter
        </Link>
      </h4>
      <img src="./images/img80.png" alt="Window" className="pho"/>
      <p className="answer">
        Secure your space with our durable rolling shutters. Designed for robust
        protection, our rolling shutters combine functionality with a touch of
        modern aesthetics.
      </p>
      <p className="answer">
        Explore Rolling Shutters <br />
        <Link to="/Shutter" className="series">
         See More
        </Link>
      </p>
      <h4 className="question">
        <Link to="/Playground" className="funny">
          Playground Equipment
        </Link>
      </h4>
      <img src="./images/img73.jpg" alt="Window" className="pho"/>
      <p className="answer">
        Bring joy to children with our safe and aesthetically pleasing
        playground equipment. Designed to spark imagination and playfulness, our
        playground equipment ensures a fun and secure environment.
      </p>
      <p className="answer">
        Discover Playtime <br />
        <Link to="/Playground" className="series">
          Explore Collection
        </Link>
      </p>
      <h4 className="question">
        <Link to="/Shed" className="funny">
          Outdoor Shed
        </Link>
      </h4>
      <img src="./images/img63.jpg" alt="Window" className="pho"/>
      <p className="answer">
        Enhance your outdoor areas with our custom-designed sheds. Sturdy and
        weather-resistant, our sheds stand the test of time, providing both
        functionality and aesthetics.
      </p>
      <p className="answer">
        View Outdoor Sheds <br />
        <Link to="/Shed" className="series">
          See Options
        </Link>
      </p>

      <h4 className="question">
        <Link to="/Stove" className="funny">
          Gas Stove (Heavy)
        </Link>
      </h4>

      <p className="answer">
        Experience efficiency and durability with our heavy gas stoves. Crafted
        to meet the demands of commercial kitchens, our stoves ensure precision
        cooking.
      </p>
      <p className="answer">
        Shop Heavy Gas Stoves <br />
        <Link to="/Stove" className="series">
          Shop Now
        </Link>
      </p>

      <p className="answer">
       
        <b>
          We take pride in delivering products that combine quality
          craftsmanship with innovative design. For inquiries, customization, or
          to place an order, contact us.
        </b>
      </p>
    </div>
  );
}

export default Product;
