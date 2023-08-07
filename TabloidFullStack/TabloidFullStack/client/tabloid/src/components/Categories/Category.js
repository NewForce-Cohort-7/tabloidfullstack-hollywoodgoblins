import React, { useEffect, useState, useParams } from "react";
import { useNavigate } from "react-router";
import { getCategoryById } from "../../Managers/CategoryManager";

export const Category = ({ category, onDelete, onEdit, update }) => {
  const navigate = useNavigate()
  const [editMode, setEditMode] = useState(false)

  const handleDelete = () => {
    onDelete(category.id)
  }

  const handleEdit = () => {
    setEditMode(true)
  }

  const handleSave = (e) => {
    onEdit(e)
    setEditMode(false)
  }

  const handleCancel = () => {
    setEditMode(false) 
    update(category.name)
  }

  return (
    <div className="category-name">
      {editMode ? (
        <div>
          <input
            type="text"
            defaultValue={category.name}
            onChange={
                (e) => {
                    const copy = { ...category }
                    copy.name = e.target.value
                    update(copy)
              }
            }
          />
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      ) : (
        <>
          {category.name}
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
          <button onClick={handleEdit} className="edit-button">
            Edit
          </button>
        </>
      )}
    </div>
  )
}
