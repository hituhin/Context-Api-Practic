import React, { useContext } from "react";
import { categoryContext } from "../../App";

const CategorieDetails = (props) => {
  const { name } = props.product;
  return (
    <div>
      <h4>It's your CategorieDetails: !!!!</h4>
      <h3>Selected Category:{name}</h3>
    </div>
  );
};

export default CategorieDetails;
