import { Outlet } from "react-router-dom";
import Nav from "../components/navbereich/Nav";

const SharedLayout = () => {
    return (
        <>
          <Nav/>
            <main className="main-container">
                <Outlet />
            </main>
            <h2>Ich bin der zukünftige Footer</h2>
            {/* footer */}
        </>
    );
};

export default SharedLayout;
