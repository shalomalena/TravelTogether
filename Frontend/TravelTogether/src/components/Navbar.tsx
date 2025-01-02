import React from "react";
import logo from "../assets/img-1_processed.png";
import "/Users/shalomal/Desktop/TravelTogether/TravelTogether/frontend/travelTogether/src/Styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="Navbar">
      <img src={logo} alt="App Logo" className="Navbar-logo" />
      <ul className="list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/trips">Trips</a>
        </li>
        <li>
          <a href="/bugett">Budget</a>
        </li>
        <li>
          <a href="/checklist">Checklist</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
