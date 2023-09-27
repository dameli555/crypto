import React from "react";
import "./NavBar-style.css";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          Coin <span className="purple">search</span>
        </h1>
      </div>
    </Link>
  );
};

export default NavBar;
