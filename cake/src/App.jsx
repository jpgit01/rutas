import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Inicio from "./views/Home";
import Contacto from "./views/Contact";
import NoRuta from "./views/NotFound";
const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NoRuta />} />
      </Routes>
    </div>
  );
};
export default App;
