/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import timeCalculator from "../../utils/timeUtils";

const PostCard = ({ props }) => {
  const { id, postedTime, title, postType, upvotesCount, comments } = props;

  return (
    <Link to={`/post/${id}`}>
      <li className="Post-Card mx-8 my-4 bg-gray-300 rounded-xl">
        <div className="flex w-full px-4 pt-2">
          <p className="justify-start font-thin">Posted {timeCalculator.timeDifference(postedTime)}</p>
          <p className=" ml-auto font-bold">{postType}</p>
        </div>
        <p className="w-full px-4 pt-2 text-2xl font-bold">{title}</p>
        <div className="flex w-full px-4 py-2">
          <p>{upvotesCount} upvotes</p>
          <p className="ml-4">{comments.length} comments</p>
        </div>
      </li>
    </Link>
  );
};

export default PostCard;
