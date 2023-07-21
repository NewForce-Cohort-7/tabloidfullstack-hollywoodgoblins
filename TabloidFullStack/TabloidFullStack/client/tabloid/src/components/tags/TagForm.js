import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { AddTag } from "../../Managers/TagManager";

export const TagForm = () => {

    const [tag, setTag] = useState({ name: ''});
    const navigate = useNavigate();

    
  const handleSubmit = (event) => {
    event.preventDefault()

    const tagToSendToApi = {
        name: tag.name
    }

    return AddTag(tagToSendToApi)
        .then(() => navigate("/tags"))
  }

  return (
    <form className="post-form">
        <h2 className="post-form-title">Create a New Post</h2>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={tag.name}
                        onChange={
                            (event) => {
                                const copy = { ...tag }
                                copy.name = event.target.value
                                setTag(copy)
                            }
                        } />
                </div>
        </fieldset>
        <button
        onClick={(clickEvent) => handleSubmit(clickEvent)} className="btn btn-primary">Submit Post</button>
    </form>
  )
}