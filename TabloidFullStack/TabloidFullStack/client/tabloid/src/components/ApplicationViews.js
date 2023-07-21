import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import TagList from "./tags/TagList";
import { PostList } from "./Posts/PostList";


import { CategoryList } from "./Categories/CategoryList";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="tags"element={<TagList />} />
        <Route path="posts"element={<PostList />} />
        <Route path="/categories" element={<CategoryList/>}/>
      </Routes>
   );
 
}