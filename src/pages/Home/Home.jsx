import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
          

            <div className="container">
             
           <div className="content">
               <h3>Herzlich Willkommen im Woofy-Motel “Pfotenparadies”! 🐾🐶❤️</h3>
                   <p> Wir haben diesen besonderen Ort gegründet  weil wir eine tiefe Liebe zu Hunden haben und ihnen ein zweites Zuhause bieten möchten
                       Unser Ziel ist es, jedem Hund eine sichere, liebevolle und spaßige Umgebung zu bieten, in der er sich rundum wohlfühlen kann. Hier bei uns steht das Wohlbefinden deines Vierbeiners an erster Stelle! 🐾</p>
               </div>
               <br />

               <div className="content">
                <h4>Bei uns steht das Wohl Ihres Hundes an erster Stelle. 
                    <br /> Wir bieten eine Vielzahl von Aktivitäten, die speziell auf die Bedürfnisse und Vorlieben Ihres Vierbeiners abgestimmt sind:</h4>
             <br />
              <h4>Abenteuerliche Spaziergänge:</h4>
              <p> Erkunden Sie gemeinsam mit Ihrem Hund die umliegenden Wälder und Wiesen. Unsere geführten Touren bieten viel Spaß und Bewegung.</p>
              <br />
              <h4>Spiel und Spaß im Freilaufbereich: </h4>
              <p>Unser großzügiger Freilaufbereich ist perfekt für ausgelassene Spiele und soziale Interaktionen mit anderen Hunden.</p>
               </div>
              
          </div>
<br />     
           <div className="mali">
           <img src="./images/mali.jpg" alt="" width="100%" height="300px" />
           <br />
           <img src="./images/coli.jpg" alt="" width=" 100%" height="300px" />

           </div>
           {/*<Link to={"/kontakt"}>Kontaktieren Sie uns!</Link> */}

            
        </>
    );
};

export default Home;
