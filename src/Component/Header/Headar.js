import React, { useContext, useState } from "react";
import { categoryContext } from "../../App";

const Headar = (props) => {
  //   const [count, SetCount] = useState(props);
  const [category, setCategory] = useContext(categoryContext);
  return (
    <div>
      <h2>It's Your Header Section:{category}</h2>
      <button onClick={() => setCategory(category + 1)}>Incrise</button>
    </div>
  );
};

export default Headar;
