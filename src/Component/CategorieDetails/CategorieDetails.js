import React, { useContext } from "react";
import { categoryContext } from "../../App";

const CategorieDetails = () => {
  const category = useContext(categoryContext);
  return (
    <div>
      <h4>It's your CategorieDetails: {category} !!!!</h4>
    </div>
  );
};

export default CategorieDetails;
