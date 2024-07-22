import "./style.css";
const Nav = () => {
  return (
    <>
      <header className="header-container">
        <div className="header-image-container">
          <img src="./images/megi.jpg" className="header-img" />
        </div>
        <div className="header-text-container">
          <h1 className="header-title">
            Herzlich Willkommen im Hunde-Motel &quot;Pfotenparadies&quot;!
            🐾🐶❤️
          </h1>
          <p className="header-subtitle">
            Bei uns dreht sich alles um das Wohl Ihrer pelzigen Freund!
          </p>
        </div>
      </header>

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
