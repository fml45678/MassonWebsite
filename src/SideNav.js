import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="flex__container">
      <div className="sidenav">
        <div className="sideNav__links">
          <Link to="/performance">
            <h2 className="sideNav__performance">Music</h2>
          </Link>
        </div>

        <div className="sideNav__links">
          <Link to="/about">
            <h2 className="sideNav__about">About</h2>
          </Link>
        </div>

        <div className="sideNav__links">
          <Link to="/lagniappe">
            <h2 className="sideNav__lagniappe">Tech</h2>
          </Link>
        </div>

        <div className="sideNav__links">
          <Link to="/podcast">
            <h2 className="sideNav__lagniappe">Podcast</h2>
          </Link>
        </div>

        <div className="sideNav__links">
          <Link to="/contact">
            <h2 className="sideNav__contact">Contact</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
