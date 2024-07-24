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
            
            <li><a href="/">Startseite</a></li>
            <li><a href="/about">Über uns</a></li>
            {/* <li><a href="/Kontakt">Kontakt</a></li> */ }
      
            
            <div className="dropdown">
              <button className="dropbtn"> Nützlich
                <i className="fa fa-caret-down"></i> </button>
         <div className="dropdown-content">
         <li><a href="/service">Aktivitäten </a>
         
         </li>
         <a href="/pflege">Pflege</a>
         <a href="/training">Training</a>
         <a href="/physiotherapie">Physiotherapie</a>
         <a href="/psychologie">Psychologie</a>
         <a href="/reha">Rehabilitation </a>
         
         </div>
             </div> 
            
          
           
        
            <li><a href="/angebote"> Angebote</a></li>

            <li>
              <a href="/gallerie">Gallerie</a>
            </li>

          {/*   <li><a href="#meinenähe">Meine Nähe</a></li> */ }

            {/*    <input type="text" placeholder="Search.." width="100px" height="100px"/>
            */ }
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
