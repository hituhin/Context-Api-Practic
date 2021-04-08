import React, { useContext } from "react";
import { categoryContext } from "../../App";

const Shipment = () => {
  const [category, setCategory] = useContext(categoryContext);
  return (
    <div>
      This is your Shipment: {category}
      <br />
      <button onClick={() => setCategory(category - 1)}>
        Select From Category!
      </button>
    </div>
  );
};

export default Shipment;
