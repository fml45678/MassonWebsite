import React from "react";
import "./Lagniappe.css";

function Lagniappe() {
  return (
    <div className="lagniappe__container">
      <h1>Installations</h1>

      <h3>Wind Tree</h3>

      <p className="windTree__description">
        Wind Tree is an interactive piece of art made by Masson LeMieux. It is a
        mobile with speakers attached, and each speaker plays a different sound
        when the buttons are pressed.
      </p>

      <iframe
        src="https://www.youtube.com/embed/mHArdND7eOQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture"
        allowfullscreen
      ></iframe>

      <h3>Speakers from Toothbrush Exhibition by Yiseul LeMieux</h3>

      <p>
        This is from a collaboration I did with Yiseul on her installation piece
        "Toothbrush Exhibition". There were four speakers spread around the
        room, mounted onto wood and accompanied by a push button. These were all
        interfacing with an arduino and computer to play sounds at different
        locations when the corresponding buttons were touched.{" "}
      </p>

      <iframe
        src="https://www.youtube.com/embed/x7aRkgnr7xY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture"
        allowfullscreen
      ></iframe>

      <h1>Websites/Apps</h1>

      <a href="https://yiseullemieux.com" target="blank">
        <div className="yiseulWebsite__container">
          <h3> Official Website of Yiseul LeMieux</h3>
          <img
            className="lagniappe__websites"
            src="yiseulNew.png"
            alt="index of heartbreak"
          />
        </div>
      </a>
      <div className="indexOfHeartbreakContainer__container">
        <a href="https://index-of-heartbreak-reac.web.app" target="blank">
          <div className="indexOfHeartbreak__container">
            <h3>Index of Heartbreak</h3>
            <img
              className="lagniappe__websites"
              src="indexScreenShot.png"
              alt="index of heartbreak"
            />
          </div>
        </a>
      </div>

      <a href="/midiinstrument" target="blank">
        <div className="yiseulWebsite__container">
          <h3> MIDI Instrument</h3>
          <img
            className="lagniappe__websites"
            src="midi.png"
            alt="my midi instrument"
          />
        </div>
      </a>
      <a href="https://toothbrush-18e6e.web.app" target="blank">
        <div className="yiseulWebsite__container">
          <h3> Toothbrush Activity</h3>
          <img
            className="lagniappe__websites"
            src="toothbrush.png"
            alt="Toothbrush Activity"
          />
        </div>
      </a>
      <a href="https://voting-450bf.web.app/" target="blank">
        <div className="yiseulWebsite__container">
          <h3> UVS Voting Interface</h3>
          <img
            className="lagniappe__websites"
            src="voting.png"
            alt="the interface from the UVS election"
          />
        </div>
      </a>
      <a href="https://year-old-boomers.web.app/" target="blank">
        <div className="yiseulWebsite__container">
          <h3> 30 Year Old Boomers Band Website</h3>
          <img
            className="lagniappe__websites"
            src="boomers.png"
            alt=" 30 Year Old Boomers Band Website"
          />
        </div>
      </a>
      <a href="https://laeec.com/" target="blank">
        <div className="yiseulWebsite__container">
          <h3> Louisiana Energy Equipment Website</h3>
          <img
            className="lagniappe__websites"
            src="laeec.png"
            alt=" Louisiana Energy Equipment Website"
          />
        </div>
      </a>
    </div>
  );
}

export default Lagniappe;
