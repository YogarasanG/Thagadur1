import React from "react";
import { Link } from "react-router-dom";
import '../style.css';

function Gate() {
  return (
    <div className="home">
      <h2 className="question">Main Gates</h2>
      <p className="answer">
        Welcome to the Main Gates section of Thagadur Welding Works. Our main
        gates are more than just entrances; they are statements of style,
        security, and craftsmanship. Explore our unique designs crafted with
        precision to elevate the aesthetic appeal of your space.
      </p>
      <h4 className="question">Unique Designs for Every Home</h4>
      <div className="gateImage">
      <img src="./images/img42.jpg" alt="Thagadur" className="photo"/>
      <img src="./images/img41.jpg" alt="Thagadur" className="photo" />
      <img src="./images/img43.jpg" alt="Thagadur" className="photo" />
        </div>
      <p className="answer">
        Each of our main gate designs is a blend of functionality and artistic
        expression. Whether you prefer a traditional look, a modern design, or
        something entirely unique, Thagadur Welding Works has the perfect main
        gate for your home.
      </p>
      <h4 className="SubHeading">Features:</h4>
      
      <p className="answer">
        Aesthetic Appeal: Our main gates are designed to enhance the visual
        appeal of your property.
      </p>
      <h4 className="SubHeading">Security:</h4>
      <p className="answer">Sturdy and robust construction ensures the safety of your home.</p>
      <h4 className="SubHeading">Customization:</h4>
      <img src="./images/img46.jpg" alt="Thagadur" className="pho" />
      <p className="answer">
               Tailor the design to match your style and architectural preferences.
      </p>
      <h4 className="SubHeading">Quality Craftsmanship:</h4>
      <p className="answer"> Each gate is crafted with precision by our skilled artisans.</p>
      <h4 className="question">How to Order</h4>
      <p className="answer">
        Ordering your custom main gate from Thagadur Welding Works is a simple
        and personalized process:
      </p>
      <h4 className="SubHeading">Explore:</h4>
      <p className="answer">
        Browse through our collection to find a design that resonates with your
        taste.
      </p>
      <h4 className="SubHeading">Customize:</h4>
      <img src="./images/img59.jpg" alt="Thagadur" className="pho" />
      <p className="answer">
       
      <span><Link to="/Contact"className="answer">Contact us</Link></span> to discuss customization options based on your preferences.
      </p>
      <h4 className="SubHeading">Order:</h4>
      <p className="answer">
       
        Place your order, and our team will start crafting your unique main
        gate.
      </p>
      <h4 className="question">Installation and Service</h4>
      <p className="answer">
        Our commitment doesn't end with the delivery of your main gate. Thagadur
        Welding Works provides professional installation services to ensure a
        seamless experience. Additionally, we offer post-installation services
        and maintenance to keep your main gate in optimal condition.
      </p>
      <h4 className="SubHeading">Get in Touch</h4>
      <p className="answer">
        Ready to enhance the entrance of your home with a stunning main gate? <span><Link to="/Contact"className="answer">Contact us..</Link></span> 
          for inquiries, customization options, or to place an order.
      </p>
      <div >
      <Link to='/Stove'className="anger btn">Previous</Link>
      <Link to='/Window'className="anger btn">Next</Link>
      <Link to='/Product'className="anger btn">Back to Product</Link>      
      </div> <br />
      <p className="answer">
        <b>We look forward to crafting the perfect main gate for your home!</b>
      </p>
      
    </div>
  );
}

export default Gate;
