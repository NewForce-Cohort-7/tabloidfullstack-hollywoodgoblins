import React, { useState, useEffect } from "react";
import { GetAllTags } from "../../Managers/TagManager";
import { Tag } from "./Tag";
import { Link } from "react-router-dom";

const TagList = () => {
  const [tags, setTags] = useState([]);

  const getTags = () => {
    GetAllTags().then(allTags => setTags(allTags)); 
  };

  useEffect(() => {
    getTags();
  }, []); 
  return (
    <div className="container">
      <h2>Tag List</h2>
      <Link to="/tagform">
        <button> Add a Tag </button>
      </Link>
      <div className="row justify-content-center">
        <div className="cards-column">
          {tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagList;