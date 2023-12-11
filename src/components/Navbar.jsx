import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Nav">
      <nav className="navbar navbar-expand-lg  navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Gallery">
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Product">
                Product
              </Link>
              {/* <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="nav-link" to="/Gate">
                Gate
              </Link>
              <Link className="nav-link" to="/Window">
                Window
              </Link>
              <Link className="nav-link" to="/RollingShutter">
                Rolling Shutter
              </Link>
              <Link className="nav-link" to="/PipeBending">
                Pipe Bend
              </Link>
              <Link className="nav-link" to="/WeddingBackdrop">
                Wedding Backdrops
              </Link>
              <Link className="nav-link" to="/PlaygroundEquipments">
                Playground Equipments
              </Link>
              <Link className="nav-link" to="/GasStove">
                Gas Stove
              </Link>
            </div> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
