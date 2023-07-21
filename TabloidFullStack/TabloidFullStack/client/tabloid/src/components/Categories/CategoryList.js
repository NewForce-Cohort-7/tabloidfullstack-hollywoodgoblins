import React, { useContext, useEffect, useState } from "react";
import { getAllCategories } from "../../Managers/CategoryManager";
import { Category } from "./Category";

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    getAllCategories().then(allCategories => setCategories(allCategories));
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};


