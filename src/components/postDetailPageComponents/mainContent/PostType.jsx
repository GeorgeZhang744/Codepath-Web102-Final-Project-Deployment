/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const PostType = ({ props }) => {
  const { postType } = props;
  return <p className=" ml-auto font-bold text-2xl my-auto">{postType}</p>;
};

export default PostType;
