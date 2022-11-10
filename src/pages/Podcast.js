import React from "react";
import "./Podcast.css";

function Podcast() {
  return (
    <div className="podcast__container">
      <img
        className="sportsTalkLogo"
        src="sportsTalkLogo.jpg"
        alt="The Masson LeMieux Show Sports Talk Logo"
      />

      <span>Listen Live Daily on YouTube at 2:00 EST and 1:00 CST</span>

      <div className="spotify">
        <iframe
          //   style="border-radius:12px"
          src="https://open.spotify.com/embed/show/6uqELpFNx4XmH5bfihxrju?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <a
        style={{ color: "purple" }}
        href="https://podcasts.apple.com/us/podcast/the-masson-lemieux-show-sports-talk/id1651137137"
      >
        <span>Apple Podcasts</span>
      </a>
      <a href="https://www.youtube.com/channel/UC_Vy5Ay28Op5LbMVINnsR8Q">
        <span style={{ color: "red" }}>YouTube</span>
      </a>
    </div>
  );
}

export default Podcast;
