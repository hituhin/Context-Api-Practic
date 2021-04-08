import React, { useContext } from "react";
import { categoryContext } from "../../App";

const CategorieDetails = () => {
  const count = useContext(categoryContext);
  return (
    <div>
      <h4>It's your CategorieDetails: {count} !!!!</h4>
    </div>
  );
};

export default CategorieDetails;
