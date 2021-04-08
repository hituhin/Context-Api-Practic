import "./App.css";
import { createContext, useState } from "react";
import Home from "./Component/Home/Home";
import Headar from "./Component/Header/Headar";
import Shipment from "./Component/Shipment/Shipment";

export const categoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0);
  return (
    <categoryContext.Provider value={[category, setCategory]}>
      <Home />
      <Headar />
      <Shipment />
    </categoryContext.Provider>
  );
}

export default App;
