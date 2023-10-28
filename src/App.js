import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './components/pages/Home';
import Cadastro from './components/pages/Cadastro';
import Alteracao from './components/pages/Alteracao';
import VerVagas from './components/pages/VerVagas';
import Detalhes from "./components/pages/Detalhes";

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/alteracao" element={<Alteracao />} />
          <Route path="/detalhes" element={<Detalhes />} /> 
          <Route path="/vagas" element={<VerVagas />} />  
        </Routes> 
      </Container> 

      <Footer />  
    </Router> 
  );
}

export default App;
