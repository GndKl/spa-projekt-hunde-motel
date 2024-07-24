import AppProvider from "./context/AppProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home/Home";
import Kontakt from "./pages/Kontakt/Kontakt";
import NotFound from "./pages/NotFound/NotFound";

import Gallerie from "./pages/Gallerie/Gallerie";
import Service from "./pages/Service/Service";
import About from "./pages/About/About";
import Angebote from "./pages/Angebote/Angebote";
import NHe from "./pages/Nähe/Nähe";
import Hundepflege from "./pages/Hundepflege/Hundepflege";
import Training from "./pages/Training/Training";
import Therapie from "./pages/Therapie/Therapie";
import Psychologie from "./pages/Psychologie/Psychologie";
import Reha from "./pages/Reha/Reha";



function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />

              <Route path="gallerie" element={<Gallerie />} />

              <Route path="About" element={<About />} />

              <Route path="Angebote" element={<Angebote />} />

              <Route path="service" element={<Service />} />

                            <Route path="nhe" element={<NHe />} />

                            <Route path="Hundepflege" element={<Hundepflege />} />
                            <Route path="Training" element={<Training />} />
                            <Route path="Therapie" element={<Therapie />} />
                            <Route path="Psychologie" element={<Psychologie />} />
                            <Route path="Reha" element={<Reha />} />


              {/* Weitere Routen hier zwischen */}
              <Route path="kontakt" element={<Kontakt />} />

              {/* Weitere Routen hier zwischen */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
