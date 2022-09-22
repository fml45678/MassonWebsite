import React from "react";
import Header from "./Header.js";
import SideNav from "../SideNav.js";
import Contact from "./Contact.js";
import Home from "./Home.js";
import "./ContactContainer.css";

function ContactContainer() {
  return (
    <div>
      <Header />

      <div className="navContactContainer">
        <SideNav />
        <div className="contact__contactHomeContainer">
          <Contact />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
