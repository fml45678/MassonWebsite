import React from 'react'
import Header from './Header.js';
import SideNav from '../SideNav.js';
import About from './About.js';
import './AboutContainer.css';

function AboutContainer() {
  return (
    <div>
        
        <Header />

        <div className="navAboutContainer">
            <SideNav />
            <About />
        </div>

    </div>
  )
}

export default AboutContainer