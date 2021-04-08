import "./App.css";
import { createContext, useState } from "react";
import Home from "./Component/Home/Home";
import Headar from "./Component/Header/Headar";
import Shipment from "./Component/Shipment/Shipment";

export const categoryContext = createContext();

function App() {
  return (
    <categoryContext.Provider value="Laptop">
      <Home />
      <Headar />
      <Shipment />
    </categoryContext.Provider>
  );
}

export default App;
