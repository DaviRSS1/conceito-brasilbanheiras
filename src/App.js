import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Rodape from "./Components/Rodape";
import PaginaLogin from "./Pages/PaginaLogin";
import PaginaInicial from "./Pages/PaginaInicial";
import PaginaProduto from "./Pages/PaginaProduto";
import PaginaCategorias from "./Pages/PaginaCategorias";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<PaginaLogin />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <PaginaInicial />
                <Rodape />
              </>
            }
          />
          <Route
            path="/produto"
            element={
              <>
                <Header />
                <PaginaProduto />
                <Rodape />
              </>
            }
          />
          <Route
            path="/categorias"
            element={
              <>
                <Header />
                <PaginaCategorias />
                <Rodape />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
