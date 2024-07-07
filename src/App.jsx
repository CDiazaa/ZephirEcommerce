import React, { useState } from "react";
import MainRouter from "./routes/MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "./context/CartContext";

function App() {

  const [carrito, setCarrito] = useState([]);

  return (
    <CartContext.Provider value={{ carrito, setCarrito }}>
      <MainRouter />
    </CartContext.Provider>
  );
}

export default App;
