import React from "react";

const baseUrl = '/api/category'

export const getAllCategories = () => {
    return fetch(baseUrl)
    .then((res) => res.json())
}

export const getCategoryById = (categoryId) => {
    return fetch(`${baseUrl}/${categoryId}`)
      .then((res) => res.json())
  }

export const addCategory = (singleCategory) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(singleCategory)
    })
}

export const deleteCategory = (categoryId) => {
    return fetch(`${baseUrl}/${categoryId}`, {
      method: "DELETE",
    })
  }

  export const editCategory = (category) => {
    return fetch(`${baseUrl}/${category.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category)
    })
    .then(() => getAllCategories())
  }
  