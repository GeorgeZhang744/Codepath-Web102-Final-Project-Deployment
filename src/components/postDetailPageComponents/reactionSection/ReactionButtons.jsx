/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import UpvotesButton from "./UpvotesButton";
import LikeButton from "./LikeButton";

const ReactionButtons = ({props}) => {
  return <div className="w-full pt-4 flex py-auto">
    <UpvotesButton props={props}/>
    <LikeButton/>
  </div>
};

export default ReactionButtons;
