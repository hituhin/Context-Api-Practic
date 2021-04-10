import React, { useContext, useState } from "react";
import { categoryContext } from "../../App";

const Headar = (props) => {
  //   const [count, SetCount] = useState(props);
  const [category, setCategory] = useContext(categoryContext);
  return (
    <div>
      <h2>It's Your Header Section:{category}</h2>
      <button onClick={() => setCategory("Laptop")}>Laptop</button>
      <button onClick={() => setCategory("Camera")}>Camera</button>
      <button onClick={() => setCategory("Phone")}>Phone</button>
    </div>
  );
};

export default Headar;
