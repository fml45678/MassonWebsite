import React from "react";
import "./LinkTree.css";

function LinkTree() {
  return (
    <div>
      <ul className="links">
        <li>
          <a href="/">Website</a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC_Vy5Ay28Op5LbMVINnsR8Q">
            Youtube
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/fml45678/">Instagram</a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@massonlemieux">Tiktok</a>
        </li>
        <li>
          <a href="https://www.etsy.com/shop/useMidi">Midi Instruments</a>
        </li>
        <li>
          <a href="https://www.etsy.com/shop/LeMieuxStudios">T-shirts</a>
        </li>
        <li>
          <a href="https://lemieuxstudios.com">Guitar Lessons</a>
        </li>
        <li>
          <a href="/podcast">The Masson LeMieux Show: Sports Talk</a>
        </li>
      </ul>
    </div>
  );
}

export default LinkTree;
