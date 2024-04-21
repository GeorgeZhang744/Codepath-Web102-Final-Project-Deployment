/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PostCard from "./PostCard";

const Posts = ({ props }) => {
  const { posts } = props;
  
  return (
    <ul className="Posts pb-4">
      {posts.length > 0 ? (
        posts.map((post, i) => <PostCard key={i} props={post} />)
      ) : (
        <li className="w-full mx-8 my-4 font-bold text-3xl">There is no post yet</li>
      )}
    </ul>
  );
};

export default Posts;
