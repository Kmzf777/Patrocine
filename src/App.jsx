import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Header from "./components/Header";
import Contato from "./pages/Contato";
import Rodape from "./components/Rodape";
import Precos from "./pages/Precos";
import Convenios from "./pages/Convenios";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Index />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/convenios" element={<Convenios />} />
        </Routes>
        <Rodape />
      </Router>
    </>
  );
};

export default App;
