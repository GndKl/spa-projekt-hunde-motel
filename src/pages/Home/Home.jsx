import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Ich bin die Startseite</h1>

      <div class="container">
        {/*<img src="./images/schnuffel.jpg" class="img-fluid"  style="width:100%;"/>*/}

        <div class="content">
          <h2>Herzlich Willkommen im Woofy-Motel “Pfotenparadies”! 🐾🐶❤️</h2>
          <p>
            {" "}
            Wir haben diesen besonderen Ort gegründet weil wir eine tiefe Liebe
            zu Hunden haben und ihnen ein zweites Zuhause bieten möchten Unser
            Ziel ist es, jedem Hund eine sichere, liebevolle und spaßige
            Umgebung zu bieten, in der er sich rundum wohlfühlen kann. Hier bei
            uns steht das Wohlbefinden deines Vierbeiners an erster Stelle! 🐾
          </p>
        </div>
      </div>

      <Link to={"/kontakt"}>Schau mal rein!</Link>
    </>
  );
};

export default Home;
