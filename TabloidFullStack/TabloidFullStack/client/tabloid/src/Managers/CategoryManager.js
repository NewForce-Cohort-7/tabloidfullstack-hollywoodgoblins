import React from "react";

const baseUrl = 'https://localhost:5001/api/category'

export const getAllCategories = () => {
    return fetch(`${baseUrl}`)
    .then((res) => res.json())
}