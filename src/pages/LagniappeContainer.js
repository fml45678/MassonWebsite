import React from "react";
import Header from "./Header.js";
import SideNav from "../SideNav.js";
import Lagniappe from "./Lagniappe.js";
import "./LagniappeContainer.css";

function LagniappeContainer() {
  return (
    <div>
      <Header />

      <div className="navLagContainer">
        <SideNav />
        <Lagniappe />
      </div>
    </div>
  );
}

export default LagniappeContainer;
