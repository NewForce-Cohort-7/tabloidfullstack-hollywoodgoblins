import React, { useContext, useEffect, useState } from "react";
import { getAllCategories } from "../../Managers/CategoryManager";
import { Category } from "./Category";
import { Link } from "react-router-dom";
import { CategoryForm } from "./CategoryForm";

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
        <Link to={"/categories/add"}>Add New Category</Link>
        <div className="cards-column">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};


