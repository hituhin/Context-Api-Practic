import React, { useContext, useEffect, useState } from "react";
import { categoryContext } from "../../App";
import CategorieDetails from "../CategorieDetails/CategorieDetails";

const allProduct = [
  { name: "Lenovo", category: "laptop" },
  { name: "Asus", category: "laptop" },
  { name: "Dell", category: "laptop" },
  { name: "cannon", category: "camera" },
  { name: "samsung", category: "camera" },
  { name: "nikkon", category: "camera" },
  { name: "nokia", category: "phone" },
  { name: "samsung", category: "phone" },
  { name: "huawei", category: "phone" },
];

const Categories = () => {
  const [category] = useContext(categoryContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const matchedProduct = allProduct.filter(
      (pd) => pd.category === category.toLowerCase()
    );
    setProduct(matchedProduct);
  });
  return (
    <div>
      <h2>This is your Caterogries Components !!!</h2>
      {product.map((pd) => (
        <CategorieDetails product={pd} />
      ))}
    </div>
  );
};

export default Categories;
