import { Outlet } from "react-router-dom";
import Nav from "../components/navbereich/Nav";
import Footer from "../components/footer/Footer";

const SharedLayout = () => {
    return (
        <>
          <Nav/>
            <main className="main-container">
                <Outlet />
            </main>
          <Footer/>
        </>
    );
};

export default SharedLayout;
