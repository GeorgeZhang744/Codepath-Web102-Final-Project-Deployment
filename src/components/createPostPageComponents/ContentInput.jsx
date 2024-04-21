/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ContentInput = (props) => {
  const { content, changeHandler } = props;

  return (
    <textarea
      className="textarea textarea-bordered w-full"
      rows="5"
      placeholder="Content (Optional)"
      value={content}
      onChange={(e) => changeHandler(e, "content")}
    />
  );
};

export default ContentInput;
