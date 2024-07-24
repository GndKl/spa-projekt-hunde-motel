import React from "react";
import { Link } from "react-router-dom";


const NäHe = () => {
    return (
        <>
            <div className="dropdown">
              <button className="dropbtn"> dsf
                <i className="fa fa-caret-down"></i>
         </button>
         <div className="dropdown-content">
         <li> <Link to="/service">Aktivitäten und Services </Link>
         
         </li>
             <Link to="#tierarzt">Tierarzt </Link>
             <Link to="#Pensionen">Hundepensionen </Link>
             <Link to="#versicherungen">Versicherungen </Link>
             <Link to="#">Link 3 </Link>
         </div>
             </div> 
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla recusandae perspiciatis, est magni architecto totam hic repudiandae at! Dolor labore nesciunt qui eveniet velit dignissimos consectetur consequatur tenetur neque?</p>
        
            
        
        </>
    );
}

export default NäHe;
