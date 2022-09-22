import React from "react";
import Header from "./Header.js";
import SideNav from "../SideNav.js";
import Home from "./Home.js";
import "./HomeContainer.css";

function HomeContainer() {
  return (
    <div>
      <Header />

      <div className="navHomeContainer">
        <SideNav />
        <Home />
      </div>
    </div>
  );
}

export default HomeContainer;
