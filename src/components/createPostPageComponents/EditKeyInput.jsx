/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const EditKeyInput = (props) => {
  const { editKey, changeHandler } = props;

  return (
    <input
      type="text"
      className="input input-bordered w-full"
      placeholder="Secure key for editing this post in the future"
      value={editKey}
      onChange={(e) => changeHandler(e, "editKey")}
    />
  );
};

export default EditKeyInput;
