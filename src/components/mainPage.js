import React from "react";

import mountainLogo from "./images/Untitled design (3).png";
import "../App.css";

function MainPage() {
  return (
    <>
      <div id="mainBackground">
        <nav class="PageNav">
          <div class="logo">
            <img id="mountainLogo" src={mountainLogo} alt="Mountain Logo"></img>
          </div>
          <ul class="navItems">
            <a>
              <li class="listItem">01. HISTORY&nbsp;&nbsp;</li>
            </a>
            <a>
              <li class="listItem">02. TEAM &nbsp;&nbsp;</li>
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MainPage;
