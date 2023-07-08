import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const linkStyle = {
  // margin: "1rem",
  textDecoration: "none",
  // color: "green",
  "font-weight": "bold",
  "font-size": "1.2rem",
};

export default function Header() {
  return (
    <div className="header">
      <ul>
        <div className="link">
          <NavLink to="/" style={linkStyle}>
            Home
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/contact-us" style={linkStyle}>
            Contact Us
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/todo-app" style={linkStyle}>
            Todo List
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/shopping-cart" style={linkStyle}>
            Shopping Cart
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/weather-api" style={linkStyle}>
            API
          </NavLink>
        </div>
      </ul>
    </div>
  );
}
