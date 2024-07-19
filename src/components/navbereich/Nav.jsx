import React from "react";
import "./style.css";

const Nav = () => {
  return (
    <>
      <div class="nav-image">
        <img
          src="./images/megi.jpg"
          class="img-fluid"
          width="1300px"
          height="300px"
        />
      </div>

      <h1>Willkommen bei Happy-Dog Motel Besucher</h1>
      <h4>Bei uns dreht sich alles um das Wohl Ihres Haustieres</h4>

      <nav>
        <div class="topnav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
            <li>
              <a href="#">Angebote</a>
            </li>

            <input type="text" placeholder="Search.." />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
