import React from "react";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  return (
      <tbody>
        <tr>
          <td>{post.title}</td>
          <td>{`${post.userProfile.firstName} ${post.userProfile.lastName}`}</td>
          <td><Link to={`/posts/${post.id}`}>Details</Link></td>
        </tr>
      </tbody>
  );
};