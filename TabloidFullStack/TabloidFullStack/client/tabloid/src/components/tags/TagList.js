import React, { useState, useEffect } from "react";
import { GetAllTags } from "../../Managers/TagManager";
import { Tag } from "./Tag";

const TagList = () => {
  const [allTags, setTags] = useState([]);

  const getTags = () => {
    GetAllTags().then(allTags => setTags(allTags)); 
  };

  useEffect(() => {
    getTags();
  }, []); 
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {allTags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagList;