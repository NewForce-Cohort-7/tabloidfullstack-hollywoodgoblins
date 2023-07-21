import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import TagList from "./tags/TagList";
import { TagForm } from "./tags/TagForm";
import { CategoryList } from "./Categories/CategoryList";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/tags" element={<TagList />} />
        <Route path="/tagform" element={<TagForm />} /> 
        <Route path="/categories" element={<CategoryList/>}/>
      </Routes>
   );
}
