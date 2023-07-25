import React from "react";
import { useNavigate } from "react-router";

export const Category = ({ category, onDelete, updateList }) => {
    const handleDelete = () => {
        onDelete(category.id)
    }

    return (
        <div className="category-name">
            {category.name}
            <button onClick={handleDelete} className="delete-button">
                Delete
            </button>
        </div>
    )
}