import React, { useContext, useEffect, useState } from "react";
import { deleteCategory, getAllCategories } from "../../Managers/CategoryManager";
import { Category } from "./Category";
import { Link, useNavigate } from "react-router-dom";

export const CategoryList = () => {
  const [categories, setCategories] = useState([])


  const getCategories = () => {
    getAllCategories().then(allCategories => setCategories(allCategories));
  };

  useEffect(() => {
    getCategories();
  }, []);

  const navigate = useNavigate();
  const handleDeleteCategory = (categoryId) => {
    deleteCategory(categoryId)
    .then(() => {
      getCategories()
    })
    .then(() => {
        navigate("/categories")
    })
  }


  return (
    <div className="container">
      <div className="row justify-content-center">
        <Link to={"/categories/add"}>Add New Category</Link>
        <div className="cards-column">
          {categories.map((category) => (
            <Category 
            key={category.id}
            category={category}
            onDelete={handleDeleteCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


