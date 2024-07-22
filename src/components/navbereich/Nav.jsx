import "./style.css";
const Nav = () => {
  return (
    <>
      <div className="nav-image">
        <img
          src="./images/megi.jpg"
          className="img-fluid"
          width="300px"
          height="300px"
        />
        <img
          src="./images/dog2.jpg"
          className="img-fluid"
          width="300px"
          height="300px"
        />
        <img
          src="./images/dog3.jpg"
          className="img-fluid"
          width="300px"
          height="300px"
        />
        <img
          src="./images/dachshund.jpg"
          className="img-fluid"
          width="300px"
          height="300px"
        />
      </div>

      <h2>
        Herzlich Willkommen im Hunde-Motel &quot;Pfotenparadies&quot;! 🐾🐶❤️
      </h2>
      <h3>Bei uns dreht sich alles um das Wohl Ihrer pelzigen Freund!</h3>

      <nav>
        <div className="topnav">
          <ul>
            <li>
              <a href="/">Startseite</a>
            </li>
            <li>
              <a href="/about">Über uns</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
            <li>
              <a href="/service">Aktivitäten und Services</a>
            </li>
            <li>
              <a href="#">Unsere Angebote</a>
            </li>

            <li>
              <a href="/gallerie">Gallerie</a>
            </li>

            <input type="text" placeholder="Search.." />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
