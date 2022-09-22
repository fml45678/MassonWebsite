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
            src="yiseulScreenShot.png"
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
            alt="index of heartbreak"
          />
        </div>
      </a>

      {/* Salty Dog */}
      {/* toothbrush */}
    </div>
  );
}

export default Lagniappe;
