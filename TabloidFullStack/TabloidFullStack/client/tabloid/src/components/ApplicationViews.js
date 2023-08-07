import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import TagList from "./tags/TagList";
import { PostList } from "./Posts/PostList";
import { TagForm } from "./tags/TagForm";
import { CategoryList } from "./Categories/CategoryList";
import { CategoryForm } from "./Categories/CategoryForm";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/tags" element={<TagList />} />
        <Route path="/tagform" element={<TagForm />} />
        <Route path="posts" element={<PostList />} />
        <Route path="/category" element={<CategoryList/>}/>
        <Route path="/category/add" element={<CategoryForm/>}/>
      </Routes>
   )
 
}
