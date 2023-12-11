import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer>
       
        <div className="quickLinks">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Product">Product</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="work">
          <h3>Our Works</h3>
          <ul>
            <li>
              <Link to="/Gate">Gate</Link>
            </li>
            <li>
              <Link to="/Window">Window</Link>
            </li>
            <li>
              <Link to="/Backdrop">Wedding Backdrop</Link>
            </li>
            <li>
              <Link to="/Shutter">Rolling Shutter</Link>
            </li>
            <li>
              <Link to="/Playground">Playground Equipment</Link>
            </li>
            <li>
              <Link to="/Pipe">Pipe Bending</Link>
            </li>
            <li>
              <Link to="/Shed">Outdoor Shed</Link>
            </li>
            <li>
              <Link to="/Stove">Gas Stove</Link>
            </li>
          </ul>
        </div>
        <div className="media">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a
                href="https://instagram.com/thagadurdpi_official?igshid=MTNiYzNiMzkwZA=="
                target="blank"
              >
               
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              
              </a>
            </li>
          </ul>
        </div> 
        <div className="bottom">
          <p>&copy; 2023 Thagadur Welding Works. All Rights Reserved.</p>
        </div>       
      </footer>
      
    </div>
  );
}

export default Footer;
