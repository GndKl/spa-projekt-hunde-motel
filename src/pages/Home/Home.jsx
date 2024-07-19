import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Was du hier findest</h1>

      <Link to={"/kontakt"}>Schau mal rein!</Link>
    </>
  );
};

export default Home;
