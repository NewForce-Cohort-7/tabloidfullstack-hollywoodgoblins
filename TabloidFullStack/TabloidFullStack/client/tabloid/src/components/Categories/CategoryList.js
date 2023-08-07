import React, { useContext, useEffect, useState } from "react";
import { deleteCategory, editCategory, getAllCategories, getCategoryById } from "../../Managers/CategoryManager";
import { Category } from "./Category";
import { Link, useNavigate, useParams } from "react-router-dom";

export const CategoryList = () => {
  const [categories, setCategories] = useState([])
  const [category, update] = useState({
    name:""
  })

  const { categoryId } = useParams()

  useEffect(() => {
    getCategoryById(categoryId)
    .then((categoryData) => {
        update(categoryData)
    })
}, [categoryId])

 useEffect(() => {
    getCategories()
  }, [])

  const getCategories = () => {
    getAllCategories().then(allCategories => setCategories(allCategories));
  };

  const navigate = useNavigate()
  const handleDeleteCategory = (categoryId) => {
    deleteCategory(categoryId)
    .then(() => {
      getCategories()
    })
    .then(() => {
        navigate("/category")
    })
  }
  const handleEditCategory = () => {
    editCategory(category)
    .then(() => {
      getCategories()
    })
    .then(() => {
        navigate("/category")
    })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <Link to={"/category/add"}>Add New Category</Link>
        <div className="cards-column">
          {categories.map((category) => (
            <Category 
            key={category.id}
            category={category}
            onDelete={handleDeleteCategory}
            onEdit={handleEditCategory}
            update={update}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


