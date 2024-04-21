/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const TitleInput = (props) => {
  const { title, changeHandler } = props;

  return (
    <input
      type="text"
      className="input input-bordered w-full"
      placeholder="Title"
      value={title}
      onChange={(e) => changeHandler(e, "title")}
    />
  );
};

export default TitleInput;
