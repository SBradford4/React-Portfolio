import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="">
      <div className="">
        <ul>
          <li>
            <NavLink to="/">
              About
            </NavLink>
          </li>
          <li>            
            <NavLink to="/portfolio">
            Portfolio
          </NavLink>
          </li>
          <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
          </li>
          <li>
          <NavLink to="/resume">
            Resume
          </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar