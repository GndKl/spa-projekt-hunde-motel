import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
    return (
        <>
            <div className="nav-image">
                  <img src="./images/megi.jpg" className="img-fluid" width="300px" height="100px" />
                 
            </div>
            <div className='logo'>
            <img src="./images/logo.png" className="nav-logo" width="100px" height="100px"  />
            </div>

          
    
            <h4>“Ein Paradies für Hunde – und wir meinen wirklich Hunde!”</h4>
        
        <nav>
        <div className="topnav">
          <ul>
            
            <li><Link to="/">Startseite</Link></li>
            <li><Link to="/about">Über uns</Link></li>
            {/* <li><Link to="/Kontakt">Kontakt</Link></li> */ }
      
            
            <div className="dropdown">
              <button className="dropbtn"> Nützlich
                <i className="fa fa-caret-down"></i> </button>
         <div className="dropdown-content">
         <li><Link to="/service">Aktivitäten </Link>
         
         </li>
         <Link to="/pflege">Pflege</Link>
         <Link to="/training">Training</Link>
         <Link to="/physiotherapie">Physiotherapie</Link>
         <Link to="/psychologie">Psychologie</Link>
         <Link to="/reha">Rehabilitation </Link>
         
         </div>
             </div> 
            
          
           
        
            <li><Link to="/angebote"> Angebote</Link></li>

            <li>
              <Link to="/gallerie">Gallerie</Link>
            </li>

          {/*   <li><Link to="#meinenähe">Meine Nähe</Link></li> */ }

            {/*    <input type="text" placeholder="Search.." width="100px" height="100px"/>
            */ }
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
