import React from "react";

const baseUrl = 'https://localhost:5001/api/category'

export const getAllCategories = () => {
    return fetch(`${baseUrl}`)
    .then((res) => res.json())
}

export const addCategory = (singleCategory) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleCategory)
    })
}