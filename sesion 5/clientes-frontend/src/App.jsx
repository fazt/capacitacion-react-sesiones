import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClientesPagina from "./pages/ClientesPagina";
import ProductosPagina from "./pages/ProductosPagina";
import ProveedoresPagina from "./pages/ProveedoresPagina";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/clientes" element={<ClientesPagina />} />
          <Route path="/productos" element={<ProductosPagina />} />
          <Route path="/proveedores" element={<ProveedoresPagina />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
