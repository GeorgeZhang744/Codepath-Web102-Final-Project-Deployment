/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../../client";

const UpvotesButton = ({ props }) => {
  const {postID} = useParams()

  let { upvotesCount } = props;
  const [localUpvotesCount, setLocalUpvotesCount] = useState(upvotesCount);

  useEffect(() => {
    setLocalUpvotesCount(upvotesCount);
  }, [upvotesCount]);

  const upvotesClickHandler = async () => {
    await supabase.from("Post").update({upvotesCount: localUpvotesCount + 1}).eq("id", postID)
    setLocalUpvotesCount(localUpvotesCount + 1)
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="swap-off icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
        <foreignObject x="0" y="0" width="40" height="20">
          <button onClick={upvotesClickHandler} style={{ width: "100%", height: "100%" }}></button>
        </foreignObject>
      </svg>
      <label>{localUpvotesCount} Upvotes</label>
    </>
  );
};

export default UpvotesButton;
