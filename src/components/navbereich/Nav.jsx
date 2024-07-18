import React from 'react';
import "./style.css";

const Nav = () => {
    return (
        <>
            <div class="nav-image">
                  <img src="./images/megi.jpg" class="img-fluid" width="1300px" height="300px" />
            </div>
    
        <h1>Willkommen bei Happy-Dog Motel</h1>
        <h3>Bei uns dreht sich alles um das Wohl Ihrer pelzigen 
        </h3>
        
        <nav>
        <div class="topnav">
          <ul>
            <li><a href="#">Startseite</a></li>
            <li><a href="#">Über uns</a></li>
            <li><a href="#">Kontakt</a></li>
            <li><a href="service.html">Aktivitäten und Services</a></li>
            <li><a href="#">Unsere Angebote</a></li>

            <input type="text" placeholder="Search.."/>
            
          </ul>
        </div>
        </nav>

        </>
    );
}

export default Nav;
