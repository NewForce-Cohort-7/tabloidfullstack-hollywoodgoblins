import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import Login from "./Login";
import { PostDetails } from "./Posts/PostDetails";
import { PostList } from "./Posts/PostList";
import { UserPosts } from "./Posts/UserPosts";


export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/myPosts" element={<UserPosts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
   );
 
}