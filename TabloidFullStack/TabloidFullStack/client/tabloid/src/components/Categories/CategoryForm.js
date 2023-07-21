import { useState } from "react"
import { addCategory } from "../../Managers/CategoryManager";
import { useNavigate } from "react-router-dom";

export const CategoryForm = () => {
    const navigate = useNavigate();
    const [newCategory, update] = useState({
        name: ""
    })

    const handleSubmitButton = (e) => {
        e.preventDefault()
        const dataToAPI = {
            Name: newCategory.name
        }
        return addCategory(dataToAPI)
            .then(navigate("/"))
    }
    return (
    <form className="category-form">
    <fieldset>
      <div>
        <label htmlFor="name">Category Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newCategory.name}
          onChange=  {
            (e) => {
                const copy = { ...newCategory }
                copy.name = e.target.value
                update(copy)}}
          required
        />
      </div>
      </fieldset>
      <button
      onClick={(evt) => handleSubmitButton(evt)} className="btn btn-post"
      >Submit</button>
    </form>
    )
}