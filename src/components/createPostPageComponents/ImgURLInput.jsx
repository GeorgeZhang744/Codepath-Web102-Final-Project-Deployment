/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ImgURLInput = (props) => {
  const { imgURL, changeHandler } = props;

  return (
    <input
      type="text"
      className="input input-bordered w-full"
      placeholder={"Image URL (optional)"}
      value={imgURL}
      onChange={(e) => changeHandler(e, "imgURL")}
    />
  );
};

export default ImgURLInput;
