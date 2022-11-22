import React from "react";
import "./Performance.css";

function Performance() {
  return (
    <div className="performance">
      <div className="performance__flexContainer">
        <h2>Teaching</h2>
        <a id="lessons" target="blank" href="https://lemieuxstudios.com">
          click here for guitar lessons
        </a>
        <h2>Performance</h2>
        <div className="performance__video">
          <iframe
            title="videoOne"
            src="https://www.youtube.com/embed/rB8TYrsjjoE"
          ></iframe>
        </div>
        <div className="performance__video">
          <iframe
            title="videoTwo"
            src="https://www.youtube.com/embed/fM70uPsMLis"
          ></iframe>
        </div>

        <div className="performance__video">
          <iframe
            title="videoTwo"
            src="https://www.youtube.com/embed/Yt7ikda6SxQ"
          ></iframe>
        </div>

        <div className="performance__video">
          <iframe
            title="videoTwo"
            src="https://www.youtube.com/embed/ZmhMRCNwOLE"
          ></iframe>
        </div>

        <div className="performance__video">
          <iframe
            title="videoTwo"
            src="https://www.youtube.com/embed/yTXoZMfFCMM"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Performance;
