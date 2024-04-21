/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import timeCalculator from "../../../utils/timeUtils";

const PostContent = ({ props }) => {
  const { postedTime, title, content, imgURL } = props;

  return (
    <>
      <p className="w-full pt-4 text-md font-thin">Posted {timeCalculator.timeDifference(postedTime)}</p>
      <p className="w-full text-3xl font-bold">{title}</p>
      <p className="w-full pt-4 text-lg">{content}</p>
      {imgURL ? <img src={imgURL}></img> : <></>}
    </>
  );
};

export default PostContent;
