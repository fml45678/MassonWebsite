import React from "react";
import Header from "./Header.js";
import SideNav from "../SideNav.js";
import Performance from "./Performance.js";
import "./PerformanceContainer.css";

function PerformanceContainer() {
  return (
    <div>
      <Header />

      <div className="navPerformanceContainer">
        <SideNav />
        <Performance />
      </div>
    </div>
  );
}

export default PerformanceContainer;
