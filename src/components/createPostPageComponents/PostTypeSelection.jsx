/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { POST_TYPES } from "../../configs/postType.config";

const PostTypeSelection = (props) => {
  const { postType, changeHandler } = props;

  return (
    <select className="select select-bordered w-full" onChange={(e) => changeHandler(e, "postType")}>
      <option disabled selected>
        Post Type
      </option>
      {POST_TYPES.map((type, i) => (
        <option key={i} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default PostTypeSelection;
